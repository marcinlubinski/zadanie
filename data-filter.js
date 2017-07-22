var $firsname = $('.firsname');
var $surname = $('.surname');
var $email = $('.email');
var $role = $('.role');
var $dataCreated = $('.dataCreated');
var $activate = $('.activate');
var $ipRegister = $('.ipRegister');
var $lastLogin = $('.lastLogin');
var $earnedDollars = $('.earnedDollars');



task.forEach(function (item) {
    $firsname.append('<option>' + item.firsname + '</option>');
});


$firsname.on('change', function() {
    console.log($firsname.val());
});