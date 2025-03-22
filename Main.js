function showAlert(){
    alert("Limited Time Offer! Get 20% Off Today.");
}

function addToCart1(){
    var text="You have to pay Tk. BDT:";
    var old =parseFloat((document.getElementById("price").innerText));
    var newPrice = old + 50;
    document.getElementById("text").innerText=text;
    document.getElementById("price").innerText=newPrice;
    alert("Pran Mango was added Successfully!.");
    
}

function addToCart2(){
    var text="You have to pay Tk. BDT:";
    var old =parseFloat((document.getElementById("price").innerText));
    var newPrice = old + 75;
    document.getElementById("text").innerText=text;
    document.getElementById("price").innerText=newPrice;
    alert("Bombay Chanachur was added Successfully!.");
}