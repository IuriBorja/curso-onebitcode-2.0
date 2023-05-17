function show() {
    const contactList = document.getElementById("contact-list");
    console.log(contactList);

    /* getElementById(id): Seleciona um elemento pelo seu valor de atributo
    id exclusivo. Retorna o elemento correspondente ou null se não houver 
    correspondência. */


    const listElements = document.getElementsByTagName('li');
    console.log(listElements);


    /* getElementsByTagName(tagName): Seleciona uma coleção de elementos
    com a tag HTML especificada. Retorna uma coleção HTMLCollection dos 
     elementos correspondentes ou uma coleção vazia se não houver correspondência. */

    
    const contactInputs = document.getElementsByClassName('contact-input');
    console.log(contactInputs);


    /* getElementsByClassName(className): Seleciona uma coleção de elementos
    que possuem a classe CSS especificada. Retorna uma coleção HTMLCollection
    dos elementos correspondentes ou uma coleção vazia se não houver correspondência. */


    const contacts = document.querySelectorAll('#contact-list > li > label');
    console.log(contacts);


    /* querySelectorAll(selector): Seleciona todos os elementos que correspondem
    ao seletor CSS especificado. Retorna um NodeList dos elementos correspondentes
    ou um NodeList vazio se não houver correspondência. */


    const contact1 = document.getElementsByName('contact1');
    console.log(contact1);


    /* getElementsByName(name) é um método que seleciona uma coleção de elementos
    com o atributo name especificado. Ao contrário dos outros métodos de seleção,
    como getElementById e getElementsByClassName, que retornam elementos únicos 
    ou coleções de elementos com base em IDs ou classes, o getElementsByName se 
    baseia no atributo name dos elementos. */


    const firstContact = document.querySelector('#contact-list > li > label');
    console.log(firstContact);


    /* querySelector(selector): Seleciona o primeiro elemento que corresponde
    ao seletor CSS especificado. Retorna o elemento correspondente ou null se
    não houver correspondência. */
}
