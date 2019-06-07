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