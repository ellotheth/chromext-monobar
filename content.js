String.prototype.lpad = function(padString, length) {
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
};

String.prototype.rpad = function(padString, length) {
    var str = this;
    while (str.length < length)
        str = str + padString;
    return str;
};

var id = chrome.i18n.getMessage('@@extension_id') + '-monobar';

/* Capture all context menu events and grab the target */
var editable = null;
document.addEventListener("contextmenu", function(e) {
    editable = e.target;
}, true);

/* When the monobar context menu item is selected, get the last context menu
 * target and toggle the font face.
 */
chrome.extension.onMessage.addListener(function(message, sender, response) {
    if (message == 'monobar-changefont') {
        var style = getComputedStyle(editable, '');
        var font = style.getPropertyValue('font-family');
        if (font && font.search("monospace") >= 0) {
            editable.style.setProperty('font-family', 'inherit', 'important');
        } else {
            editable.style.setProperty('font-family', 'monospace, ' + id, 'important');
        }
    }
});

function getCaretPosition(node) {
    var linenum = 1;
    var linestart = -1;
    var el = node.get(0);
    var content = node.val();
    
    var caret = (el.selectionStart || el.selectionStart == '0')
        ? el.selectionStart : 0;
    
    var cnt = caret;
    while (cnt-- > 0) {
        if (content.charAt(cnt) == '\n') {
            linenum++;
            if (linestart < 0) linestart = cnt;
        }
    }
    
    var x = node.position().left;
    var y = node.outerHeight(true) + node.position().top;
    
    if ($('#' + id).length < 1) {
        node.after($('<div></div>')
                   .attr('id', id)
                   .css({position: 'absolute',
                         top: y + 'px',
                         left: x + 'px',
                         padding: '0 .5em',
                         fontFamily: 'monospace',
                         backgroundColor: 'white',
                         border: '1px solid gray',
                         whiteSpace: 'pre'
                        }));
    }
    
    var colnumLabel= ('Col: ' + (caret - linestart)).rpad(' ', 10);
    var linenumLabel = ('Ln: ' + linenum).rpad(' ', 10);
    var charcountLabel = ('Len: ' + content.length).lpad(' ', 10);

    $('#' + id)
        .html(linenumLabel + ' ' + colnumLabel + ' ' + charcountLabel)
        .css({top: y + 'px', left: x + 'px'})
        .show();
}

$('textarea').live('keyup', function() { getCaretPosition($(this)); });
$('textarea').live('click', function() { getCaretPosition($(this)); });
$('textarea')
    .live('blur', function() { $('#' + id).remove(); });

