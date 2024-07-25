

const getImage = function (searchParol) {

    const apiPexel = 'https://api.pexels.com/v1/search';


    fetch(`${apiPexel}?query=${searchParol}`, {
        method: 'GET',
        headers: {
            Authorization: 'VGsyxf20CQxp4IRXL4GnOGdAYvFflYTXc35c3futwycHTf7fDGHCZQBh',
        },
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error
            }
        })
        .then((arrayImg) => {
            const myphotos = arrayImg.photos
            console.log('ArrayRes', myphotos)
            
                showCardImg(myphotos)
            
        })
        .catch(err => {
            console.log('Errore', err)
        })
}



const showCardImg = function (arrayOfCardImg ) {
    console.log('arrayofcard', arrayOfCardImg)
    const rowMain = document.getElementById('rowMain')
    rowMain.innerHTML = ''
    arrayOfCardImg.forEach((element, index) => {
        rowMain.innerHTML += `     
    
                    <div class="col d-flex text-center justify-content-center mb-4">
                        <div class="card">
                            <img src=" ${element.src.medium} " class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">${element.id}</p>
                            <button onclick="deleteCard(event)" class="btn btn-danger">Hide</button>
                            <a href= "dettagli.html?id=${element.id}" target = "_blank" class="btn btn-warning ">Dettagli</a>
                        </div>
                    </div>
                    `
    })

}

const loadButton = document.getElementById('loadImg')
loadButton.addEventListener('click', function(){
    getImage('dogs');
})

const loadOther = document.getElementById ('loadOther')
loadOther.addEventListener('click', function(){
    getImage('cat');
})

const deleteCard = function (e){
    e.target.closest('.card').classList.add('invisible') 
}

const myForm = document.getElementsByTagName('form')[0]
console.log('form',myForm)


myForm.addEventListener('submit', function(e){
    e.preventDefault()
    const myText = document.getElementById('mySearch').value
    getImage(myText)
})