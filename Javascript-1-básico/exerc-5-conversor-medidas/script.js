let valorM = Number(prompt('Digite um valor: '));


let menu = prompt(`Escolha a opção que quer converter: \n
a) Milímetro(mm) \n
b) Centímetro(cm) \n
c) Decímetro(dm) \n
d) Decâmetro(dam) \n
e) Hectômetro(hm) \n
f) Quilômetro(km) \n
`);


let resultado = '';


switch(menu) {
    case 'a':
        resultado = valorM * 1000;
        alert(`O valor convertido é ${resultado} mm`);
        break;
    case 'b':
        resultado = valorM * 100;
        alert(`O valor convertido é ${resultado} cm`);
        break;
    case 'c':
        resultado = valorM * 10;
        alert(`O valor convertido é ${resultado} dm`);
        break;
    case 'd':
        resultado = valorM * 0.1;
        alert(`O valor convertido é ${resultado} dam`);
        break;
    case 'e':
        resultado = valorM * 0.01;
        alert(`O valor convertido é ${resultado} hm`);
        break;
    case 'f':
        resultado = valorM * 0.001;
        alert(`O valor convertido é ${resultado} km`);
        break;
    default:
        alert("Opção inválida.");      
        break;                    
}


/* console.log(menu); */