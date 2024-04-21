// import data from "./data.js"


console.log('Be ready!')



const data = [

    {
        Image: 'Anejo1',
        name: 'Anejo1'

    },

    {
        Image: 'Reposado1',
        name: 'Reposodo1'

    },

    {
        Image: 'Blanco1',
        name: 'Blanco'

    },


    {
        Image: 'eight reserve',
        name: 'Eight Reserve'

    },


]




const data1 = [
    {
        Image1: '818_Lemonade_DK',
        name1:'Lemonade'
    },


    {
        Image1: '818_Pura_Margarita_DK',
        name1:'Pura Margarita'
    },


    {
        Image1: 'Dirty_Shirley',
        name1:'Dirty Shirley'
    },

    {
        Image1: 'Spencer_Diamond___Kris_Twist',
        name1:'Spencer Diamond'
    },

    {
        Image1: 'Spicy_Cucumber_Marg_DK',
        name1:'Spicy Cucumber Marg'
    },

    {
        Image1: 'Summer_Magic',
        name1:'Summer Magic'
    },


    {
        Image1: 'Pyro_s_Tequila_Mule',
        name1:'Pyro Tequila'
    },


    {
        Image1: 'Head_of_the_Heap',
        name1:'Head Of the Heap'
    },


    {
        Image1: 'Peachy_Pride_DK',
        name1:'Peachy Pride'
    },


    {
        Image1: 'Pear_of_Aces',
        name1:'Pear Of Aces'
    },


    {
        Image1: '818_Anejo_Old_Fashioned',
        name1:'818 Anejo Old Fashioned'
    },


    {
        Image1: 'Watermelon_Marg_Pitcher',
        name1:'Watermelon Marg'
    },

]



const data2 = [

    {
        image2: 'comingsoon1'
    },

    {
        image2: 'comingsoon2'
    },


    {
        image2: 'comingsoon3'
    },

    {
        image2: 'comingsoon4'
    },
    {
        image2: 'comingsoon5'
    },
    {
        image2: 'comingsoon6'
    },
]


const teqWrapper = document.querySelector('.teq-wrapper')
teqWrapper.innerHTML = ``
for(let i = 0; i < data.length ; i++){
    let teq = data[i]

    teqWrapper.innerHTML += `
    <div class="teq">
        <img src="./image/${teq.Image}.webp" alt="">
        <h1>${teq.name}</h1>
        <button class="s-btn">SHOP</button>
    </div>
    `
}



const cockWrapper = document.querySelector('.cocktail-wrapper')
cockWrapper.innerHTML = ``

for(let i = 0; i < data1.length ; i++){
    let cock = data1[i]

    cockWrapper.innerHTML += `
    
    <div class="cocktail">
        <img src="./image/${cock.Image1}.webp" alt="">
        <h1>${cock.name1}</h1>
    </div>
    
    `
}



let imgurl
const comingimage = document.querySelector('.cs-images-small')
comingimage.innerHTML = ``

for(let i = 0; i < data2.length; i++){
    let cs_img = data2[i]

    comingimage.innerHTML +=`
    <img src="./image/${cs_img.image2}.jpg" alt="">
    `
}



////
const images = document.querySelectorAll('.cs-images-small img')
for (let img of images){
    img.addEventListener('click', (e) => {
        const showBigimg = document.querySelector('.cs-images-big')
        imgurl = `url('${img.src}')`
        showBigimg.style.backgroundImage = imgurl
    })
}



const angejo = document.querySelector('#anejo')

angejo.addEventListener('click', (e) => {
    console.log(angejo)
    
})
