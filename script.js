

function load() {
    fetch("people.json").then(result => result.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                dataToCard(element);
            });
        })
}

function dataToCard(people) {
    const card = document.createElement("div");
    card.classList.add("card_people")
    card.innerHTML = `
    <div class="blur"></div>
    <div class="card-data">
       <div class="image">
       <img width="150px" height="150px"
       src="${people.url_foto}">
       </div>
       <div class="content">
       <p id="message">${people.frase}</p>
       <p>- ${people.nome}</p>
       </div>
    </div>
    `;
    document.getElementById("quadros").appendChild(card);
}

load();