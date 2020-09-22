let image = document.querySelector(".home_container");
var image1 = () => {image.style.backgroundImage = "url(./Images/background_home1.jpg)";}
var image2 = () => {image.style.backgroundImage = "url(./Images/background_home2.jpg)";}
var image3 = () => {image.style.backgroundImage = "url(./Images/background_home3.jpg)";}
var image4 = () => {image.style.backgroundImage = "url(./Images/background_home4.jpg)";}
/*for(var i = 0; i > 10; i++){
    setTimeout(function(){images[i].apply();}, 4000)
}
*/
const a = new Promise((resolve, reject) => {
    setTimeout(()=>{
        image1();
        resolve("promise solved");
    }, 5000)
});
image2();
a.then(res =>{
    console.log("ImagenCargada")
    image3();
    const b = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            image1();
            resolve("promise solved");
        }, 5000)
    })
    b.then(res =>{
    console.log("ImagenCargada")
    image1();
    const c = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            image4();
            resolve("promise solved");
        }, 5000)
    })
    c.then(res =>{
    console.log("ImagenCargada")
    image4();
})
})
})