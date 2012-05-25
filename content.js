function getCaretPosition(node) {
    var caret = 0;
    var linestart = 0;
    var el = node.get(0);
    var content = node.val();
    
    if (el.selectionStart || el.selectionStart == '0') caret = el.selectionStart;
    
    linestart = caret;
    while (linestart > 0) {
        if (content.charAt(linestart) == '\n') {
            linestart++;
            break;
        } else linestart--;
    }
    
    $('#caretPosition').html(caret - linestart + 1);
}

$('textarea').live('keyup', function() { getCaretPosition($(this)); });
$('textarea').live('click', function() { getCaretPosition($(this)); });
