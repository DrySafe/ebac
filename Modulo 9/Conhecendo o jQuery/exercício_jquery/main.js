$(document).ready(function() {
    $('#addTask').click(addTask);

    $('#taskInput').keydown(function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

    $(document).on('click', 'li', function() {
    $(this).toggleClass('completed');
});

    function addTask() {
    const task = $('#taskInput').val();
    if (task !== '') {
        $('#taskList').append('<li>' + task + '</li>');
        $('#taskInput').val('');
        $('#taskInput').focus();
    }
    }
});