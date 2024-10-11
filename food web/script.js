// Display and close the cart list
var display = document.getElementById("cart-icon")
var cart = document.querySelector(".cart")
var cancle = document.querySelector(".close")


display.addEventListener("click" , ()=>{
    cart.style.display="block"
})

cancle.addEventListener("click" , ()=>{
    cart.style.display="none"
})


// contain all function
function functionality(){
    removeBtn()
    negQty()
    total();
    createCartProduct()
    cartcount()
}

// remove cart from the list 
function removeBtn(){
    var removeItem = document.querySelectorAll(".removeitem")
    
    removeItem.forEach((btn) =>{
        btn.addEventListener("click",()=>{       
                
                let title = btn.parentElement.querySelector(".cart-food-title").innerHTML;
                items =items.filter(el=> el.foodTitle != title);
    
                btn.parentElement.remove()    
                functionality()
        })
       
    })

    }

// if the quantity goes in negative num then this function make it as 1
function negQty(){

var cartQuantity = document.querySelectorAll(".cart-quantity")

cartQuantity.forEach((count) =>{
    count.addEventListener("change",()=>{
        if(isNaN(count.value) || count.value <1){
            count.value =1;
        }
        functionality()
    })
   
})
}



// add to the cart

var addCart = document.querySelectorAll(".add-cart")
var items =[]

addCart.forEach((cart) =>{
    cart.addEventListener("click" ,()=>{
        var foodTitle = cart.parentElement.querySelector(".food-title").textContent
        var foodPrice = cart.parentElement.querySelector(".food-price").textContent
        var foodImage = cart.parentElement.querySelector(".foodpic").src
        var cartItems = document.querySelector(".cart-content") 

        var foods = {foodTitle,foodPrice,foodImage}


        // check product is already in the cart
        if(items.find((ele)=> ele.foodTitle == foods.foodTitle)){
            alert("Food is already added")
            return;
        }
        else{
            items.push(foods)
        }

        var newProduct = createCartProduct(foodTitle,foodPrice,foodImage);
        var element = document.createElement("div")
        element.innerHTML = newProduct
    

        cartItems.append(element)
        functionality()
       
       
    }) 
})



//  creating a cart
function createCartProduct(foodTitle,foodPrice,foodImage){

return `<div class="cart-content">

<div class="cart-box">
    <img src="${foodImage}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-food-title">${foodTitle}</div>
        <div class="price-box">
            <div class="cart-price">${foodPrice}</div>
            <div class="cart-amt">${foodPrice}</div>
        </div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    
    <i class="bi bi-trash removeitem"></i>
</div>

</div>
`


}

//total amount

function total(){
    var totall= 0;
    var product = document.querySelectorAll(".cart-box")
    var totalamount = document.querySelector(".total-price")

    product.forEach((pro)=>{
        var p= pro.querySelector(".cart-price").innerHTML
        var foodprice = parseFloat(p.replace("Rs.",""))
        var qty = pro.querySelector(".cart-quantity").value;
        console.log(qty)
        totall += (foodprice * qty)
        pro.querySelector(".cart-amt").textContent ="Rs."+foodprice*qty 
    })

    totalamount.innerHTML ="Rs."+totall;
     
   
    
// cart count

   
}

function cartcount(){

var cartCount = document.querySelector(".count")
var count = items.length;
cartCount.innerHTML =count;

if(count==0){
    cartCount.style.display="none";
}
else{
    cartCount.style.display="block";
}
}

