function getCaretPosition(node) {
    var caret, linestart;
    var el = node.get(0);
    var content = node.val();
    
    caret = (el.selectionStart || el.selectionStart == '0') ? el.selectionStart : 0;
    
    linestart = caret;
    while (linestart-- > 0) if (content.charAt(linestart) == '\n') break;
    
    $('#caretPosition').html(caret - linestart);
}

$('textarea').live('keyup', function() { getCaretPosition($(this)); });
$('textarea').live('click', function() { getCaretPosition($(this)); });
