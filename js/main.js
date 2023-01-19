const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const cartBtn = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('#productClose')
//let showProduct = document.querySelector('.product-card')

let showProduct = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toogleDeskMenu);
menuIcon.addEventListener('click', toogleMobileMenu);
cartBtn.addEventListener('click', toggleCartMenu)

function toogleDeskMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toogleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
        mobileMenu.classList.remove('inactive')
    }else{
        mobileMenu.classList.toggle('inactive')
    }
    closeProductDetailAside()
}

function toggleCartMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isProductdetailClosed = productDetailContainer.classList.contains('inactive')
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
        shoppingCartContainer.classList.remove('inactive')
    }else{
        shoppingCartContainer.classList.toggle('inactive')
    } 
    if(!isProductdetailClosed){
        productDetailContainer.classList.add('inactive')
    }
   // aside.classList.toggle('inactive')

}

const productList = [];
productList.push({
    id:'01',
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
},
{
    id:'02',
    name: 'Bike',
    price: '120.00',
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
},
{
    id:'03',
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
},
{
    id:'04',
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
},
{
    id:'05',
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
},
{
    id:'06',
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
},
{
    id:'07',
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
},
{
    id:'08',
    name: 'Bike',
    price: '$ 120.00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
}
)

setTimeout(() => {
    let productImg = document.getElementById('01') 
    productImg.addEventListener('click', openProductDetailAside)
    productDetailClose.addEventListener('click', closeProductDetailAside)
}, 500);

function showProducts(){

    //const productImg = document.getElementById('01')

    for (product of productList){
        //let productImg = document.getElementsById(product.id)    
        showProduct.innerHTML +=`  <div class="product-card">
                                      <img src="${product.image}" alt="" id=${product.id}>
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
           
    }
}


function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}


showProducts()

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}