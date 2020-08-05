var firstTime = true;

$(document).ready(function() {
  $.validator.messages.required = '';
  $.validator.messages.max = '';
  $.validator.messages.min = ''
  
  $('#dados-basicos').validate({
    rules: {
      idade: {
        range: [8,20]
      }
    }
  });
  
  $('#dados-basicos-ninja').validate();
  
  $('#descricao-psicologica').validate();
  
  $('.gotoStep2').on('click', function () {
    if ($('#dados-basicos').valid()) {
      $('.form-ficha').hide();~
      $('#primeiraDica').hide();
      $('#dados-basicos-ninja').show();
      $('#segundaDica').show();
    }
  });
  
  $('.gotoStep3').on('click', function () {
    if ($('#dados-basicos-ninja').valid()) {
      $('.form-ficha').hide();
      $('#segundaDica').hide();
      $('#descricao-psicologica').show();
      $('#terceiraDica').show();
    }
  });
  
  $('.gotoStep4').on('click', function () {
    if ($('#transtornos').val() == "") {
      $('#transtornos').val('--')
    }
    if ($('#descricao-psicologica').valid()) {
      $('.form-ficha').hide();
      $('#terceiraDica').hide();
      $('#descricao-fisica').show();
      $('#quartaDica').show();
    }
  });
  
  $('.gotoStep5').on('click', function () {
    if ($('#outros').val() == "") {
      $('#outros').val('--')
    }
    if ($('#descricao-fisica').valid()) {
      $('.form-ficha').hide();
      $('#quartaDica').hide();
      $('#historia-form').show();
      $('#quintaDica').show();
    }
  });

  $('.gotoStep6').on('click', function () {
    if ($('#historia-form').valid()) {
      $('.form-ficha').hide();
      $('#quintaDica').hide();
      $('#qualidadesDefeitos-form').show();
      $('#sextaDica').show();
    }
  });

  $('.gotoStep7').on('click', function () {
    if(getQualidadesMaxPoints() > 0 && firstTime == true) {
      alert('Você ainda tem pontos de qualidade para distribuir. Tem certeza que quer continuar?')
      firstTime = false;
    } else if (getDefeitosMinPoints() > 0) {
      alert('Você precisa distribuir mais pontos de defeitos')
    } else {
      $('.form-ficha').hide();
      $('#sextaDica').hide();
      $('#databook').show();
      $('#setimaDica').show();
      firstTime = true;
    }
  });

  $('.gotoStep8').on('click', function () {
    if (getDatabookMaxPoints() > 0) {
      alert('Distribua os pontos restantes')
    } else {
      $('.form-ficha').hide();
      $('#setimaDica').hide();
      $('#naturezas-form').show();
      $('#oitavaDica').show();
    }
  });

  $('.saveAll').on('click', function () {
    if (getBolsaMaxSlots() > 0 && firstTime == true) {
      alert('Você pode ter mais armas em sua bolsa. Tem certeza que deseja continuar?')
      firsTime = false;
    } else {
      $('#formContainer').hide();
      $('#infos-importantes').hide();
      guardarInfo();
      $('#fim').show();
    }
  });
});


//Controle dos Arquétipos

var x = document.getElementsByClassName("hidden-arquetipo");

var arquetipoAtual = document.getElementById("arquetipo-dropdown").value;


x.display = "none";
document.getElementById(arquetipoAtual).style.display = "flex"
document.getElementById(arquetipoAtual).style.flexDirection = "column"
document.getElementById("descricao-" + arquetipoAtual).style.display = "flex";
document.getElementById("descricao-" + arquetipoAtual).style.display = "row";


document.getElementById("arquetipo-dropdown").onchange = function() {arquetipoHelper()};

function arquetipoHelper() {
  console.log(arquetipoAtual)
  document.getElementById(arquetipoAtual).style.display = "none"
  document.getElementById("descricao-" + arquetipoAtual).style.display = "none";
  
  
  arquetipoAtual = document.getElementById("arquetipo-dropdown").value;
  document.getElementById(arquetipoAtual).style.display = "flex"
  document.getElementById(arquetipoAtual).style.flexDirection = "column"
  document.getElementById("descricao-" + arquetipoAtual).style.display = "flex";
  document.getElementById("descricao-" + arquetipoAtual).style.display = "row";
}


//Controle das qualidades
var sanfona = document.getElementsByClassName("sanfona");
var i;

for (i = 0; i < sanfona.length; i++) {
  sanfona[i].addEventListener("click", function() {
    this.classList.toggle("sanfona-ativa");
    var aba = this.nextElementSibling;
    if (aba.style.maxHeight) {
      aba.style.maxHeight = null;
    } else {
      aba.style.maxHeight = "none";
      aba.style.marginLeft = "10px";
    } 
  });
}