document.querySelector('#rainbow').addEventListener('click', () => {
    document.getElementById("title").innerHTML = "Add life to your website.";
    document.getElementById("arrow").innerHTML="<img src='images/arrow-down-long-solid.svg'>";
    document.querySelector('#title').classList.add('textOutline');
    document.querySelector('#title').classList.add('fadeIn');
    document.querySelector('#arrow').classList.add('fadeIn');
  });
  
 
