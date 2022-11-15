let cart_2 = JSON.parse(localStorage.getItem(("cart_items")));
displayData(cart_2);


    function displayData(out) {

        document.querySelector("#container").innerHTML = "";
        let bag="";
        
      out.forEach(elem => {
        var div = document.createElement("div");
    
        var image = document.createElement("img");
        image.setAttribute("src", elem.image);
    
        var Title = document.createElement("h3");
        Title.innerText = elem.title;
    
        var Price = document.createElement("p");
        Price.innerText = "Rs. "+ elem.price;     

        div.append(image, Title, Price);
    
        document.querySelector("#container").append(div);
      });
     
    }
    

let total = cart_2.reduce((acc,el)=>{   
   return acc + Number(el.price);       
},0)


document.querySelector("#class").innerText="Total Price :"+ " Rs. "+total;
