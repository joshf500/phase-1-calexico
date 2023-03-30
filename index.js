// Write your code here...
url="http://localhost:3000/menu"
let imageDetail=document.getElementById("dish-image")
let iname=document.getElementById("dish-name")
let idescription=document.getElementById("dish-description")
let iprice=document.getElementById("dish-price")
let menuList=document.getElementById("menu-items")
let numberInCart=document.getElementById("number-in-cart")
let input=document.getElementById("cart-amount")
let formSubmit=document.getElementById('cart-form')
let counterKey="counter"
let counterValue=0
fetchMenu()

function fetchMenu(){
    fetch(url)
        .then(res => res.json())
        .then(menu => {
            displayItems(menu)
            displayDish(menu[0])
        })
}

function displayItems(menu){
    menu.forEach(item=>{
        //displayImage(item)
        let x=document.createElement("span")
        x.textContent=item.name
        menuList.appendChild(x)
        //Object.assign({},menu,{counter:0})
       // menu[counterKey]=counterValue
        
        x.addEventListener("click",function(){
            displayDish(item)
            numberInCart.textContent=item.number_in_bag
        })
    } )
  
} 

function displayDish(item){
    imageDetail.setAttribute('src', item.image)
    iname.textContent=item.name
    idescription.textContent=item.description
    iprice.textContent=item.price
    formSubmit.addEventListener("submit",(event)=>addToCart(event))//Why can I add listener to entire form?
function addToCart(event){
    event.preventDefault()
    numberInCart.textContent=parseInt(numberInCart.textContent)+parseInt(event.target[0].value)//why is there a target value?

    //item.counterValue++
    //console.log(item.counterValue)
}
}