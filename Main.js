function showAlert(){
    alert("Limited Time Offer! Get 20% Off Today.");
}

function addToCart1(){
    alert("Pran Mango was added Successfully!.");
    var old =parseFloat((document.getElementById("price").innerText));
    var newPrice = old + 50;
    document.getElementById("price").innerText=newPrice;
    
}

function addToCart2(){
    var text = 75;
    document.getElementById("price").innerText=text;
    alert("Bombay Chanachur was added Successfully!.");
}