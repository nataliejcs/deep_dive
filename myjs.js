const url = "https://kea21-b430.restdb.io/rest/new-collection";

// The API-key
const options = {
  headers: {
    "x-apikey": "6136570f43cedb6d1f97ed67",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    //we have the data
    // console.log(data);
    handleData(data);
    console.log(data);
  });

function handleData(dogs) {
  dogs.forEach((dog) => {
    // console.log(dog);
    // make a template
    // grab it
    const template = document.querySelector("template").content;
    // clone it
    const clone = template.cloneNode(true);
    // populate it with data
    clone.querySelector(".dogBreed").textContent = dog.Breed;
    clone.querySelector(".Lifespan").textContent = dog.Lifespan;
    clone.querySelector(".Size").textContent = dog.Size;
    clone.querySelector(".Group").textContent = dog.Group;
    clone.querySelector(".img").src = dog.Picture_url;
    clone.querySelector(".img").alt = dog.Breed;

    //  append it to DOM
    const mainEl = document.querySelector("main");
    mainEl.appendChild(clone);
  });
}
