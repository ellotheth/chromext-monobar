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

function getCaretPosition(node) {
    var caret, linestart, linenum, x, y, statusbar;
    var colnumLabel, linenumLabel, charcountLabel;
    var linenum = 1;
    var el = node.get(0);
    var content = node.val();
    
    caret = (el.selectionStart || el.selectionStart == '0')
        ? el.selectionStart : 0;
    
    linestart = caret;
    while (linestart-- > 0) if (content.charAt(linestart) == '\n') linenum++;

    linestart = caret;
    while (linestart-- > 0) if (content.charAt(linestart) == '\n') break;
    
    x = node.position().left;
    y = node.outerHeight(true) + node.position().top;
    
    if ($('#chromextTextareaStatusBar').length < 1) {
        node.after($('<div></div>')
                   .attr('id', 'chromextTextareaStatusBar')
                   .css({position: 'absolute',
                         top: y + 'px',
                         left: x + 'px',
                         padding: '0 .5em',
                         fontSize: '.8em',
                         fontFamily: 'monospace',
                         backgroundColor: 'white',
                         border: '1px solid gray',
                         whiteSpace: 'pre'
                        }));
    }
    
    colnumLabel= ('Col: ' + (caret - linestart)).rpad(' ', 10);
    linenumLabel = ('Ln: ' + linenum).rpad(' ', 8);
    charcountLabel = ('Len: ' + content.length).lpad(' ', 10);

    $('#chromextTextareaStatusBar')
        .html(linenumLabel + ' ' + colnumLabel + charcountLabel)
        .css({top: y + 'px', left: x + 'px'})
        .show();
}

$('textarea').live('keyup', function() { getCaretPosition($(this)); });
$('textarea').live('click', function() { getCaretPosition($(this)); });
$('textarea')
    .live('blur', function() { $('#chromextTextareaStatusBar').hide(); });

