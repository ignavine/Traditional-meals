const data =  [
  {
    Title: "ACHU",
    description:"Various tribes that take achu for a traditional meal include",
    image: "images/Achu.jpg",
    tag: "achu",
    tribes: ["Mankon", "Bafut","Babaki","Mbengwi"],
    ingredients: [
      "Cocoyams",
      "Palm oil",
      "Spices (e.g., kanwa,)",
      "Meat or fish (optional)",
      "Salt",
    ],
  },
    {
      Title: "fufu",
      description:"Various tribes that take fufu for a traditional meal include",
      tag: "fufu",
      image: "images/fufu.jpg",
      tribes: ["Kom", "Bali", "Nso", "Wum"],
      ingredients: ["Cassava, yams, or plantains", "Water", "Salt (optional)"],
    },
    {
      Title: "Eru",
      description:"Various tribes that take eru for a traditional meal include",
      image: "images/Eru.jpg",
      tag: "eru",
      tribes: ["Bakossi","Balond", "Bamike", "Bayang"],
      ingredients: [
        "Water leaves",
        "Eru leaves",
        "Red oil",
        "Salt and maggi",
        "Crefish",
        "Water fufu",
      ],
    },
     {
      Title: "Ndole",
      description:"Tribes that take ndole for a traditional meal include",
      image: "images/Ndole.jpg",
      tag: "ndole",
      tribes: ["Wimbom","Ewondo","Bakewri","Bassa"],
      ingredients: [
        "Better leaves",
        "Groundnuts",
        "Groundnut oil",
        "Maggi and salt",
        "Ginger and gallies",
        "onion",
        "Plantians",
      ],
    },
    {
      Title: "Ekwang",
      description:"Various tribes that take ekwang for a teaditional meal include",
      image: "images/ekwang.jpg",
      tag: "ekwang",
      tribes: ["Bafwang","Balondo","Bakossi"],
      ingredients: [
        "Grated cocoyams",
        "Cocoyam leaves",
        "Palm nut soup",
        "Meat or fish",
        "Salt and maggi",
      ],
    },
    {
      Title: "Koki ",
      description:"Various tribes that eat koki for a traditional meal include",
      image: "images/koki.jpg",
      tag: "koki",
      tribes: ["Bassa","Bafang","Banen"],
      ingredients: [
        "Koki beans",
        "Red oil",
        "Coco leaves",
        "Salt and Maggi",
        "Cassava",
      ],
    },
    {
      Title: "Kok",
      description:"Various tribes that take kok for a traditional include",
      image: "images/kok.jpg",
      tag: "kok",
      tribes: ["Pango","Abo","Bakoko"],
    },
    {
      Title: "Turning cocoyams",
      description:"Various tribes that take coco for a traditional meal include",
      image: "images/turning.jpg",
      tag: "coco",
      tribes: ["Mamfe","Meta","Belo"],
      ingredients: [
        "Cocoyams",
        "Red oil",
        "Better leaves",
        "Salt and maggi",
        "Dry fish",
      ],
    },
    {
      Title: "Sanga",
      description:"Various tribes that eat sanga for a traditional meal include",
      image: "images/sanga.jpg",
      tag: ["Sanga",],
      tribes: ["Beti","Bakewri","Fang"],
      ingredients: ["Fresh corn", "Red oil", "Maggi and salt", "Casava leaves"],
    },
    {
      Title: "bongo",
      description:
        "Various tribes that eat bongo for a traditional meal include", 
      image: "images/bongochobi.jpg",
      tag: "bongo",
      tribes: ["Mouakobo","Monoka","Nkongsamba"],
      ingredients: ["Fish", "groundnut oil", "spices", "Maggi and salt", "Plantians"],
    },
     {
      Title: "kokicorn",
      description:
        "Various tribes that eat koki for a traditional meal include", 
      image: "images/kokicorn.jpg",
      tag: "kokicorn",
      tribes: ["Nkongsamba","Melong", "Bangem"],
      ingredients: ["Fresh corn", "Red oil", , "Maggi and salt",],
    },
    {
      Title: "Beans & Plantian",
      description:
        "Various tribes that take beans for a traditional meal include", 
      image: "images/beans.jpg",
      tag: ["beans",],
      tribes: ["Batibo","Manfe","Bakossi"],
      ingredients: ["Beans", "Red oil", "Bonga", "Maggi and salt", "Plantians"],
    },
    
   
    
    
    
]

const search = document.getElementById("search");
const root = document.getElementById("root");


function renderFilteredData(filterText = "") {
  let htmlContent = "";
  let filteredItems = [];

  // Filter all items per search text
  filteredItems = data.filter(item =>
    (item.Title?.toLowerCase() || "").includes(filterText.toLowerCase()) ||
    (item.tribalname?.toLowerCase() || "").includes(filterText.toLowerCase())
  )

  if (filteredItems.length > 0) {
    filteredItems.forEach(item => {
      htmlContent += `
        <a href="recipe.html#${item.tag}" style="color: black;">
            <div class="section2-card">
                <div>
                    <img src="/images/${item.tag}.jpg" alt="${item.tag}"
                        class="food-img">
                </div>
                <div class="text">
                    <h4>${item.description}</h4><br>
                    <ul>`;
      for(let i=0; i< item.tribes.length; i++){
        htmlContent += `<li>${item.tribes[i]}</li>`
      }

      htmlContent += `</ul>
                    <button>Learn now</button>
                </div>
            </div>
        </a>
      `;

    })
    }

  root.innerHTML = htmlContent;
}


function renderAllData(filterText = "") {
  let htmlContent = "";

  if (data.length > 0) {
    data.forEach(item => {
      htmlContent += `
        <a href="recipe.html#${item.tag}" class="cart-holder" style="color: black;">
            <div class="section2-card">
                <div>
                    <img src="/images/${item.tag}.jpg" alt="${item.tag}"
                        class="food-img">
                </div>
                <div class="text">
                    <h4>${item.description}</h4><br>
                    <ul>`;
      for(let i=0; i< item.tribes.length; i++){
        htmlContent += `<li>${item.tribes[i]}</li>`
      }

      htmlContent += `</ul>
                    <button>Learn now</button>
                </div>
            </div>
        </a>
      `;

    })
    }

  root.innerHTML = htmlContent;
}

renderAllData();
search.addEventListener("input", (e) => {
  let value = e.target.value;
  if(value == '' || value == undefined){
    renderAllData();
  } else {
    renderFilteredData(e.target.value);
  }
});
