let btnGetData = document.querySelector('#get-data')

const getData = () => {

    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            let firstName = document.createElement('p');
            let lastName = document.createElement('p');
            let jobTitle = document.createElement('p');
            let company = document.createElement('p');
            let divShow = document.createElement('div');

            firstName.innerText = `Imię: ${data.imie}`;
            lastName.innerText = `Nazwisko: ${data.nazwisko}`;
            jobTitle.innerText = `Zawód: ${data.zawod}`;
            company.innerText = `Firma: ${data.firma}`;

            document.body.appendChild(divShow);
            divShow.appendChild(firstName);
            divShow.appendChild(lastName);
            divShow.appendChild(jobTitle);
        })

        .catch(error => {
            console.log(error);
        })
}

btnGetData.addEventListener('click', getData)

