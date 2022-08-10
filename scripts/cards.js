const URL_CARDS = "https://rickandmortyapi.com/api/character";

fetch(URL_CARDS)
  .then((response) => response.json())
  .then((data) => showData(data));

showData = (data) => {
  let body = ``;
  const character = data.results;

  character.map((user) => {
    return (body += `
        <div class="card mb-5" style="width: 18rem;">
          <img src=${user.image} class="card-img-top" alt="${user.name}">
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">Especie: ${user.species}</p>
            <p class="card-text">Origen: ${user.origin.name}</p>
            <p class="card-text">Creación: ${user.created}</p>
          </div>
        </div>
        `);
  });
  document.getElementById("cards").innerHTML = body;
};

try{
  fetch(URL_USERS)
    .then((response) => response.json())
    .then((data) => showData(data));
}catch(error){
  throw new Error(`Ups! Error: ${error}`)
}
