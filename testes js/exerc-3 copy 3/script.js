function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');


        if (num.value.length == 0) {
            window.alert('Digite um número!');
        } else {
            let n = Number(num.value);
            let c = 1;
            tab.innerHTML = '';

                while (c <= 10) {
                    let item = document.createElement('option');
                    item.text = `${n} x ${c} = ${n*c}`;
                    tab.appendChild(item);
                    c++;
                }

        }
} 



/* let valores = [8, 1, 5, 7, 9, 12];


for (let i = 0; i < valores.length; i++) {
    console.log(`A posição ${i} tem o valor ${valores[i]} `);
}

 */







