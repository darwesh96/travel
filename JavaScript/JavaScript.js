$(function () {

    $('#btnegypt').click(function () {

        $('body').css({ 'background': 'url("Photo/Egypt.jpg") no-repeat center fixed', 'background-size': 'cover' });
        $('.egypt').show();
        $('.italy').hide();
        $('.germany').hide();
    });



    $('#btnitaly').click(function () {

        $('body').css({ 'background': 'url("Photo/italy.jpg") no-repeat center fixed', 'background-size': 'cover' });
        $('.egypt').hide();
        $('.italy').show();
        $('.germany').hide();
    });




    $('#btngermany').click(function () {

        $('body').css({ 'background': 'url("Photo/germany.jpg") no-repeat center fixed', 'background-size': 'cover' });
        $('.egypt').hide();
        $('.italy').hide();
        $('.germany').show();
    });
});