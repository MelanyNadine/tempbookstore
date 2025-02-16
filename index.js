const BOOKS_LIST = [
    {"author": "Michel Houelebellbecq", "title": "Amplificación del campo de batalla", "imgSrc": "", "price": "$mmm"},
    {"author": "Huilo Ruales", "title": "Edén y Eva", "imgSrc": "", "price": "$mmm"},
    {"author": "Tomás Eloy Martínez", "title": "Purgatorio", "imgSrc": "", "price": "$mmm"},
    {"author": "José Saramago", "title": "El evangelio según Jesucristo", "imgSrc": "", "price": "$mmm"},
    {"author": "Throton Wilder", "title": "Los idus de marzo", "imgSrc": "", "price": "$mmm"},
    {"author": "Anton Chejov", "title": "El beso y otros cuentos", "imgSrc": "", "price": "$mmm"},
    {"author": "Nicolai Gogol", "title": "Cuentos completos", "imgSrc": "", "price": "$mmm"},
    {"author": "Homero", "title": "La odisea", "imgSrc": "", "price": "$mmm"},
    {"author": "Homero", "title": "La iliada", "imgSrc": "", "price": "$mmm"},
    {"author": "Goethe", "title": "Fausto", "imgSrc": "", "price": "$mmm"},
    {"author": "Ernest Hemingway", "title": "El viejo y el mar", "imgSrc": "", "price": "$mmm"},
    {"author": "Jorge Luis Borges", "title": "Los conjurados", "imgSrc": "", "price": "$mmm"},
    {"author": "Carlos Cuahutémoc Sánchez", "title": "Un grito desesperado", "imgSrc": "", "price": "$mmm"},
    {"author": "Paulo Coelho", "title": "El alquimista", "imgSrc": "", "price": "$mmm"},
    {"author": "Herman Hesse", "title": "Siddhartha", "imgSrc": "", "price": "$mmm"},
    {"author": "Alessandro Baricco", "title": "Seda", "imgSrc": "", "price": "$mmm"},
    {"author": "Virgilio", "title": "Eneida", "imgSrc": "", "price": "$mmm"},
    {"author": "James Joyce", "title": "Dublineses", "imgSrc": "", "price": "$mmm"},
    {"author": "Mario Vargas Llosa", "title": "Pantaleón y las visitadoras", "imgSrc": "", "price": "$mmm"},
    {"author": "Mario Vargas Llosa", "title": "La ciudad y los perros", "imgSrc": "", "price": "$mmm"},
    {"author": "Yokio Mishima", "title": "La corrupción del ángel", "imgSrc": "", "price": "$mmm"},
    {"author": "Juan Carlos Onetti", "title": "Juntacadáveres", "imgSrc": "", "price": "$mmm"},
    {"author": "Gabriel García Marquez", "title": "Doce cuentos peregrinos", "imgSrc": "", "price": "$mmm"},
    {"author": "Gabriel García Marquez", "title": "El general en su laberinto", "imgSrc": "", "price": "$mmm"},
    {"author": "Günter Grass", "title": "El tambor de ojalata", "imgSrc": "", "price": "$mmm"},
    {"author": "Agatha Christie", "title": "Los elefantes pueden recordar y otros relatos", "imgSrc": "", "price": "$mmm"},
    {"author": "Orhan Pamuk", "title": "Estambul", "imgSrc": "", "price": "$mmm"},
    {"author": "Franz Kafka", "title": "El proceso", "imgSrc": "", "price": "$mmm"},
    {"author": "Elias Canetti", "title": "Auto de fe", "imgSrc": "", "price": "$mmm"}
]

var booksList;

const setBooksList = list => {
    booksList = list;
}

setBooksList(BOOKS_LIST);

const createNode = (title, author, imgSrc, price) => {
    let node = `<div class="book"><img src="${imgSrc}"> <span><b>Autor:&nbsp;</b> <p>${author}</p></span> <span><b>Título:&nbsp;</b> <p>${title}</p></span> <b class="price">${price}</b></div>`;
    return node;
}

const handleInputChange = () => {
    let inputValue = document.getElementById('searchbar').value;
    let filteredBooks = BOOKS_LIST.filter(book => {return book.title.toLowerCase().includes(inputValue) ? book : null})
    setBooksList(filteredBooks);
    getNodes();
}


const getNodes = () => {
    document.getElementById("list").innerHTML = null;
    booksList.map(book => {
         document.getElementById("list").innerHTML += createNode(book.title, book.author, book.imgSrc, book.price);
    });
}
