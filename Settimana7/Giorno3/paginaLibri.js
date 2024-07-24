
const myRow = document.getElementById('myRow')
const bolCart = document.getElementById('bolCart')
const cart = document.getElementById('cart')
const body = document.getElementsByTagName('body')[0]
const insertBook = document.getElementById('insertBook')
const arrayOfBooksGl = []
const arrayCart = []
const getMyBook = function () {
    fetch('https://striveschool-api.herokuapp.com/books')
        .then((response) => {
            if (response) {
                return response.json();
            }
            else {
                throw new Error('La risposta non è corretta')
            }
        })
        .then((data) => {
            console.log(data)
            insertData(data)
            showData()
        })
        .catch((error) => {
            console.log('errore', error);
        })
}



const insertData = function (arrayOfbooks) {
    arrayOfbooks.forEach((user) => {
        arrayOfBooksGl.push(user)

    })

}


getMyBook();

const showData = function () {
    myRow.innerHTML = ''
    arrayOfBooksGl.forEach((book, index) => {
        myRow.innerHTML += `
        <div class="col-4 mb-4 d-flex justify-content-center">
                <div class="card w-50 d-flex flex-column">
                  <img src= "${book.img}"
                    class="card-img-top img-fluid w-100" alt="...">
                    <div class="card-body d-flex flex-column">
                        <div class = " flex-grow-1 ">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text mb-2">Prezzo: ${book.price}</p>
                            <p class="card-text">Genere: ${book.category}</p>
                        </div>
                        <button class="btn btn-success mb-2 mt-2" onclick = "buyItem(${index})">Aggiungi</button>
                        <button class="btn btn-danger  " onclick = "deleteBook(${index})">Scarta</button>
                        
                    </div>
                </div>

        </div>`

    })
}

const deleteBook = function (index) {
    arrayOfBooksGl.splice(index, 1)
    showData()

}
let i = 0

const buyItem = function (index) {
    i++
    bolCart.innerText = i
    if (i === 1) {
        bolCart.classList.add('visible')
        bolCart.classList.remove('invisible')
    }
    arrayCart.push({
        title: arrayOfBooksGl[index].title,
        price: arrayOfBooksGl[index].price,
    })


console.log('ARRAYCART',arrayCart)
}
const addToCart = function () {
    if (arrayCart) {
        insertBook.innerHTML = ''
        for (let i = 0; i < arrayCart.length; i++) {
            insertBook.innerHTML += `<div class="d-flex justify-content-between align-items-center mb-3">
                <p class = " p-0 m-0 ">${arrayCart[i].title} | ${arrayCart[i].price}</p> <button class = "btn btn-danger" onclick = "delCart(${i})"><i class="bi bi-trash3"></i></button>
              </div>`
        }
    }
}

const delCart = function (index){
    arrayCart.splice(index, 1)
    addToCart()
    i--
    bolCart.innerText = i
    if (i === 0){
        bolCart.classList.add('invisible')
        bolCart.classList.remove('visible')
    }
}

cart.addEventListener('click', addToCart)


