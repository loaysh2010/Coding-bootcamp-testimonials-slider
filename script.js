let sliderButton = document.querySelector('.slider');
let imageContainer = document.getElementsByTagName('img')[0];
let quatP = document.querySelector('.left-content p');
let nameSpan = document.querySelector('.name');
let positionSpan = document.querySelector('span:last-child');


sliderButton.addEventListener('click',function(){
    if(imageContainer.classList.contains('second')){
        imageContainer.classList.remove('second');
        imageContainer.setAttribute('src','imgs/image-john.jpg');
        quatP.innerHTML= `
        “ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”
        `;
        nameSpan.innerHTML="John Tarkpor";
        positionSpan.innerHTML="Junior Front-end Developer";
    }
    else{
        imageContainer.classList.add('second');
        imageContainer.setAttribute('src','imgs/image-tanya.jpg');
        quatP.innerHTML= `
        “ I’ve been interested in coding for a while but never taken the jump, until now. 
                    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
                    excited about the future. ”
        `;
        nameSpan.innerHTML="Tanya Sinclair";
        positionSpan.innerHTML="UX Engineer";
    }
})