const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const cartBtn = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

//let showProduct = document.querySelector('.product-card')
let showProduct = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toogleDeskMenu);
menuIcon.addEventListener('click', toogleMobileMenu);
cartBtn.addEventListener('click', toggleCartMenu)

function toogleDeskMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toogleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive')
        mobileMenu.classList.remove('inactive')
    }else{
        mobileMenu.classList.toggle('inactive')
    }
}

function toggleCartMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
         
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
        aside.classList.remove('inactive')
    }else{
        aside.classList.toggle('inactive')
    } 
   // aside.classList.toggle('inactive')

}

const productList = [];
productList.push({
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
},
{
    name: 'Bike',
    price: '120.00',
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
},
{
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
},
{
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
},
{
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
},
{
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
},
{
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
},
{
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
}
)

function showProducts(){
    for (product of productList){
    showProduct.innerHTML +=`  <div class="product-card">
                                      <img src="${product.image}" alt="">
                                        <div class="product-info">
                                            <div>
                                                <p>${product.price}</p>
                                                <p>${product.name}</p>
                                            </div>
                                            <figure>
                                                <img src="./icons/bt_add_to_cart.svg" alt="">
                                            </figure>
                                        </div>
                                    </div> 
                                       `  
                                       console.log(showProduct.innerHTML)                           
    }
}

showProducts()
