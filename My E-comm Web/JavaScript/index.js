// Changing image and number onclick
document.getElementById('lang-select').addEventListener('change', changeFunc);

function changeFunc() {
  var selectBox = document.getElementById('lang-select');
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValue == 'India') {
    document.getElementById('flag-icon').src = './images/langicon.png';
    document.getElementById('ph-number').innerHTML = '+91 9838203708';
  } else if (selectedValue == 'UK') {
    document.getElementById('flag-icon').src ='./images/uk.png';
    document.getElementById('ph-number').innerHTML = '+44 1632 960846';
  } else if (selectedValue == 'Canada') {
    document.getElementById('flag-icon').src = './images/canda.png';
    document.getElementById('ph-number').innerHTML = '+1 202 555 0156';
  } else {
    document.getElementById('flag-icon').src = './images/usa.png';
    document.getElementById('ph-number').innerHTML = '+49-163-5556-667';
  };
}

// -------------------------------------------------------------------------------------------------------------------------


// sticky Navbar //////



getYPosition = () => {
  var top = window.pageYOffset || document.documentElement.scrollTop
  return top;
};

document.addEventListener('scroll',()=>{
  var scroll=getYPosition() 
  console.log(scroll)

  if (scroll < 153) {
    document.getElementById('stickysection').classList.remove('sticky')
  }
  else {
    document.getElementById ('stickysection').classList.add('sticky')
     
  }
})

// -----------------------------------------------------------------------------------------------------------------------------



// back to top

            var backToTopButton = document.getElementById("back-to-top-button");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

              backToTopButton.addEventListener("scroll", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
              window.body.style.scrollBehavior="smooth"
              });


// sticky Navbar //////











