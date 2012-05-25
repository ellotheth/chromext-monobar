function getCaretPosition(node) {
    var pos = 0;
    var el = node.get(0);
    var content = node.val();

    if (el.selectionStart || el.selectionStart == '0') pos = el.selectionStart;

    while (pos > 0) {}
    $('#caretPosition').html(pos);
}

$('textarea').live('keyup', function() { getCaretPosition($(this)); });
$('textarea').live('click', function() { getCaretPosition($(this)); });
