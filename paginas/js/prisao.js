function calcular() {
    var Pena = 0;
    var Multa = 0;
    var Fianca = 0;

    var crimes = document.getElementsByName('crime');
    for (var i = 0; i < crimes.length; i++){
        if ( crimes[i].checked ) {
            var valores_crime = crimes[i].value.split("|");
            Pena += parseInt(valores_crime[0]);
            Multa += parseInt(valores_crime[1]);
            Fianca += parseInt(valores_crime[2]);
        }
    }

    var sujo = parseInt(document.getElementById("sujo").value);
    if(sujo > 0){
        var unidade_sujo = sujo / 15000;
        Pena += parseInt(unidade_sujo);
        Pena += parseInt(unidade_sujo);
        Pena += parseInt(unidade_sujo);
        Pena += parseInt(unidade_sujo);
        Pena += parseInt(unidade_sujo);
    }

    var pena_txt = document.getElementById("pena");
    pena_txt.value = Pena;
    var multa_txt = document.getElementById("multa");
    multa_txt.value = Multa;
    var fianca_txt = document.getElementById("fianca");
    fianca_txt.value = Fianca;
}

function limpar(){
    var crimes = document.getElementsByName('crime');
    for (var i = 0; i < crimes.length; i++){
        crimes[i].checked = false;
    }

    var drogas = document.getElementById("pena");
    drogas.value = 0;

    var sujo = document.getElementById("multa");
    sujo.value = 0;

    var sujo = document.getElementById("fianca");
    sujo.value = 0;


    document.getElementById("pena").value = "0";
    document.getElementById("multa").value = "0";
    document.getElementById("fianca").value = "0";
}

function enviar() {
    var prisioneiro = document.getElementById("prisioneiro").value;
    var id_prisioneiro = document.getElementById("id_prisioneiro").value;
    var nome_oficiais = document.getElementById("nome_oficiais").value;
    var pena_oficiais = document.getElementById("pena").value;
    var multa_oficiais = document.getElementById("multa").value;
    var fianca_oficiais = document.getElementById("fianca").value;
    var imagem_prisioneiro = document.getElementById("imagem_prisioneiro").value;
    var motivo_prisao = document.getElementById("motivo_prisao").value;

    if (prisioneiro === "" || id_prisioneiro === "" || nome_oficiais === "" || pena_oficiais === "" || multa_oficiais === "" || fianca_oficiais === "" || imagem_prisioneiro === "" || motivo_prisao === "") {
        document.querySelector('.avisos2').style.display = 'block';
        setTimeout(function() {
            document.querySelector('.avisos2').style.display = 'none';
        }, 10000);
        var interval = setInterval(function() {
            var avisosElement = document.querySelector('.avisos2');a
            if (getComputedStyle(avisosElement).display === 'none') {
                clearInterval(interval);
            } else {
                setTimeout(function() {
                    document.querySelector('.avisos2').style.display = 'none';
                }, 3000);
            }
        }, 3000);
        return false;
    }

    var dados = {
        "username": "Departamento Policia",
        "embeds": [
            {
                "title": "Nova prisão",
                "thumbnail": {
                    "url": imagem_prisioneiro
                },
                "description": motivo_prisao,
                'color': 0xDAA520,
                "fields": [
                    {
                        "name": "Nome do Preso:",
                        "value": prisioneiro
                    },
                    {
                        "name": "ID do Preso:",
                        "value": id_prisioneiro
                    },
                    {
                        "name": "Oficiais:",
                        "value": nome_oficiais
                    },
                    {
                        "name": "Pena:",
                        "value": pena_oficiais
                    },
                    {
                        "name": "Multa:",
                        "value": multa_oficiais
                    },
                    {
                        "name": "Fiança:",
                        "value": fianca_oficiais
                    }
                ],
                "footer": {
                    "text": 'Departamento Policia® Todos os direitos reservados.',
                    "icon_url": 'https://media.discordapp.net/attachments/1081042005917974538/1090725582205100115/DP_IMPEROP.png?width=702&height=702'
                }
            }
        ]
    };

    fetch("https://discord.com/api/webhooks/1116907203027284008/WyL5jlBUEKPsotjdV6iDSPbCQdRTnKzuTl_lqNCj0Jhp2SODeheOoer7iVUDXPo3MvTI", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(function(response) {
        if (response.ok) {
            
            document.querySelector('.avisos').style.display = 'block';
            setTimeout(function() {
                document.querySelector('.avisos').style.display = 'none';
            }, 10000);
            var interval = setInterval(function() {
                var avisosElement = document.querySelector('.avisos');
                if (getComputedStyle(avisosElement).display === 'none') {
                    clearInterval(interval);
                } else {
                    setTimeout(function() {
                        document.querySelector('.avisos').style.display = 'none';
                    }, 10000);
                }
            }, 1000);
        } else {
            document.querySelector('.avisos2').style.display = 'block';
            setTimeout(function() {
                document.querySelector('.avisos2').style.display = 'none';
            }, 10000);
            var interval = setInterval(function() {
                var avisosElement = document.querySelector('.avisos2');
                if (getComputedStyle(avisosElement).display === 'none') {
                    clearInterval(interval);
                } else {
                    setTimeout(function() {
                        document.querySelector('.avisos').style.display = 'none';
                    }, 10000);
                }
            }, 1000);
        }
    })
    .catch(function(error) {
        document.querySelector('.avisos2').style.display = 'block';
        setTimeout(function() {
            document.querySelector('.avisos2').style.display = 'none';
        }, 10000);
        var interval = setInterval(function() {
            var avisosElement = document.querySelector('.avisos2');a
            if (getComputedStyle(avisosElement).display === 'none') {
                clearInterval(interval);
            } else {
                setTimeout(function() {
                    document.querySelector('.avisos2').style.display = 'none';
                }, 10000);
            }
        }, 1000);
    });

    document.getElementById("imagem_prisioneiro").value = "";
    document.getElementById("motivo_prisao").value = "";
    document.getElementById("prisioneiro").value = "";
    document.getElementById("id_prisioneiro").value = "";
    document.getElementById("nome_oficiais").value = "";
    document.getElementById("pena_oficiais").value = "";
    document.getElementById("multa_oficiais").value = "";
    document.getElementById("fianca_oficiais").value = "";
}