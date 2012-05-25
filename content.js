function getCaretPosition(node) {
    var caret, linestart, x, y, statusbar;
    var el = node.get(0);
    var content = node.val();
    
    caret = (el.selectionStart || el.selectionStart == '0')
            ? el.selectionStart : 0;
    
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
                         border: '1px solid gray'
                        }));
    }
    $('#chromextTextareaStatusBar')
        .html('Col: ' + (caret - linestart))
        .css({top: y + 'px', left: x + 'px'})
        .show();
}

$('textarea').live('keyup', function() { getCaretPosition($(this)); });
$('textarea').live('click', function() { getCaretPosition($(this)); });
$('textarea')
    .live('blur', function() { $('#chromextTextareaStatusBar').hide(); });
