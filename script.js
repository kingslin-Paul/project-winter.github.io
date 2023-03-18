//const parentEle=document.getElementsByClassName('latestProducts')[0];
let ele="";
const newbtn= document.getElementById('new');
let ary=[
    {
        productimg:"product1.png"
    },
    {
        productimg:"product2.png"
    },
    {
        productimg:"product3.png"
    },
    {
        productimg:"product4.png"
    },
    {
        productimg:"product5.png"
    },
    {
        productimg:"product6.png"
    }
]

for(let i=0;i<ary.length;i++){
    ele += `<div>`;
    ele += `<img src="./img/categori/${ary[i].productimg}" alt="${ary[i].productimg}"/>`;
    ele += `<div>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
</div>`;
ele += `<div>Green Dress with Details</div>
<div>
    $40.00<span class="discountRate">$60.00</span>
</div></div>`;
}

document.getElementsByClassName('latestProducts')[0].innerHTML=ele;

let aryNew =[
    {
        productimg:"product1.png"
    },
    {
        productimg:"product3.png"
    },
    {
        productimg:"product6.png" 
    }
]

function all(){
for(let i=0;i<aryNew.length;i++){

    ele += `<div class="latestProductsImg">`;
    ele += `<img src="./img/categori/${ary[i].productimg}" alt="${ary[i].productimg}"/>`;
    ele += `<div>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
</div>`;
ele += `<div>Green Dress with Details</div>
<div>
    $40.00<span class="discountRate">$60.00</span>
</div>
</div>`;
}


let prev=document.getElementsByClassName('latestProducts')[0].innerHTML;
prev.remove();
prev=ele;
}

newbtn.addEventListener("click",all)
console.log(ele);

const btn1 = document.querySelector('.burgerContainer1');
const vh2nav = document.querySelector('.v-h2nav-rep');

btn1.addEventListener("click",()=>{
    vh2nav.classList.toggle('v-h2nav-rep');
})