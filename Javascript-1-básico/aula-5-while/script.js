


let vel = 80;

while (vel > 0) {
    alert(`O carro está a ${vel} km/h`);
    vel -= 20;
    alert(`Diminuindo 20km/h`);

    if(vel === 40) {
        alert(`O carro parou.`);
        break;
        
    }
    
}

/* alert(`O carro parou.`); */