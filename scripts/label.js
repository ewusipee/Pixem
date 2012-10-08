/**
 * @author Nana Ewusi
 */

var Label = {
	init: function()
	{
		if (!document.getElementById) return;
		
		var convertDirectionBox = getById("direction");
		addListener(convertDirectionBox, "change", Label.changeListener, false);
	},
	
	changeListener: function(e)
	{
		var from, to;
		
		var convertDirection = this.selectedIndex;
		if (convertDirection == 0)
		{
			from = "px";
			to = "em";
		}
		else
		{
			from = "em";
			to = "px";
		}
		
		Label.fixLabels(from, to);
		
		Label.resetFields();
	},
	
	resetFields: function()
	{
		var inputFields = getByClass("input");
		
		for (var i = 0; i < inputFields.length; i++)
		{
			var inputField = inputFields[i];
			inputField.value = "";
		}
	},
	
	fixLabels: function(from, to)
	{
		var fromLabel = getById("from-label");
		var toLabel = getById("to-label");
		
		fromLabel.innerHTML = from;
		toLabel.innerHTML = to;
	}
}
