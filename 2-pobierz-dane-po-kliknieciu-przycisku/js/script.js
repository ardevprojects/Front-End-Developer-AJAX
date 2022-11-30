let btnGetData = document.querySelector('#get-data')

const getData = () => {

    for (i = 0; i < 3; i++) {

        fetch('https://akademia108.pl/api/ajax/get-post.php')
            .then(res => res.json())
            .then(data => {
                let pId = document.createElement('p')
                let pUserId = document.createElement('p')
                let pTitle = document.createElement('p')
                let pBody = document.createElement('p')
                let divShow = document.createElement('div')

                pId.innerText = `Post ID: ${data.id}`
                pUserId.innerText = `User ID: ${data.UserId}`
                pTitle.innerText = `Title: ${data.title}`
                pBody.innerText = `Body: ${data.body}`

                document.body.appendChild(divShow)
                divShow.appendChild(pId)
                divShow.appendChild(pUserId)
                divShow.appendChild(pTitle)
                divShow.appendChild(pBody)
            })

            .catch(error => {
                console.error(error);
            })
    }

    const fetchInterval = setInterval(getData, 15000)

}

btnGetData.addEventListener('click', getData)