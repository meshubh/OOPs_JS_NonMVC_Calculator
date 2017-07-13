function createButton(button_value,input_box) 
{
	this.box=input_box;
	this.val=button_value;
	console.log(this);
}
createButton.prototype.createButtons = function () 
{
	//Creating new buttons to add in the calculator
	var new_button = document.createElement("input");
	//Setting various attributes for the buttons
	new_button.type="button";
	new_button.setAttribute("class","btn");
	new_button.setAttribute("style","height:50px; width:70px");
	new_button.value=this.val;
	new_button.box=this.box;
	new_button.setAttribute("OnClick","calculation(this)");
	//returning the object
	return new_button;
}



