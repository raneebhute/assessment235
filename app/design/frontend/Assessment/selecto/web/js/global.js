define([
    'jquery'
], $ => {
    $(document).on('click', '.block.newsletter .action.subscribe', function (e) {
        alert("This is just a test.");
        e.preventDefault();
    });
});
