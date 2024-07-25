const getImage = function () {
    const myId = new URLSearchParams(location.search).get('id')
    const apiPexel = 'https://api.pexels.com/v1/photos/' + myId;


    fetch(apiPexel, {
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
            const myphotos = arrayImg
            console.log(myphotos)
            document.getElementsByTagName('img')[0].setAttribute('src', myphotos.src.large)
            document.getElementsByTagName('h5')[0].innerText = myphotos.photographer
            document.getElementsByTagName('p')[0].innerText = myphotos.alt
            document.getElementsByTagName('p')[1].innerText = myphotos.photographer_url
            
        
            
        })
        .catch(err => {
            console.log('Errore', err)
        })
}
getImage()