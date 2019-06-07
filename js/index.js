// Your code goes here
let links = document.querySelectorAll('.nav-link');

links.forEach(link =>{
    link.addEventListener('wheel', function(){
        console.log(this);
        link.style.display = "none";
    });
});

let travelImg = document.querySelector('.img-content');

