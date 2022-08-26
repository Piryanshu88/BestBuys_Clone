let data=JSON.parse(localStorage.getItem('products'))||[]
console.log(data)

Appenddata(data)
function Appenddata(data){
    document.querySelector('#products_display').innerHTML=""
    document.querySelector('#leng').innerHTML=`(${data.length} items)`

    data.forEach((ele)=>{

        let div=document.createElement('div')
        div.style.display='flex'
        div.style.justifyContent='space-evenly'

        let div1=document.createElement('div')
        div1.setAttribute('class','main_image')

        let img=document.createElement('img')
        img.setAttribute('src',ele.thumbnail)
        img.style.width='90%'
        div1.append(img)

        let div2=document.createElement('div')
        div2.style.lineHeight='35px'
        div2.style.paddingLeft='15px'
        let p=document.createElement('p')
        p.innerText='sponsered'
        p.style.color='grey'

        let title=document.createElement('p')
        title.innerText=ele.title
        title.setAttribute('class','bo')


        let model=document.createElement('p')
        model.innerText=`Model : ${ele.asin}`

        let div21=document.createElement('div')
        div21.style.display='flex'
        div21.style.height='40px'
        div21.style.alignItems='center'

        let ratinglogo=document.createElement('img')
        ratinglogo.setAttribute('src','https://cdn4.iconfinder.com/data/icons/infographics-2-1/512/5_stars-128.png')
        ratinglogo.style.width='20%'

        let rating=document.createElement('p')
        rating.innerText=`(${ele.reviews.total_reviews})`


        div21.append(ratinglogo,rating)
        let get=document.createElement('p')
        get.innerText='Get it today'
        get.style.color='green'

        let div22=document.createElement('div')
        div22.style.display='flex'
        div22.style.alignItems='center'

        let ship=document.createElement('img')
        ship.setAttribute('src','https://cdn1.iconfinder.com/data/icons/lined-shipping/48/a-21-128.png')
        ship.style.width='10%'

        let ship_1=document.createElement('p')
        ship_1.innerText='Pickup: Available today at Aiea'
        div22.append(ship,ship_1)

        let div23=document.createElement('div')
        div23.style.display='flex'
        div23.style.alignItems='center'

        let area=document.createElement('img')
        area.setAttribute('src','https://cdn1.iconfinder.com/data/icons/shopping-223/33/shopping-02-128.png')
        area.style.width='10%'

        let area_1=document.createElement('p')
        area_1.innerText='Shipping: Unavailable in your area'
        div23.append(area,area_1)

        div2.append(p,title,model,get,div21,div22,div23)

        let div3=document.createElement('div')
        div3.style.lineHeight='30px'
        div3.style.marginTop='-90px'
        div3.style.paddingLeft='30px'
        
        let price=document.createElement('h2')
        price.innerText=`$ ${ele.price.current_price}`

        let h3=document.createElement('h3')
        h3.innerText="Save $300"
        h3.style.paddingLeft='10px'
        h3.style.marginRight='210px'
        h3.style.color='white'
        h3.style.backgroundColor='#BB0628'
        h3.style.display='block'

        let esehi=document.createElement('p')
        esehi.setAttribute('class','ese')
        esehi.innerText='Free 6-month security software'

        let addtocart=document.createElement('button')
        addtocart.innerText='Add to cart'
        addtocart.setAttribute('class','btn')

        addtocart.addEventListener('click',function(){

            console.log('bahi')
            Addtocart(ele)
            //window.location.href='card.html'

        })

        div3.append(price,h3,esehi,addtocart)

        div.append(div1,div2,div3)

        document.querySelector('#products_display').append(div)
    })
}


function Addtocart(ele){
    let arr=JSON.parse(localStorage.getItem('add-to-cart'))||[]
    arr.push(ele)
    localStorage.setItem('add-to-cart',JSON.stringify(arr))

}

// arr_of_video.sort(function(a,b){
//     let x=a.snippet.title.toUpperCase()
//     let y=b.snippet.title.toLowerCase()
//     if(x>y){
//         return 1
//     }
//     else if(x<y){
//         return -1
//     }
//     else{
//         return 0
//     }
// })

// for(let i=0;i<data.length;i++){
//     let {prices}=data[i]
//     prices.current_price.sort(function(a,b){
//         return a-b
//     })
// }
// console.log(data)



