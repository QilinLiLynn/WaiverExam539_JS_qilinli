// 1 : Use an external JavaScript listener to apply the class “one-third” to all figures on the page.

const figures = document.querySelectorAll('figure');

for (const figure of figures) {
  figure.classList.add('one-third');
}

// 2 : Add an external eventListener to remove the footer when it is clicked. 

var footers = document.getElementsByTagName('footer');

footers[0].addEventListener("click", function() {
    footers[0].style.display = 'None';
});

// 3 : Add an external eventListener to hide the 5th figure when it is double clicked.

var fi = document.getElementsByTagName('figure');

fi[4].addEventListener("dblclick", function() {
    fi[4].style.visibility = 'hidden';
});

// 4: Use an external JavaScript listener to change the font of the first figure caption to Cursive 
//when the mouse is over it and restore the font when the mouse leaves.

var captions = document.getElementsByTagName('figcaption');
var ff = document.defaultView.getComputedStyle(captions[0],null).fontFamily;

captions[0].addEventListener("mouseover", function() {
    captions[0].style.fontFamily = 'Cursive';
});

captions[0].addEventListener("mouseleave", function() {
    captions[0].style.fontFamily = ff;
});

// 5 : Use an external JavaScript listener to change the font of the first figure caption to Cursive when the figure caption is in focus
// and restore the font to “Times” when the focus state is over.

captions[0].tabIndex = "1";

captions[0].addEventListener("focus", function() {
    captions[0].style.fontFamily = 'Cursive';
});

captions[0].addEventListener("blur", function() {
    captions[0].style.fontFamily = ff;
});
