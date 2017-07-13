//This file handles computations 
function calculation(clickedvalue)
{
	var diaplay_box = clickedvalue.box;
	var input_value= clickedvalue.value;
	//C is used for clearing the display screen
	if(input_value == 'C')
	{
		diaplay_box.value="";
	}
	//1/x is used for dividing 1 with any number x
	else if(input_value == '1/x')
	{
		diaplay_box.value=1/diaplay_box.value;
	}
	//x2 is used to find the square of a number
	else if(input_value == 'x2')
	{
		diaplay_box.value=diaplay_box.value*diaplay_box.value;
	}
	//x^1/2 is used to find the square root of a number
	else if(input_value == 'x^1/2')
	{
		diaplay_box.value=Math.sqrt(diaplay_box.value);
	}
	//= is used for evaluating the expression
	else if(input_value == '=')
	{
		try 
		{ 
			diaplay_box.value=(eval(diaplay_box.value)) 
		} 
		catch(e) 
		{
			diaplay_box.value=('Error') 
		} 	
	}
	//This is used for adding numbers and operators to expression
	else
	{
		diaplay_box.value+=input_value;
	}
}				