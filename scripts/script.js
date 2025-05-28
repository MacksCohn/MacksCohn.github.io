// The current description that is shown
state = 'description';


// This function is in place so when you click on an image the corresponding description shows up
// I luckily remembered the basics of javascript because it similar enough to c# and C++.

// Prerequisites: Pass a class that some element on the page is a part of.
// Side Effects: changes state
function setChildText(child) {
    const previouslySelected = document.getElementsByClassName(state); 
    previouslySelected[0].style.visibility = 'hidden';
    state = child;
    const paragraphs = document.getElementsByClassName(child);
    for (const paragraph of paragraphs) {
        paragraph.style.visibility = 'visible';
        paragraph.style.animation = 'none';
        void paragraph.offsetWidth; /* found this line is needed to refresh some browsers https://www.w3schools.com/Jsref/prop_element_offsetwidth.asp */
        paragraph.style.animation = 'spawnText .4s ease-out';
    }
}
