$(document).ready(function () {
    listenerStart();
});

function wyscig() {
    usunBtnStart();
    pokazFlaga();
    zeruj();
    okrazenie(1);
}

function listenerStart() {
    $('.btnStart').on('click', function () {
        wyscig();
    });
}

function okrazenie(i) {
    var okrazeniaLiczba = $('.okrazenia-liczba');
    if (i <= 3) {
        okrazeniaLiczba.html(i - 1);
        console.log('Okrazenie i: ' + i);
        wPrawo(i);
    } else {
        okrazeniaLiczba.html(i - 1);
        var start = $('.start');
        start.removeClass('flaga');
        start.addClass('btnStart');

        $('.btnStart').on('click', function () {
            wyscig();
        });

        start.html('Start');
        $('.czas').html('43,5s');
    }
}


function wPrawo(i) {
    $('.samochodzik').animate({
        left: '780px'
    }, 4000, function () {
        wDol(i);
    });
}

function wDol(i) {
    $('.samochodzik').animate({
        top: '380px'
    }, 2000, function () {
        wLewo(i);
    });
}

function wLewo(i) {
    if (i === 2) {
        lecDoTankowanie(i);
    } else {
        wLewoBezTankowania(i);
    }
}

function wLewoBezTankowania(i) {
    $('.samochodzik').animate({
        left: '0px'
    }, 6000, function () {
        wGore(i);
    });
}

function lecDoTankowanie(i) {
    $('.samochodzik').animate({
        left: '670px',
        top:'420px'
    }, 2000, function () {
        pokazFlacha(i);
    });
}

function pokazFlacha(i) {

    var flacha = $('.flacha');
    var tankowanie = $('.tankowanie');

    flacha.show();
    tankowanie.show();

    setTimeout(function () {
        flacha.hide();
        tankowanie.hide();

        wLewoPoFlaszce(i);
    }, 3000);
}

function wLewoPoFlaszce(i) {
    $('.samochodzik').animate({
        left: '0px',
        top:'380px'
    }, 4000, function () {
        wGore(i);
    });
}

function wGore(i) {
    var go = $('.go');
    go.show();
    $('.samochodzik').animate({
        top: '0px'
    }, 1500, function () {
        okrazenie(++i);
        go.hide();
    });
}

function zeruj() {
    $('.okrazenia-liczba').html('0');
    $('.czas').html('0');
}

function pokazFlaga() {
    $('.start').addClass('flaga');
}

function usunBtnStart() {
    var btnStart = $('.btnStart');
    btnStart.html('');
    btnStart.removeClass('btnStart');
    btnStart.off();
}
