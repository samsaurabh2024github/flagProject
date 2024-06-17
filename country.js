let mainBody = document.querySelector('.mainBody')
let fetching = async () => {
  let resp = await fetch('https://restcountries.com/v3.1/all')
  let data = await resp.json()
  // console.log(data)
  data.map((obj) => {
    createCard(obj)
  })
}

let createCard = (obj) => {
  console.log(obj)
  let newcard = document.createElement('div')
  newcard.innerHTML = `
  <main class="CardMain">
      <section>
        <h1 class="countryName">${obj.name.common}</h1>
        <img src=${obj.flags.png} alt="" width="270px">
      </section>
      <section>
        <h3 class="capital">${obj.capital[0]}</h3>
        <a href=${obj.maps.googleMaps} class="location" target="_blank">Location</a>
        <div class="area">${obj.area}sqkm</div>
        <div class="continent">${obj.continents[0]}</div>
        <div class="population">${obj.population}</div>
      </section>
    </main>
  `
  mainBody.append(newcard)
}

fetching()