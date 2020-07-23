
var toggleText = $('#clakg-label');
var claEscolhido =  $('#cla-dropdown');
var kgEscolhida = $('#kg-dropdown');
    toggleText.click(
        function claKgToggle () {     
        if (toggleText.html() == '<mark>Clã</mark>/Kekkei Genkai') {
            toggleText.html('Clã/<mark>Kekkei Genkai</mark>');
            claEscolhido.val('--');
            claEscolhido.hide();
            kgEscolhida.show();
            
        } else {
            toggleText.html('<mark>Clã</mark>/Kekkei Genkai');
            kgEscolhida.val('--');
            kgEscolhida.hide();
            claEscolhido.show();
        }
    });

    $(document).ready(function(){
        $('#semCla').change(
        function semClaHandler(field){
            clearQualidades();
            clearDefeitos();
            databookAtualizarTexto();
            atualizarTexto();
            $('.cla').hide();
            if($('#semCla').is(':checked')){
                $('.qualidadesClas').hide();
                $('#cla-dropdown').val('--'); 
                $('#cla-dropdown').attr("disabled", true);
                $('#kg-dropdown').val('--'); 
                $('#kg-dropdown').attr("disabled", true);
            }else {
                $('#cla-dropdown').attr("disabled", false);
                $('#kg-dropdown').attr("disabled", false);
            }
        })
    });
    

    qualidadeNinjutsu = $('#qualidadeNinjutsu')
    qualidadeTaijutsu = $('#qualidadeTaijutsu')
    qualidadeGenjutsu = $('#qualidadeGenjutsu')

    function clearQualidades() {
        qualidadesEscolhidas = $('.qualidade-escolhida');
        qualidadesEscolhidas.removeClass('qualidade-escolhida');
        qualidadesSelecionadas = '';
        pontosQualidades = 0;
    }

    function clearDefeitos(){
        defeitosEscolhidos = $('.defeito-escolhido');
        defeitosEscolhidos.removeClass('defeito-escolhido');
        defeitosSelecionados = '';
        pontosDefeitos = 0;
    }

    claEscolhido.change(
    function bonificarClasKgs(){
        
        clearQualidades();
        clearDefeitos();
        bonus = 0;
        $('.atributo span').text('');
        $('.atributo span').hide();
        $('.cla').hide();
        
        switch (claEscolhido.val()) {
            case "Aburame":
                $('#qualidadesAburame').show();
                $('#aburameCientificos').addClass('qualidade-escolhida');
                break;
            case "Akimichi":
                $('#qualidadesAkimichi').show();
                adicionarQualidade($('#akimichiForca'));
                $('#qualidadeForca').hide();
                $('#defeitosAkimichi').show();
                adicionarDefeito($('#akimichiGordo'));
                $('#defeitoGordo').hide();
                $('defeitoMagricelo').hide();
                break;
            case "Chinoike":
                $('#qualidadesChinoike').show();
                adicionarQualidade($('#chinoikeGen'));
                qualidadeGenjutsu.hide();
                kgEscolhida.val('Ketsuryūgan');
                break;
            case "Fuuma":
                $('#qualidadesFuuma').show();
                $('#fuumaNin').addClass('qualidade-escolhida');
                qualidadeNinjutsu.hide();
                break;
            case "Hatake":
                $('#qualidadesHatake').show();
                $('#qualidadeVersatil').addClass('qualidade-escolhida');
                bonus = 1;
                break;
            case "Hōki":
                $('#qualidadesHoki').show();
                $('#hokiGCC').addClass('qualidade-escolhida');
                $('#qualidadeGCC').hide();
                break;
            case "Hoshigaki":
                $('#qualidadesHoshigaki').show();
                $('#hoshigakiAnfibio').addClass('qualidade-escolhida');
                $('#hoshigakiPericia').addClass('qualidade-escolhida');
                $('#qualidadeAnfibio').hide();
                break;
            case "Hozuki":
                $('#qualidadesHozuki').show();
                $('#hozukiPericia').addClass('qualidade-escolhida');
                $('#defeitosHozuki').show();
                $('#hozukiVicio').addClass('defeito-escolhido');
                break;
            case "Hyuuga":
                $('#qualidadesHyuuga').show();
                $('#hyuugaTai').addClass('qualidade-escolhida');
                $('#hyuugaGCC').addClass('qualidade-escolhida');
                $('#qualidadeGCC').hide();
                qualidadeTaijutsu.hide();
                break;
            case "Inuzuka":
                $('#qualidadesInuzuka').show();
                $('#inuzukaInstintos').addClass('qualidade-escolhida');
                $('#inuzukaOlfato').addClass('qualidade-escolhida');
                $('#qualidadeInstintos').hide();
                $('#qualidadeOlfato').hide();
                break;
            case "Juugo":
                $('#qualidadesJuugo').show();
                $('#juugoNatural').addClass('qualidade-escolhida');
                $('#defeitosJuugo').show();
                $('#juugoInsanidade').addClass('defeito-escolhido');
                break;
            case "Kaguya":
                $('#qualidadesKaguya').show();
                $('#kaguyaTai').addClass('qualidade-escolhida');
                qualidadeTaijutsu.hide();
                break;
            case "Kamizuru":
                $('#qualidadesKamizuru').show();
                $('#kamizuruCientificos').addClass('qualidade-escolhida');
                break;
            case "Kedoin":
                $('#qualidadesKedoin').show();
                $('#kedoinDominio').addClass('qualidade-escolhida');
                break;
            case "Kurama":
                $('#qualidadesKurama').show();
                $('#kuramaGen').addClass('qualidade-escolhida');
                qualidadeGenjutsu.hide();
                break;
            case "Lee":
                $('#qualidadesLee').show();
                $('#leeTai').addClass('qualidade-escolhida');
                $('#defeitosLee').show();
                adicionarDefeito($('#leeInabilidadeTai'));
                adicionarDefeito($('#leeInabilidadeGen'));
                qualidadeGenjutsu.hide();
                qualidadeTaijutsu.hide();
                qualidadeNinjutsu.hide();
                $('#defeitoNin').hide();
                $('#defeitoGen').hide()
                break;
            case "Nara":
                $('#qualidadesNara').show();
                $('#naraInt').addClass('qualidade-escolhida');
                ('#qualidadeInt').hide();
                break;
            case "Sarutobi":
                $('#qualidadesSarutobi').show();
                $('#sarutobiNin').addClass('qualidade-escolhida');
                qualiadadeNinjutsu.hide();
            break;
            case "Senju":
                $('#qualidadesSenju').show();
                $('#senjuVitalidade').addClass('qualidade-escolhida');
                $('#senjuGRC').addClass('qualidade-escolhida');
                $('#qualidadeGRC').hide();
                break;
            case "Shimura":
                $('#qualidadesShimura').show();
                $('#periciaShimura').addClass('qualidade-escolhida');
                break;
            case "Uchiha":
                $('#qualidadesUchiha').show();
                adicionarQualidade($('#uchihaGRC'));
                $('#qualidadeGRC').hide();
                $('#defeitosUchiha').show();
                adicionarDefeito($('#uchihaAmnesia'));
                adicionarDefeito($('#uchihaMaldicao'));
                $('#defeitoAmnesia').hide();
                break;
            case "Uzumaki":
                $('#qualidadesUzumaki').show();
                $('#uzumakiGRC').addClass('qualidade-escolhida');
                $('#uzumakiVitalidade').addClass('qualidade-escolhida');
                $('#qualidadeGRC').hide();
                $('#qualidadeVitalidade').hide();
                break;
            case "Yamanaka":
                $('#qualidadesYamanaka').show();
                $('#yamanakaSensor').addClass('qualidade-escolhida');
                $('#qualidadeSensor').hide();
                break;
            case "Yotsuki":
                $('#qualidadesYotsuki').show();
                $('#yotsukiPericia').addClass('qualidade-escolhida');
                break;
            case "Yuki":
                $('#qualidadesYuki').show();
                $('#yukiPericia').addClass('qualidade-escolhida');
                break;
            default:
                break;
            
        }
        databookAtualizarTexto();
        atualizarTexto();
    });

    $('#qualidadesHatake .qualidades-defeitos :button').click(function(){

        qualidadesEscolhidas = $('#qualidades .qualidade-escolhida');
        qualidadesEscolhidas.removeClass('qualidade-escolhida');
        qualidadesSelecionadas = '';
        pontosQualidades = 0;
        qualidadeNinjutsu.prop("disabled", false);
        qualidadeTaijutsu.prop('disabled', false);
        qualidadeGenjutsu.prop('disabled', false);

        if ( ($(this).attr('class') == undefined) || ($(this).attr('class') == '') ) {
            $(this).addClass('qualidade-escolhida');
            $('#hatakeNin').prop('disabled', true);
            $('#hatakeTai').prop('disabled', true);
            $('#hatakeGen').prop('disabled', true);
            $(this).prop('disabled', false);
            $('#qualidades').show();
            if ($(this).attr('id') == 'hatakeNin') {
                qualidadeNinjutsu.removeClass('qualidade-escolhida')
                qualidadeNinjutsu.hide();
            } else if ($(this).attr('id') == 'hatakeTai') {
                qualidadeTaijutsu.removeClass('qualidade-escolhida')
                qualidadeTaijutsu.hide()
            } else {
                qualidadeGenjutsu.removeClass('qualidade-escolhida')
                qualidadeGenjutsu.hide()
            }
        } else {
            $(this).removeClass('qualidade-escolhida');
            $('#hatakeNin').prop('disabled', false);
            $('#hatakeTai').prop('disabled', false);
            $('#hatakeGen').prop('disabled', false);
            $(this).prop('disabled', false);
            if ($(this).attr('id') == 'hatakeNin') {
                qualidadeNinjutsu.show();
            } else if ($(this).attr('id') == 'hatakeTai') {
                qualidadeTaijutsu.show()
            } else {
                qualidadeGenjutsu.show()
            }
        }
        atualizarTexto();
    });