
  const URL =
    "https://iskarr.github.io/austindonovan.github.io/api/business.json";

  fetch(URL)
    .then((response) => response.json())
    .then((jsObject) => {
      let business = jsObject.business
      console.log(jsObject.business[0]);
      for(let i = 0; i < business.length; i++){

        let cards = document.querySelector('div.cards')

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        let imgDiv = document.createElement("img");
        imgDiv.classList.add("img-div");
        imgDiv.src = business[i].imageurl;

        let infoDiv = document.createElement("div");
        infoDiv.classList.add("info-div");

        let title = document.createElement("h1");
        title.classList.add("title");
        title.innerHTML = business[i].name;
        console.log(business[i].name + '****')
        let address = document.createElement("p");
        address.classList.add("address");
        address.innerHTML = business[i].address
        let description = document.createElement("p");
        description.classList.add("description");
        description.innerHTML = business[i].description

        infoDiv.appendChild(title);
        infoDiv.appendChild(address);
        infoDiv.appendChild(description);

        cardDiv.appendChild(imgDiv);
        cardDiv.appendChild(infoDiv);

        document.querySelector('div.cards').appendChild(cardDiv);


      }
    });
 