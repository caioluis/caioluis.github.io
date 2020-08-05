var limiteNin = limiteGen = limiteTai = '';
var pontosNin = pontosTai = pontosGen = 0;
var pericia = '';
var contadorJutsusGerais = 0;
var jutsusGerais = '';
var menteImplacavel = '';

$('#segunda-natureza').parent().hide();
$('#terceira-natureza').parent().hide();
$('#kg-elemental').parent().hide();

$('#primeira-natureza').val('--');
$('#segunda-natureza').val('--');
$('#terceira-natureza').val('--');
$('#kg-elemental').val('--');

function atualizarLimites() {
    pontosNin = parseInt($('#ninjutsu').val()) + bonusNin;
    pontosTai = parseInt($('#taijutsu').val()) + bonusTai;
    pontosGen = parseInt($('#genjutsu').val()) + bonusGen;
    pontosSelos = parseInt($('#selos').val());
    pontosInt = parseInt($('#int').val()) + bonusInt;

    limiteNin = ` +${pontosNin + (bonusNin*2)} Ninjutsus`
    limiteTai = ` +${pontosTai + (bonusTai*2)} Taijutsus`
    limiteGen = ` +${pontosGen + (bonusGen*2)} Genjutsus`
    if (pontosNin == 6) {
        limiteNin += ' +1 Ninjutsu de todos os ranks'
    }
    if (pontosNin == 0) {
        limiteNin = '';
    }

    if (pontosTai == 6) {
        limiteTai += ' +1 Taijutsu de todos os ranks'
    }
    if (pontosTai == 0) {
        limiteTai = '';
    }

    if (pontosGen == 6) {
        limiteGen += ' +1 Genjutsu de todos os ranks'
    }
    if (pontosGen == 0) {
        limiteGen = '';
    }

    if (contadorJutsusGerais != 0){
        jutsusGerais = ` +${contadorJutsusGerais} Jutsus Gerais`;
    }

    $('#limite-jutsus').val('5 Jutsus & +1 Rank S' + jutsusGerais + limiteNin + limiteTai + limiteGen + menteImplacavel);

    if (pontosNin > 2) {
        $('#limite-jutsus').val($('#limite-jutsus').val() + pericia)
        ('#qualidadeElemental').show();
    } else {
        $('#qualidadeElemental').hide();
    }

    if (pontosNin == 0) {
        $('#primeira-natureza').val('--');
    } else {
        $('#primeira-natureza').val($('#afinidade-elemental').val());
    }

    if (pontosNin > 2 && pontosSelos > 0 && pontosInt > 2 && $('#qualidadeGCC').hasClass('qualidade-escolhida')){
        $('#qualidadeFuin').show();
    } else {
        $('#qualidadeFuin').hide();
    }

    if (pontosTai > 2) {
        $('#qualidadeArmamentista').show();
    } else {
        $('#qualidadeArmamentista').hide();
    }
};

$('#afinidade-elemental').on('keyup', function() {
    if(pontosNin == 0) {
        $('#primeira-natureza').val('--');
    } else {
        $('#primeira-natureza').val($('#afinidade-elemental').val());
        $('#primeira-natureza').val(($('#primeira-natureza').val()).replace(/e Kōton/g, ''));
    }
});

$('#afinidade-elemental').on('keypress', function (e) {
    var e = window.event || e;
    var key = e.keyCode;
     if (key == 32) {
      e.preventDefault();
     }
});