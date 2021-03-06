//This file contains the code for creating calculators.
function Calculator()
{
	//creating an object for the class that displays results
	var display_box= new createBox();
	//function to create table element
	function createTable()
	{	
		var add_table = document.createElement("table");
		add_table.setAttribute("id","Calc");	
		add_table.setAttribute("border","2");
		return add_table;
	}
	//function to create row element
	function createRow()
	{
		var add_row = document.createElement("tr");
		return add_row;
	}
	//function to create column element
	function createColumn()
	{
		var add_column = document.createElement("td");
		return add_column;
	}
	//function to create column element for display box so that it doesn't hinder the alignment
	function createColumnForDisplayBox()
	{
		var add_display_box_column = document.createElement("td");
		add_display_box_column.setAttribute("colspan","6");
		return add_display_box_column;
	}
	//Create table object
	var new_table=createTable();
	//Appending the table to the body
	document.body.appendChild(new_table);
	//Create row object
	var new_row=createRow();
	//Create column object
	var new_column=createColumnForDisplayBox();
	//Appending dispplay box to table
	new_column.appendChild(display_box.boxes);
	//Appending row to table
	new_table.appendChild(new_row);
	//Appending column to row
	new_row.appendChild(new_column);
	//Creating an Array of all buttons
	var buttons = [ '1', '2', '3', '+',
	   		     '4', '5', '6', '-',
			     '7', '8', '9', '*',
			     '.', '0', '=', '/',
			     '1/x', 'x2', 'x^1/2', 'C'];
	//Iterating through the array for creating buttons
	for(var iterator = 0; iterator < buttons.length; iterator++) 
	{
		if(iterator%4 === 0) 
		{
			//Creating new row after four buttons are added
			var new_row = createRow();
			new_table.appendChild(new_row);
		}
		//Create new column for each button
		var new_column = createColumn();
		var button1 = new createButton(buttons[iterator],display_box.boxes);
		//Append button to column
		new_column.appendChild(button1.createButtons());
		//Append column to row
		new_row.appendChild(new_column);
	}	
}

new Calculator();
new Calculator();