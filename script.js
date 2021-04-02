window.addEventListener("load", function(){ // action listener that is triggered when the window is loaded

  // fetching json data from the URL
  function getJson(){
     const JsonFileURL = "https://raw.githubusercontent.com/Priya-2411/Js_Assign3_Json/main/product.json";
     
     fetch(JsonFileURL)
      .then(res => res.json())
      .then(data => { addData(data); });
  }


// assemble the addData() function
function addData(data){

    let section = document.getElementById("deals");

   // let dealInfo = data["items"];

    for(let i=0; i< data.length; i++){ // loop through the data

      
      //buliding element contents

        let div = document.createElement("div");
        div.setAttribute('class', 'col-md-3');
        let title = document.createElement("h3");
        let description = document.createElement("p");
        let feature = document.createElement("p");
        let price = document.createElement("p");
        let img = document.createElement("img");

        //setting attribute for the img 
         img.setAttribute("src", "images/" + data[i].image);
         title.textContent = data[i].title;
         description.textContent = data[i].description;
         feature.textContent = data[i].feature;
         price.textContent= data[i].price;

        // appending the children
        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(price);
        div.appendChild(description);
        div.appendChild(feature);
        section.appendChild(div);

      }

    }

    getJson();
})


