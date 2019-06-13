$(function(){

   
    setTimeout(function(){
        // array com as acomodações disponíveis.
        var jsonAcomodacoes = {
            0:{
                cidadeAcomodacao: "São Paulo",
                valorAcomodacao: "100,00",
                fotoAcomodacao: "https://a0.muscache.com/im/pictures/74ff060d-cda5-4b55-aca8-c79024b57903.jpg?aki_policy=poster",
                ratingAcomodacao: "5"
            },
            1:{
                cidadeAcomodacao: "Rio de Janeiro",
                valorAcomodacao: "230,00",
                fotoAcomodacao: "https://a0.muscache.com/im/pictures/cadad952-2ecf-41ad-b8b4-e9cf192d4f88.jpg?aki_policy=poster",
                ratingAcomodacao: "2"
            },
            2:{
                cidadeAcomodacao: "Vitória",
                valorAcomodacao: "80,00",
                fotoAcomodacao: "https://a0.muscache.com/im/pictures/943d0233-e522-40fe-ac16-d39efd49a0eb.jpg?aki_policy=poster",
                ratingAcomodacao: "3"
            },
            3:{
                cidadeAcomodacao: "Vila Velha",
                valorAcomodacao: "580,00",
                fotoAcomodacao: "https://a0.muscache.com/im/pictures/944989e8-89f0-472f-9512-cb4acf5c4a0f.jpg?aki_policy=poster",
                ratingAcomodacao: "5"
            },
            4:{
                cidadeAcomodacao: "Salvador",
                valorAcomodacao: "235,00",
                fotoAcomodacao: "https://a0.muscache.com/im/pictures/a8245753-b5c9-4d48-a9d7-5c895ea077ea.jpg?aki_policy=poster",
                ratingAcomodacao: "1"
            },
            5:{
                cidadeAcomodacao: "Amazonas",
                valorAcomodacao: "760,00",
                fotoAcomodacao: "https://a0.muscache.com/im/pictures/ebd6939c-4424-4075-b96a-b31a04ce7fb3.jpg?aki_policy=large",
                ratingAcomodacao: "3"
            }
        };

        // Função recupera os parametros que tenho na URL
        $.urlParam = function(name){
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results==null){
               return null;
            }
            else{
               return decodeURIComponent(results[1]) || 0;
            }
        }

        // Função identifica se estou na página de compra.
        if($(".paginaCompra")){

            var getDestino = $.urlParam("destino");
            var getOrigem = $.urlParam("origem");
            var getDataIda = $.urlParam("dataIda");
            var getDataRetorno = $.urlParam("dataRetorno");

            $.get("https://baconipsum.com/api/?callback=?", function(response){
                $(".descricao").html(response);
            });
            
            $(".recebeDestino").html(getDestino);
            $(".recebeOrigem").html(getOrigem);
            $(".recebePartida").html(getDataIda);

            if(getDataRetorno != ''){
                $(".recebeRetorno").show();
                $(".recebeRetorno b").html(getDataRetorno);
            }
            
            $.each(jsonAcomodacoes, function(key, value){
                // cria as estrelas, de acordo com o ratingAcomodacao
                var ratingAcomodacao = '';
                for(var i = 0; i < value.ratingAcomodacao; i++){
                    ratingAcomodacao += '<img src="assets/imgs/icon-star.png" width="13" style="margin-right:5px;">';
                }
    
                var acomodacoesItem = '<div class="acomodacoesItem mt-5 mb-5 col " ><div class="itemHead"> <span><img src="assets/imgs/icon-gps.png" alt=""></span> <span class="itemTitle">'+getDestino+',</span> <span class="vlDiaria">R$ '+value.valorAcomodacao+'</span> <span class="vlDiariaLabel">/diaria</span></div><div class="itemBody" style="background:url('+value.fotoAcomodacao+') no-repeat"> </div><div class="itemBottom d-flex"><div class="rating col-md-7 pl-0"> '+ratingAcomodacao+' </div><div acomodacaoID="'+key+'" class="buttonMore col">Escolher</div></div></div>';
                $("#acomodacoesModal").append(acomodacoesItem);
            });

            $(".buttonMore").click(function(){
                var idAcomod = $(this).attr("acomodacaoID"); 
                $(".recebeAcomodacao b").html("<div><small>Você selecionou:</small></div> <div>"+jsonAcomodacoes[idAcomod].cidadeAcomodacao+" , <small> R$ "+jsonAcomodacoes[idAcomod].valorAcomodacao+"</small>"+"</div>");

                $("#bigModalAcomodacoes").modal("hide");
            });

        }
        
        // Cidades destino disponíveis
        var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

        autocomplete(document.getElementById("destino"), countries);
        
        $.each(jsonAcomodacoes, function(key, value){
            // cria as estrelas, de acordo com o ratingAcomodacao
            var ratingAcomodacao = '';
            for(var i = 0; i < value.ratingAcomodacao; i++){
                ratingAcomodacao += '<img src="assets/imgs/icon-star.png" width="13" style="margin-right:5px;">';
            }

            var acomodacoesItem = '<div class="acomodacoesItem mt-5 mb-5 col "><div class="itemHead"> <span><img src="assets/imgs/icon-gps.png" alt=""></span> <span class="itemTitle">'+value.cidadeAcomodacao+',</span> <span class="vlDiaria">R$ '+value.valorAcomodacao+'</span> <span class="vlDiariaLabel">/diaria</span></div><div class="itemBody" style="background:url('+value.fotoAcomodacao+') no-repeat"> </div><div class="itemBottom d-flex"><div class="rating col-md-7"> '+ratingAcomodacao+' </div><div class="buttonMore col">Detalhes</div></div></div>';
            $("#acomodacoesSection").append(acomodacoesItem);
        });

        $(".menuOpen").click(function(){
            $(this).hide();
            $(".menuVertical").show();
            $(".menuCancel").show();
        });

        $(".menuCancel").click(function(){
            $(this).hide();
            $(".menuOpen").show();
            $(".menuVertical").hide();
        });

        $(".menuVertical ul li").click(function(){
            $(this).hide();
            $(".menuOpen").show();
            $(".menuVertical").hide();
        });

        $('#dataIda').datetimepicker({
            useCurrent: false,
            locale: 'pt-br',
            format: 'DD/MM/YYYY'
        });
        $('#dataRetorno').datetimepicker({
            useCurrent: false,
            locale: 'pt-br',
            format: 'DD/MM/YYYY'
        });

        $("#dataIda").on("change.datetimepicker", function (e) {
            $('#dataRetorno').datetimepicker('minDate', e.date);
        });
        $("#dataRetorno").on("change.datetimepicker", function (e) {
            $('#dataIda').datetimepicker('maxDate', e.date);
        });

    }, 100)
});