var url = "https://636f9027f2ed5cb047e01947.mockapi.io/Product_Page_2";

var out = [];

async function getData() {
    try{
        var res = await fetch(url);
        var data = await res.json();
        out=[...data];
        displayData(out);
    }
    catch(e){
        console.log(e)
    }
}
getData();


function displayData(out){
    
        for(var i=0; i<33; i++){
            var div = document.createElement("div");

            var image = document.createElement("img");
            image.setAttribute("src", out[i].image);

            var Title = document.createElement("h3");
            Title.innerText = out[i].title;

            var btn_1 = document.createElement("button");
            btn_1.innerText = "25% off with code SINGLES";

            var Price = document.createElement("p");
            Price.innerText = out[i].price;

            var btn_2 = document.createElement("button");
            btn_2.innerText = "Quick Buy";

            div.append(image,Title,btn_1,Price,btn_2);

            document.querySelector("#container").appendChild(div);   
        }
}