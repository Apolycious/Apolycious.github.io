setInterval(displayclock, 500); 
function displayclock () {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var en = 'AM';

    if (hrs > 12) {
        en = 'PM';
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs < 10) {
        hrs = '0' + hrs;
    }

    if (min < 10) {
        min = '0' + min;
    }
    
    document.getElementById('clock').innerHTML = hrs + ':' + min + ' ' + en;

}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 800) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
