const URL_CARDS = "https://rickandmortyapi.com/api/character";

showData = (data) => {
  let body = ``;
  const character = data.results;

  character.map((card) => {
    return (body += `
        <div class="card mb-5 card" style="width: 18rem;">
          <img src=${card.image} class="card-img-top" alt="${card.name}">
          <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">Especie: ${card.species}</p>
            <p class="card-text">Origen: ${card.origin.name}</p>
            <p class="card-text">Creación: ${card.created}</p>
          </div>
        </div>
        `);
  });
  document.getElementById("cards").innerHTML = body;
};

const getCards = async () =>{
  try {
    const resp = await fetch(URL_CARDS)
    const data = await resp.json()
    const dataCards = await showData(data)

  } catch(error) {
    throw new Error(`Error: ${error}`)
  }
}

getCards();