/**
 * @author Nana Ewusi
 */
var Rollover = {
        		init: function()
        		{
        			if (!document.getElementsByTagName) return;
        			//Attach rollover listeners
        			var socialImages = getByClass("social");
        			
        			for (var i = 0; i < socialImages.length; i++)
        			{
        				var socialImage = socialImages[i];
        				addListener(socialImage, "mouseover", Rollover.mouseoverListener, false);
        				addListener(socialImage, "mouseout", Rollover.mouseoutListener, false);
        			}
        			//Attach navigation arrow listneners
        			var clickables = getByClass("clickable");
        			
        			for (var i = 0; i < clickables.length; i++)
        			{
        				var clickable = clickables[i];
        				addListener(clickable, "click", Rollover.clickListener, false);
        			}
        		},
        		
        		clickListener: function(e)
        		{
        			var action;
        			var button = getSourceElement(e);
        			while (button.nodeName.toLowerCase() !== "div")
        			{
        				button = button.parentNode;
        			}
        			
        			if (hasClass(button, "next"))
        			{
        				action = "next";
        			}
        			else
        			{
        				action = "previous";
        			}
        			
        			Rollover.navigate(action);
        		},
        		navigate: function(action)
        		{
        			//Determine the currently displayed page
        			var currentPage = window.location.href;
        			var nextPage;
        			currentPage = currentPage.substr(currentPage.lastIndexOf("/") + 1);
        			
        			if (currentPage == "index.html")
        			{
        				switch (action)
        				{
        					case "next":
        						nextPage = "about.html";
        						break;
        					default:
        						nextPage = "subscribe.html";
        						break;
        				}
        			}
        			else if (currentPage == "about.html")
        			{
        				switch (action)
        				{
        					case "next":
        						nextPage = "services.html";
        						break;
        					default:
        						nextPage = "index.html";
        						break;
        				}
        			}
        			else if (currentPage == "services.html")
        			{
        				switch (action)
        				{
        					case "next":
        						nextPage = "subscribe.html";
        						break;
        					default:
        						nextPage = "about.html";
        						break;
        				}
        			}
        			else
        			{
        				switch (action)
        				{
        					case "next":
        						nextPage = "index.html";
        						break;
        					default:
        						nextPage = "services.html";
        						break;
        				}
        			}
        			
        			window.location.href = nextPage;
        		},
        		mouseoverListener: function(e)
        		{
        			Rollover.changePicture(this);
        		},
        		
        		mouseoutListener: function(e)
        		{
        			Rollover.changePicture(this);
        		},
        		
        		changePicture: function(element)
        		{
        			if (element.src.indexOf("-hover") == -1) //Normal image is showing
        			{
        				element.src = element.src.replace(/(\.[^.]+)$/, '-hover$1');
        			}
        			else //Hover image is showing
        			{
        				element.src = element.src.replace(/-hover(\.[^.]+)$/, '$1');
        			}
        		}
        	};