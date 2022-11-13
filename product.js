var url = "https://636f9027f2ed5cb047e01947.mockapi.io/Product_Page_2";

var out = [];
var cart_1 =JSON.parse(localStorage.getItem(JSON.stringify("cart_items"))) || [];

async function getData() {
  try {
    var res = await fetch(url);
    var data = await res.json();
    out = [...data];
    displayData(out);
  } catch (e) {
    console.log(e);
  }
}
getData();


function displayData(out) {
    document.querySelector("#container").innerHTML = "";
    
  out.forEach(elem => {

    var div = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src", elem.image);

    var Title = document.createElement("h3");
    Title.innerText = elem.title;

    var cat = document.createElement("p");
    cat.innerText = elem.category;

    var Price = document.createElement("p");
    Price.innerText = "Rs. "+elem.price;

    var btn_2 = document.createElement("button");
    btn_2.innerText = "Quick Buy";

    btn_2.addEventListener("click",function(){
        cart_1.push(elem);
        localStorage.setItem("cart_items",JSON.stringify(cart_1));
    });

    div.append(image, Title, cat , Price, btn_2);

    document.querySelector("#container").appendChild(div);
  });
    
  }



//Sorting

function Sorting() {
  let selects = document.querySelector("#selected").value;

        if (selects == "asc") {
            out.sort((a, b) => {
              return a.price-b.price;
            });
          } else {
            if (selects == "dsc") {
              out.sort((a, b) => {
                return b.price - a.price;
              });
            }

          }
  displayData(out);
}


document.querySelector("#selected").addEventListener("change", myChange);

function myChange (e) {
  Sorting();
  filter(out);
}

document.querySelector("#val").addEventListener("change", myFunc);

function myFunc(e){
    filter(out);
}

//filter

function filter(out){
    let sele = document.querySelector("#val").value;

    let filterData = out.filter((elem) =>{
        if (elem.category == sele) {
          return elem.category;
        }else{
            if(sele ==""){
              return elem.category;
            }
        }
      });
    displayData(filterData);
}

//Search

document.querySelector("#search_00").addEventListener("input", function(){
    let searched = document.querySelector("#search_00").value;
    console.log(searched);

    let newData_1 = out.filter(function(elem){
         return elem.title.toLowerCase().includes(searched.toLowerCase());
    });
    displayData(newData_1)
});

