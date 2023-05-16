/* 

let counter = 0;

for (let i = 10; i > counter; i--) {
    console.log(i);
}
 */

/* ---------------- */


/* let soma = 0;


for (let i = 0; i <= 10; i++) {

    if(i % 2 === 0) {
        soma += i;
    }
}
 */
/* console.log(soma); */


/* ----------------- */



/* let random = Math.floor(Math.random() * 11);
/* let counter = 10; */

/*  */

/* for (let i = 0; i <= counter; i++) {
    let tabuada = i * random;

    /* console.log(`${i} * ${random} = ${i * random}`); */

/* } */



/* ----------------- */


/* 
let counter = 20;

for(let i = 0; i <= counter; i++) {
    if(i % 2 === 1) {
        console.log(`${i} - Impar`);
    }
} */


/* let counter = 50;

for(let i = 0; i <= counter; i++) {
    if(i > 1 && i % 1 === 0) {
        console.log(`${i}`);
    }
}
 */

/* --------------- */


for (let i = 2; i <= 50; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }

}