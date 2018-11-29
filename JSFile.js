// Automatic slideshow
var slideIndex = 0;
showSlides();

function showSlides()
{
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";  
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 6000); // Change image every 6 seconds
}

// Impressum Popup
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event)
{
	if (event.target == modal)
	{
		modal.style.display = "none";
	}
}

// Get all imgs in Startsite_imgs folder
//var startsiteimgs = Startsite_imgs.getFiles();