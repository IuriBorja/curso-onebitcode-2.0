function verificar () {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
            if(fsex[0].checked) {
                genero = 'Homem';
                    if (idade >= 0 && idade < 10) {
                        //Criança
                        img.setAttribute('src', './images/meninocrianca.jpg');
                    } else if (idade < 21) {
                        //adolescente
                        img.setAttribute('src', './images/meninoadolescente.jpg');
                    } else if (idade < 50) {
                        //jovem adulto
                        img.setAttribute('src', './images/jovemhomem.jpg');
                    } else {
                        //idoso
                        img.setAttribute('src', './images/idosohomem.jpg');
                    }
            } else if (fsex[1].checked) {
                genero = 'Mulher';
                    if (idade >= 0 && idade < 10) {
                        //Criança
                        img.setAttribute('src', './images/meninacrianca.jpg');
                    } else if (idade < 21) {
                        //adolescente
                        img.setAttribute('src', './images/meninaadolescente.jpg');
                    } else if (idade < 50) {
                        //jovem adulto
                        img.setAttribute('src', './images/jovemmulher.jpg');
                    } else {
                        //idoso
                        img.setAttribute('src', './images/idosamulher.jpg');
                    }
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.appendChild(img);
    }
}