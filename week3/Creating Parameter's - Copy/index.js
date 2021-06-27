let starwars_data = [
  {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"
  },
  {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [
      "https://swapi.dev/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:10:51.357000Z",
    "edited": "2014-12-20T21:17:50.309000Z",
    "url": "https://swapi.dev/api/people/2/"
  },
  {
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a",
    "homeworld": "https://swapi.dev/api/planets/8/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [
      "https://swapi.dev/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:11:50.376000Z",
    "edited": "2014-12-20T21:17:50.311000Z",
    "url": "https://swapi.dev/api/people/3/"
  },
  {
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [],
    "starships": [
      "https://swapi.dev/api/starships/13/"
    ],
    "created": "2014-12-10T15:18:20.704000Z",
    "edited": "2014-12-20T21:17:50.313000Z",
    "url": "https://swapi.dev/api/people/4/"
  },
  {
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female",
    "homeworld": "https://swapi.dev/api/planets/2/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
      "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [],
    "created": "2014-12-10T15:20:09.791000Z",
    "edited": "2014-12-20T21:17:50.315000Z",
    "url": "https://swapi.dev/api/people/5/"
  }
];


console.log(starwars_data)
// var select = document.getElementById('select');
document.getElementById('submit').addEventListener('click', e => {
  e.preventDefault();
  extract(document.getElementById('select').value, document.getElementById('input1').value)
});

document.getElementById('submit2').addEventListener('click', e => {
  e.preventDefault();
  extractMany(document.getElementById('select2').value, "name", "height", "mass", "hair_color", "skin_color", "eye_color", "birth_year", "gender", "homeworld", "films", "vehicles", "starships", "created", "edited", "url");
  console.log("click")
});

function extract(index, property) {
  
  document.getElementById('property').textContent = starwars_data[index][property];
}

function extractMany(index, ...properties) {

  for (let i = 0; i < properties.length; i++) {
    if (properties[i] == "name") {
      document.getElementById('property2').textContent += "Name: "  + starwars_data[index][properties[i]] + " ";
    }
    if (properties[i] == "height") {
      document.getElementById('property2').textContent += "Height: " + starwars_data[index][properties[i]] + " ";
    }
    if (properties[i] == "mass") {
      document.getElementById('property2').textContent += "Mass: " + starwars_data[index][properties[i]] + " ";
    }
    if (properties[i] == "hair_color") {
      document.getElementById('property2').textContent += "hair_color: " + starwars_data[index][properties[i]] + " ";
    }
    if (properties[i] == "skin_color") {
      document.getElementById('property2').textContent += "skin_color: " + starwars_data[index][properties[i]] + " ";
    }
    if (properties[i] == "eye_color") {
      document.getElementById('property2').textContent += "eye_color: " + starwars_data[index][properties[i]] + " ";
    }
    if (properties[i] == "birth_year") {
      document.getElementById('property2').textContent += "birth_year: " + starwars_data[index][properties[i]] + " ";
    }
    if (properties[i] == "gender") {
      document.getElementById('property2').textContent += "gender: " + starwars_data[index][properties[i]] + " ";
    }
    if (properties[i] == "homeworld") {
      document.getElementById('property2').textContent += "homeworld: " + starwars_data[index][properties[i]] + " ";
    }
    if (properties[i] == "films") {
      document.getElementById('property2').textContent += "films: " + starwars_data[index][properties[i]] + " ";
    }
    if (properties[i] == "vehicles") {
      document.getElementById('property2').textContent += "vehicles: " + starwars_data[index][properties[i]] + " ";
    }
    if (properties[i] == "created") {
      document.getElementById('property2').textContent += "created: " + starwars_data[index][properties[i]] + " ";
    }
    if (properties[i] == "url") {
      document.getElementById('property2').textContent += "url: " + starwars_data[index][properties[i]] + " ";
    }
  }
}
var clear = document.getElementById('clear').addEventListener("click", () => {
  document.getElementById('property').innerText = " ";
  document.getElementById('property2').innerText = " ";
  document.getElementById('input1').value = "Name, Height, or Mass ";
})



