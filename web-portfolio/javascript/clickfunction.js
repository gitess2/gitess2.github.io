window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

    function hideScroll() {
        document.body.style.overflow = 'hidden';
    }

hideScroll()

document.querySelector('#rainbow').addEventListener('click', () => {
    document.getElementById("title").innerHTML = "Add life to your website.";
    document.getElementById("arrow").innerHTML="<img src='images/arrow-down-long-solid.svg'>";
    document.querySelector('#title').classList.add('textOutline');
    document.querySelector('#title').classList.add('fadeIn');
    document.querySelector('#arrow').classList.add('fadeIn');
    document.body.style.overflow = 'visible';
}); 