// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.




const imageArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
    ];

// mi prendo l'elemento di contenitore
const itemsContainer = document.querySelector(".item");


// estrapolo gli elementi dell'array

for (let i = 0; i < imageArray.length; i++) {
    let itemImg = imageArray[i];
    // console.log(itemImg);

    // creare ad ogni interazione l'elemento da inserire

    let itemContent = `<img class="image" src="${itemImg}">`;
    
    // inseriamo il nuovo elemento nel contenitore
    itemsContainer.innerHTML += itemContent;    
    
}

//  seleziono tutti gli elementi item in pagina

const items = document.getElementsByClassName("image");

console.log(items);

let activeItem = 0;

items[activeItem].classList.add("active");

//  seleziono il bottone nextUp

const nextUp = document.querySelector(".up");

// gestiamo il click sul nextUp
nextUp.addEventListener("click",
    function () {
        // verifichiamo se nn siamo alla fine della lista delle immagini
        if(activeItem < imageArray.length - 1){
            // elimino l'active sull'elemento precedente attivo
            items[activeItem].classList.remove("active");
            //  incremento il valore dell'indice (activeItem)           
            // activeItem= activeItem + 1;
            activeItem++;
            // andiamo a mettere la classe active all'elemento 
            items[activeItem].classList.add("active");
            console.log(activeItem);    
        } else {
            items[activeItem].classList.remove("active");
            activeItem = 0;
            items[activeItem].classList.add("active");
        }
    }
);

// Seleziono il bottone nextDown
const nextDown = document.querySelector(".down");

// Gestiamo il click sul nextDown
nextDown.addEventListener("click", function() {
    if(activeItem > 0) {
        items[activeItem].classList.remove("active");
        activeItem--;
        items[activeItem].classList.add("active");
    } else {
        items[activeItem].classList.remove("active");
        activeItem = imageArray.length - 1;
        items[activeItem].classList.add("active");
    }
});
    

   

