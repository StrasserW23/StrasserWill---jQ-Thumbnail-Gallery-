// Wait until the page has fully loaded before running any jQuery code.
// This helps make sure the HTML elements already exist on the page.
$(document).ready(function() {

  // When any thumbnail is clicked, run the code below.
  $(".thumb").click(function() {

    // Get the image file path from the clicked thumbnail.
    var fullImage = $(this).attr("src");

    // Get the project title
    var projectTitle = $(this).attr("data-title");

    // FIXED: correct attribute name
    var projectDescription = $(this).attr("data-description");

    // Remove active class from all thumbnails
    $(".thumb").removeClass("active");

    // Add active class to clicked thumbnail
    $(this).addClass("active");

    // Fade out → change image → fade in
    $("#featured-image").fadeOut(200, function() {
      // FIXED: "scr" → "src"
      $(this).attr("src", fullImage).fadeIn(200);
    });

    // Update title and description
    $("#project-title").text(projectTitle);
    $("#project-description").text(projectDescription);

  });

});


/*
==================================================
HOW THIS SCRIPT WORKS
==================================================

This script makes the project gallery interactive.

When the user clicks a thumbnail, the script:
- gets the thumbnail's image path from src
- gets the title from data-title
- gets the description from data-description
- removes the active class from all thumbnails
- adds the active class to the clicked thumbnail
- updates the featured image
- updates the featured title
- updates the featured description

The fadeOut() section uses a callback function.
That means the image source changes only after the old image finishes fading out.

==================================================
HELPFUL TERMS
==================================================

$(this):
Refers to the thumbnail that was clicked.

.attr():
Gets the value of an HTML attribute.

src:
The image file path used by an <img> element.

data-title:
A custom HTML data attribute storing the project title.

data-description:
A custom HTML data attribute storing the project description.

.removeClass():
Removes a CSS class from selected elements.

.addClass():
Adds a CSS class to selected elements.

.text():
Changes the text inside an element.

.fadeOut():
Gradually hides an element.

.fadeIn():
Gradually shows an element.

callback function:
A function that runs after another action finishes.

==================================================
VARIABLES USED
==================================================

fullImage:
Stores the image file path from the clicked thumbnail.

projectTitle:
Stores the title from the clicked thumbnail's data-title attribute.

projectDescription:
Stores the description from the clicked thumbnail's data-description attribute.
*/
