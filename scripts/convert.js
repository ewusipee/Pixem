/**
 * @author Nana Ewusi
 */

var Convert = {
	rules: {
		base: 16
	},
	
	init: function()
	{
		if (!document.getElementById) return;
		
		var inputBox = getById("input");
		addListener(inputBox, "keydown", Convert.keydownListener, false);
		
		var resultBox = getById("result");
		resultBox.disabled = true;
	},
	
	keydownListener: function(e)
	{
		var fieldValue;
		var keyCode = getKeyCode(e);
		if (!isNumericKey(keyCode))
		{
			//console.log("You didn't enter a valid number.");
			preventDefaultAction(e);
		}
		else
		{
			addListener(this, "keyup", Convert.getInputValue, false);
			
		}
		
	},
	
	getInputValue: function(e)
	{
		var inputValue = this.value;
		Convert.calculateOutput(inputValue);
	},
	
	calculateOutput: function(input)
	{
		var base = Convert.rules.base;
		var input = input;
		var output;
		
		var direction = getById("direction").selectedIndex;
		switch (direction)
		{
			case 0: //Pixels to Ems
				output = (((input / base) * 1).toFixed(3));
				break;
				
			case 1: 
				output = (input / 1) * base;
				break;
		}
		
		Convert.updateOutput(output);
	},
	
	updateOutput: function(output)
	{
		var outputBox = getById("result");
		outputBox.value = output;
	}
};
