const header = document.getElementsByTagName('header')[0];

var lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let a = document.documentElement.scrollTop;

    if (a > 100) {
        if (a > lastScrollTop)
            header.classList.add('active');
        else
            header.classList.remove('active');
    } else {
        header.classList.remove('active');
    }
    lastScrollTop = a;

})
let image = ["../image/1.jpg", "../image/2.jpg", "../image/3.jpg", "../image/4.jpg", "../image/5.jpg"];
const mainbody = document.querySelector('.bodyContant');

let i = 0;


function nextImage(btnName) {
    if (btnName == "right") {
        if (i >= image.length || i == -1)
            i = 0;
        mainbody.style.backgroundImage = `url("${image[i]}")`;

        i++;



    } else {
        if (i <= -1 || i == image.length)
            i = image.length - 1;
        mainbody.style.backgroundImage = `url("${image[i]}")`;
        i--;
    }

}