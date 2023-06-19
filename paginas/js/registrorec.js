function EnviarRelatorioRecrutamento() {
    var input_oficial = document.getElementById("input_oficial").value;
    var recrutamento_pergunta1 = document.getElementById("recrutamento_pergunta1").value;
    var recrutamento_pergunta2 = document.getElementById("recrutamento_pergunta2").value;
    var recrutamento_pergunta3 = document.getElementById("recrutamento_pergunta3").value;
    var recrutamento_pergunta4 = document.getElementById("recrutamento_pergunta4").value;
    var recrutamento_pergunta5 = document.getElementById("recrutamento_pergunta5").value;
    var recrutamento_pergunta6 = document.getElementById("recrutamento_pergunta6").value;
    var recrutamento_pergunta7 = document.getElementById("recrutamento_pergunta7").value;
    var recrutamento_pergunta8 = document.getElementById("recrutamento_pergunta8").value;
    var recrutamento_pergunta9 = document.getElementById("recrutamento_pergunta9").value;

    if (input_oficial === "" || recrutamento_pergunta1 === "" || recrutamento_pergunta2 === "" || recrutamento_pergunta3 === "" || recrutamento_pergunta4 === "" || recrutamento_pergunta5 === "" || recrutamento_pergunta6 === "" || recrutamento_pergunta7 === "" || recrutamento_pergunta8 === "" || recrutamento_pergunta9 === "") {
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
                "title": "📒・Recrutamento Realizado",
                "description": "O oficial <@" + input_oficial + "> realizou um recrutamento!",
                'color': 0xff6100,
                "fields": [
                    {
                        "name": "Pergunta 1°:",
                        "value": recrutamento_pergunta1
                    },
                    {
                        "name": "Pergunta 2°:",
                        "value": recrutamento_pergunta2
                    },
                    {
                        "name": "Pergunta 3°:",
                        "value": recrutamento_pergunta3
                    },
                    {
                        "name": "Pergunta 4°:",
                        "value": recrutamento_pergunta4
                    },
                    {
                        "name": "Pergunta 5°:",
                        "value": recrutamento_pergunta5
                    },
                    {
                        "name": "Pergunta 6°:",
                        "value": recrutamento_pergunta6
                    },
                    {
                        "name": "Pergunta 7°:",
                        "value": recrutamento_pergunta7
                    },
                    {
                        "name": "Pergunta 8°:",
                        "value": recrutamento_pergunta8
                    },
                    {
                        "name": "Pergunta 9°:",
                        "value": recrutamento_pergunta9
                    }
                ],
                "footer": {
                    "text": 'Departamento Policia® Todos os direitos reservados.',
                    "icon_url": 'https://media.discordapp.net/attachments/1081042005917974538/1090725582205100115/DP_IMPEROP.png?width=702&height=702'
                }
            }
        ]
    };
    fetch("https://discord.com/api/webhooks/1120082912130384022/f0Mfx4ReGnCHvx97zIzPjBaomUTnSTR6iQsT0TCq-A0r7u9VqmN4it2txA0ySPBCvGKw", {
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

    document.getElementById("input_oficial").value = "";
    document.getElementById("recrutamento_pergunta1").value = "";
    document.getElementById("recrutamento_pergunta2").value = "";
    document.getElementById("recrutamento_pergunta3").value = "";
    document.getElementById("recrutamento_pergunta4").value = "";
    document.getElementById("recrutamento_pergunta5").value = "";
    document.getElementById("recrutamento_pergunta6").value = "";
    document.getElementById("recrutamento_pergunta7").value = "";
    document.getElementById("recrutamento_pergunta8").value = "";
    document.getElementById("recrutamento_pergunta9").value = "";
}