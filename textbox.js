//This file creates the  Display Box for displaying results in calculator
function createBox()
{
	
	var new_box = document.createElement("input"); // This is for Creating the input box that displays numbers clicked and results.
	//Setting up various attributs for the input box
	new_box.setAttribute("id","btn21");
	new_box.setAttribute("type","text");
	new_box.setAttribute("name","display");
	new_box.setAttribute("style","height:40px; width:300px");
	//adding the box to the object
	this.boxes = new_box;
}