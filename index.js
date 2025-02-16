const BOOKS_LIST = [
    {"author": "Michel Houelebellbecq", "title": "Amplificación del campo de batalla", "imgSrc": "amplificacion.jpg", "price": "$8.00"},
    {"author": "Huilo Ruales", "title": "Edén y Eva", "imgSrc": "eden_y_eva.jpg", "price": "$10.00"},
    {"author": "Tomás Eloy Martínez", "title": "Purgatorio", "imgSrc": "purgatorio.jpg", "price": "$12.00"},
    {"author": "José Saramago", "title": "El evangelio según Jesucristo", "imgSrc": "el_evangelio.jpg", "price": "$14.00"},
    {"author": "Throton Wilder", "title": "Los idus de marzo", "imgSrc": "los_idus.jpg", "price": "$8.00"},
    {"author": "Anton Chejov", "title": "El beso y otros cuentos", "imgSrc": "el_beso.jpg", "price": "$6.00"},
    {"author": "Nicolai Gogol", "title": "Cuentos completos", "imgSrc": "cuentos.jpg", "price": "$6.00"},
    {"author": "Homero", "title": "La odisea", "imgSrc": "odisea.jpg", "price": "$10.00"},
    {"author": "Homero", "title": "La iliada", "imgSrc": "iliada.jpg", "price": "$7.00"},
    {"author": "Goethe", "title": "Fausto", "imgSrc": "fausto.jpg", "price": "$11.00"},
    {"author": "Ernest Hemingway", "title": "El viejo y el mar", "imgSrc": "viejo.jpg", "price": "$6.00"},
    {"author": "Jorge Luis Borges", "title": "Los conjurados", "imgSrc": "conjurados.jpg", "price": "$6.00"},
    {"author": "Carlos Cuahutémoc Sánchez", "title": "Un grito desesperado", "imgSrc": "grito.jpg", "price": "$6.00"},
    {"author": "Paulo Coelho", "title": "El alquimista", "imgSrc": "alquimista.jpg", "price": "$6.00"},
    {"author": "Herman Hesse", "title": "Siddhartha", "imgSrc": "siddhartha.jpg", "price": "$12.00"},
    {"author": "Alessandro Baricco", "title": "Seda", "imgSrc": "seda.jpg", "price": "$8.00"},
    {"author": "Virgilio", "title": "Eneida", "imgSrc": "eneida.jpg", "price": "$10.00"},
    {"author": "James Joyce", "title": "Dublineses", "imgSrc": "dublineses.jpg", "price": "$7.00"},
    {"author": "Mario Vargas Llosa", "title": "Pantaleón y las visitadoras", "imgSrc": "pantaleon.jpg", "price": "$12.00"},
    {"author": "Mario Vargas Llosa", "title": "La ciudad y los perros", "imgSrc": "ciudad.jpg", "price": "$14.00"},
    {"author": "Yokio Mishima", "title": "La corrupción del ángel", "imgSrc": "corrupcion.jpg", "price": "$12.00"},
    {"author": "Juan Carlos Onetti", "title": "Juntacadáveres", "imgSrc": "juntacadaveres.jpg", "price": "$15.00"},
    {"author": "Gabriel García Marquez", "title": "Doce cuentos peregrinos", "imgSrc": "doce_cuentos.jpg", "price": "$12.00"},
    {"author": "Gabriel García Marquez", "title": "El general en su laberinto", "imgSrc": "general.jpg", "price": "$13.00"},
    {"author": "Günter Grass", "title": "El tambor de ojalata", "imgSrc": "tambor.jpg", "price": "$15.00"},
    {"author": "Agatha Christie", "title": "Los elefantes pueden recordar y otros relatos", "imgSrc": "elefantes.jpg", "price": "$10.00"},
    {"author": "Orhan Pamuk", "title": "Estambul", "imgSrc": "estambul.jpg", "price": "$17.00"},
    {"author": "Franz Kafka", "title": "El proceso", "imgSrc": "proceso.jpg", "price": "$13.00"},
    {"author": "Elias Canetti", "title": "Auto de fe", "imgSrc": "auto.jpg", "price": "$10.00"}
]

var booksList;

const setBooksList = list => {
    booksList = list;
}

setBooksList(BOOKS_LIST);

const createNode = (title, author, imgSrc, price) => {
    let node = `<div class="book"><img src="img/${imgSrc}"> <span><b>Autor:&nbsp;</b> <p>${author}</p></span> <span><b>Título:&nbsp;</b> <p>${title}</p></span> <b class="price">${price}</b></div>`;
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
