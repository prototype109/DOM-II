// Your code goes here
const links = document.querySelectorAll('.nav-link');

links.forEach(link =>{
    link.addEventListener('wheel', function(){
        link.style.display = "none";
    });
});

const travelImg = document.querySelectorAll('.img-content img');
const wholePage = document.querySelector('body');

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

const funBus = document.querySelector('.intro img');
const introSection = document.querySelector('.intro');
let startPos = 1910;
const endPos = 552;
const interval = setInterval(moveImg, 5);

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
    const fillerDiv = document.createElement('div');
    fillerDiv.style.height = "240px";
    fillerDiv.style.width = "800px";

    this.style.position = "fixed";
    this.style.right = "1500px";
    this.style.bottom = "607px";
    this.style.width = "800px";
    introSection.prepend(fillerDiv);
    moveImg();
});

const button = document.querySelectorAll('.btn');

button.forEach(btn => btn.addEventListener('dblclick', function(){
    this.style.background = "red";
}));

const paragraph = document.querySelectorAll('p');
const textBox = document.createElement('textarea');
const submit = document.createElement('button');
const cancle = document.createElement('button');
const pDiv = document.createElement('div');
let currentText = [];

paragraph.forEach(p => {
        p.addEventListener('click', function(){
        currentText.push(this.textContent);
        console.log(currentText);
        textBox.rows = "4";
        textBox.cols = "10";
        submit.textContent = "submit";
        cancle.textContent = "cancel";
        //this.style.display = "none";
        //this.textContent = "";
        //parent = p.parentNode;
        pDiv.appendChild(textBox);
        pDiv.appendChild(submit);
        pDiv.appendChild(cancle);
        //this.appendChild(pDiv);
        this.parentNode.replaceChild(pDiv, this);
    });
});

function submitText(){
    const newParagraph = document.createElement('p');
    newParagraph.textContent = textBox.value;
    pDiv.parentNode.replaceChild(newParagraph, pDiv);
}

submit.addEventListener('click', submitText);

cancle.addEventListener('click', function(){
    const newParagraph = document.createElement('p');
    //currentText = textBox.value;
    //console.log(currentText);
    newParagraph.textContent = currentText.pop();
    //newParagraph.style.display = "block";
    pDiv.parentNode.replaceChild(newParagraph, pDiv);
});

textBox.addEventListener('focus', function(){
    this.style.background = "green";
});

textBox.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        submitText();
    }
});

textBox.addEventListener('select', function(){
    alert(`${this.value.substring(this.selectionStart, this.selectionEnd)}`);
});

window.addEventListener('resize', function(){
    wholePage.style.background = "red";
});