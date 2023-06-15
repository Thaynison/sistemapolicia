function EnviarCursoAbordagem() {
    var input_oficial = document.getElementById("input_oficial").value;
    var abordagem_pergunta1 = document.getElementById("abordagem_pergunta1").value;
    var abordagem_pergunta2 = document.getElementById("abordagem_pergunta2").value;
    var abordagem_pergunta3 = document.getElementById("abordagem_pergunta3").value;
    var abordagem_pergunta4 = document.getElementById("abordagem_pergunta4").value;
    var abordagem_pergunta5 = document.getElementById("abordagem_pergunta5").value;
    var abordagem_pergunta6 = document.getElementById("abordagem_pergunta6").value;
    var abordagem_pergunta7 = document.getElementById("abordagem_pergunta7").value;
    var abordagem_pergunta8 = document.getElementById("abordagem_pergunta8").value;
    var abordagem_pergunta9 = document.getElementById("abordagem_pergunta9").value;
    var abordagem_pergunta10 = document.getElementById("abordagem_pergunta10").value;

    if (input_oficial === "" || abordagem_pergunta1 === "" || abordagem_pergunta2 === "" || abordagem_pergunta3 === "" || abordagem_pergunta4 === "" || abordagem_pergunta5 === "" || abordagem_pergunta6 === "" || abordagem_pergunta7 === "" || abordagem_pergunta8 === "" || abordagem_pergunta9 === "" || abordagem_pergunta10 === "") {
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
                "title": "📚・Curso de Abordagem",
                "description": "O oficial <@" + input_oficial + "> realizou o curso de Abordagem",
                'color': 0xff6100,
                "fields": [
                    {
                        "name": "Pergunta 1°:",
                        "value": abordagem_pergunta1
                    },
                    {
                        "name": "Pergunta 2°:",
                        "value": abordagem_pergunta2
                    },
                    {
                        "name": "Pergunta 3°:",
                        "value": abordagem_pergunta3
                    },
                    {
                        "name": "Pergunta 4°:",
                        "value": abordagem_pergunta4
                    },
                    {
                        "name": "Pergunta 5°:",
                        "value": abordagem_pergunta5
                    },
                    {
                        "name": "Pergunta 6°:",
                        "value": abordagem_pergunta6
                    },
                    {
                        "name": "Pergunta 7°:",
                        "value": abordagem_pergunta7
                    },
                    {
                        "name": "Pergunta 8°:",
                        "value": abordagem_pergunta8
                    },
                    {
                        "name": "Pergunta 9°:",
                        "value": abordagem_pergunta9
                    },
                    {
                        "name": "Pergunta 10°:",
                        "value": abordagem_pergunta10
                    },
                ],
                "footer": {
                    "text": 'Departamento Policia® Todos os direitos reservados.',
                    "icon_url": 'https://media.discordapp.net/attachments/1081042005917974538/1090725582205100115/DP_IMPEROP.png?width=702&height=702'
                }
            }
        ]
    };
    fetch("https://discord.com/api/webhooks/1118287762626465823/t7ufUaLwAUZp1Q-UTgnPq552zboaI3Dxedl3h2XnMVfLYBksf71s0YiaEG1KnRycbRok", {
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
    document.getElementById("abordagem_pergunta1").value = "";
    document.getElementById("abordagem_pergunta2").value = "";
    document.getElementById("abordagem_pergunta3").value = "";
    document.getElementById("abordagem_pergunta4").value = "";
    document.getElementById("abordagem_pergunta5").value = "";
    document.getElementById("abordagem_pergunta6").value = "";
    document.getElementById("abordagem_pergunta7").value = "";
    document.getElementById("abordagem_pergunta8").value = "";
    document.getElementById("abordagem_pergunta9").value = "";
    document.getElementById("abordagem_pergunta10").value = "";
}

function EnviarCursoModulacao() {
    var input_oficial = document.getElementById("input_oficial").value;
    var modulacao_pergunta1 = document.getElementById("modulacao_pergunta1").value;
    var modulacao_pergunta2 = document.getElementById("modulacao_pergunta2").value;
    var modulacao_pergunta3 = document.getElementById("modulacao_pergunta3").value;
    var modulacao_pergunta4 = document.getElementById("modulacao_pergunta4").value;
    var modulacao_pergunta5 = document.getElementById("modulacao_pergunta5").value;
    var modulacao_pergunta6 = document.getElementById("modulacao_pergunta6").value;
    var modulacao_pergunta7 = document.getElementById("modulacao_pergunta7").value;
    var modulacao_pergunta8 = document.getElementById("modulacao_pergunta8").value;
    var modulacao_pergunta9 = document.getElementById("modulacao_pergunta9").value;
    var modulacao_pergunta10 = document.getElementById("modulacao_pergunta10").value;

    if (input_oficial === "" || modulacao_pergunta1 === "" || modulacao_pergunta2 === "" || modulacao_pergunta3 === "" || modulacao_pergunta4 === "" || modulacao_pergunta5 === "" || modulacao_pergunta6 === "" || modulacao_pergunta7 === "" || modulacao_pergunta8 === "" || modulacao_pergunta9 === "" || modulacao_pergunta10 === "") {
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
                "title": "📚・Curso de Modulação",
                "description": "O oficial <@" + input_oficial + "> realizou o curso de Modulação",
                'color': 0x00cf44,
                "fields": [
                    {
                        "name": "Pergunta 1°:",
                        "value": modulacao_pergunta1
                    },
                    {
                        "name": "Pergunta 2°:",
                        "value": modulacao_pergunta2
                    },
                    {
                        "name": "Pergunta 3°:",
                        "value": modulacao_pergunta3
                    },
                    {
                        "name": "Pergunta 4°:",
                        "value": modulacao_pergunta4
                    },
                    {
                        "name": "Pergunta 5°:",
                        "value": modulacao_pergunta5
                    },
                    {
                        "name": "Pergunta 6°:",
                        "value": modulacao_pergunta6
                    },
                    {
                        "name": "Pergunta 7°:",
                        "value": modulacao_pergunta7
                    },
                    {
                        "name": "Pergunta 8°:",
                        "value": modulacao_pergunta8
                    },
                    {
                        "name": "Pergunta 9°:",
                        "value": modulacao_pergunta9
                    },
                    {
                        "name": "Pergunta 10°:",
                        "value": modulacao_pergunta10
                    },
                ],
                "footer": {
                    "text": 'Departamento Policia® Todos os direitos reservados.',
                    "icon_url": 'https://media.discordapp.net/attachments/1081042005917974538/1090725582205100115/DP_IMPEROP.png?width=702&height=702'
                }
            }
        ]
    };
    fetch("https://discord.com/api/webhooks/1118287762626465823/t7ufUaLwAUZp1Q-UTgnPq552zboaI3Dxedl3h2XnMVfLYBksf71s0YiaEG1KnRycbRok", {
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
            var avisosElement = document.querySelector('.avisos2');
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
    document.getElementById("modulacao_pergunta1").value = "";
    document.getElementById("modulacao_pergunta2").value = "";
    document.getElementById("modulacao_pergunta3").value = "";
    document.getElementById("modulacao_pergunta4").value = "";
    document.getElementById("modulacao_pergunta5").value = "";
    document.getElementById("modulacao_pergunta6").value = "";
    document.getElementById("modulacao_pergunta7").value = "";
    document.getElementById("modulacao_pergunta8").value = "";
    document.getElementById("modulacao_pergunta9").value = "";
    document.getElementById("modulacao_pergunta10").value = "";
}

function EnviarCursoAcompanhamento() {
    var input_oficial = document.getElementById("input_oficial").value;
    var acompanhamento_pergunta1 = document.getElementById("acompanhamento_pergunta1").value;
    var acompanhamento_pergunta2 = document.getElementById("acompanhamento_pergunta2").value;
    var acompanhamento_pergunta3 = document.getElementById("acompanhamento_pergunta3").value;
    var acompanhamento_pergunta4 = document.getElementById("acompanhamento_pergunta4").value;
    var acompanhamento_pergunta5 = document.getElementById("acompanhamento_pergunta5").value;
    var acompanhamento_pergunta6 = document.getElementById("acompanhamento_pergunta6").value;
    var acompanhamento_pergunta7 = document.getElementById("acompanhamento_pergunta7").value;
    var acompanhamento_pergunta8 = document.getElementById("acompanhamento_pergunta8").value;
    var acompanhamento_pergunta9 = document.getElementById("acompanhamento_pergunta9").value;
    var acompanhamento_pergunta10 = document.getElementById("acompanhamento_pergunta10").value;

    if (input_oficial === "" || acompanhamento_pergunta1 === "" || acompanhamento_pergunta2 === "" || acompanhamento_pergunta3 === "" || acompanhamento_pergunta4 === "" || acompanhamento_pergunta5 === "" || acompanhamento_pergunta6 === "" || acompanhamento_pergunta7 === "" || acompanhamento_pergunta8 === "" || acompanhamento_pergunta9 === "" || acompanhamento_pergunta10 === "") {
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
                "title": "📚・Curso de Acompanhamento",
                "description": "O oficial <@" + input_oficial + "> realizou o curso de Acompanhamento",
                'color': 0x0073ff,
                "fields": [
                    {
                        "name": "Pergunta 1°:",
                        "value": acompanhamento_pergunta1
                    },
                    {
                        "name": "Pergunta 2°:",
                        "value": acompanhamento_pergunta2
                    },
                    {
                        "name": "Pergunta 3°:",
                        "value": acompanhamento_pergunta3
                    },
                    {
                        "name": "Pergunta 4°:",
                        "value": acompanhamento_pergunta4
                    },
                    {
                        "name": "Pergunta 5°:",
                        "value": acompanhamento_pergunta5
                    },
                    {
                        "name": "Pergunta 6°:",
                        "value": acompanhamento_pergunta6
                    },
                    {
                        "name": "Pergunta 7°:",
                        "value": acompanhamento_pergunta7
                    },
                    {
                        "name": "Pergunta 8°:",
                        "value": acompanhamento_pergunta8
                    },
                    {
                        "name": "Pergunta 9°:",
                        "value": acompanhamento_pergunta9
                    },
                    {
                        "name": "Pergunta 10°:",
                        "value": acompanhamento_pergunta10
                    },
                ],
                "footer": {
                    "text": 'Departamento Policia® Todos os direitos reservados.',
                    "icon_url": 'https://media.discordapp.net/attachments/1081042005917974538/1090725582205100115/DP_IMPEROP.png?width=702&height=702'
                }
            }
        ]
    };
    fetch("https://discord.com/api/webhooks/1118287762626465823/t7ufUaLwAUZp1Q-UTgnPq552zboaI3Dxedl3h2XnMVfLYBksf71s0YiaEG1KnRycbRok", {
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
            var avisosElement = document.querySelector('.avisos2');
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
    document.getElementById("acompanhamento_pergunta1").value = "";
    document.getElementById("acompanhamento_pergunta2").value = "";
    document.getElementById("acompanhamento_pergunta3").value = "";
    document.getElementById("acompanhamento_pergunta4").value = "";
    document.getElementById("acompanhamento_pergunta5").value = "";
    document.getElementById("acompanhamento_pergunta6").value = "";
    document.getElementById("acompanhamento_pergunta7").value = "";
    document.getElementById("acompanhamento_pergunta8").value = "";
    document.getElementById("acompanhamento_pergunta9").value = "";
    document.getElementById("acompanhamento_pergunta10").value = "";
}