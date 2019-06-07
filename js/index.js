// Your code goes here
let links = document.querySelectorAll('.nav-link');

links.forEach(link =>{
    link.addEventListener('wheel', function(){
        link.style.display = "none";
    });
});

let travelImg = document.querySelectorAll('.img-content img');
let wholePage = document.querySelector('body');

function pictureMode(pic){
    let picturePresenter = document.createElement('div');
    let picture = document.createElement('img');
    picture.src = pic.src;

    picturePresenter.style.position = "fixed";
    picturePresenter.style.height = "100%";
    picturePresenter.style.width = "100%";
    picturePresenter.style.background = "rgba(0, 0, 0, 0.5)";
    picturePresenter.style.zIndex = "1";

    picture.style.marginLeft = "700px";
    picture.style.marginTop = "300px";

    wholePage.prepend(picturePresenter);
    picturePresenter.appendChild(picture);
    console.log(picturePresenter);

    picturePresenter.addEventListener('click', function(){
        wholePage.removeChild(wholePage.firstChild);
    });
}

travelImg.forEach(img => {
    img.addEventListener('mouseenter', function(){
        pictureMode(this);
        //this.style.display
        //this.style.margin = "0 auto";
    });
});

//idea for code came from here https://www.w3schools.com/howto/howto_js_animate.asp

let funBus = document.querySelector('.intro img');
let introSection = document.querySelector('.intro');
let startPos = 1910;
const endPos = 552;
let interval = setInterval(moveImg, 5);

function moveImg(){
    if(startPos === endPos){
        clearInterval(interval);
        funBus.style.position = "relative";
        funBus.style.bottom = "0";
        funBus.style.right = "0";
        funBus.style.zIndex = "-1";
        introSection.removeChild(introSection.firstChild);
    }
    else{
        startPos--;
        funBus.style.right = `${startPos}px`;
    }
}

funBus.addEventListener("load", function(){
    let fillerDiv = document.createElement('div');
    fillerDiv.style.height = "240px";
    fillerDiv.style.width = "800px";

    this.style.position = "fixed";
    this.style.right = "1500px";
    this.style.bottom = "241px";
    this.style.width = "800px";
    introSection.prepend(fillerDiv);
    moveImg();
});

