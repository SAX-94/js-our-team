
// Creo l'array che contiene i vari oggetti
let listaTeam = [
    {
        'Nome': 'Wayne Barnett',
        'Ruolo': 'Founder & CEO',
        'Foto': 'wayne-barnett-founder-ceo.jpg',
    },
    {
        'Nome': 'Angela Caroll',
        'Ruolo': 'Chief Editor',
        'Foto': './angela-caroll-chief-editor.jpg',
    },
    {
        'Nome': 'Walter Gordon',
        'Ruolo': 'Office Manager',
        'Foto': './walter-gordon-office-manager.jpg',
    },
    {
        'Nome': 'Angela Lopez',
        'Ruolo': 'Social Media Manager',
        'Foto': './angela-lopez-social-media-manager.jpg',
    },
    {
        'Nome': 'Scott Estrada',
        'Ruolo': 'Developer',
        'Foto': './scott-estrada-developer.jpg',
    },
    {
        'Nome': 'Barbara Ramos',
        'Ruolo': 'Graphic Designer',
        'Foto': './barbara-ramos-graphic-designer.jpg',
    }
];

console.log(listaTeam);
console.log(listaTeam[0].Nome);


// Stampo tutti i valori in console
for (let i = 0; i < listaTeam.length; i++) {
    for (let key in listaTeam[i]) {
        console.log(listaTeam[i][key]);
        console.log(key);
    }
}


// Stampo in HTML le card con le foto
for (let i = 0; i < listaTeam.length; i++) {
    document.getElementById("teamContainer").innerHTML +=
        `
    <div class="card mb-5">
       <img src="img/${listaTeam[i]["Foto"]}" class="card-img-top" alt="...">
       <div class="card-body">
          <h5 class="card-title">${listaTeam[i]["Nome"]}</h5>
          <p class="card-text">${listaTeam[i]["Ruolo"]}</p>
       </div>
    </div>
    `;
}