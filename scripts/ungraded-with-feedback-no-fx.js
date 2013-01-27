/*
Example code by Philip Hutchison, March 2008 (http://pipwerks.com).
This code uses the MooTools 1.1.1 framework, but can be easily edited
to use standard DOM scripting techniques or other JS frameworks.

getEventTarget function copied from 
http://usabletype.com/weblog/event-delegation-without-javascript-library/
*/




//Helper function to ensure cross-browser compatibility
function getEventTarget(e){						
	var e = e || window.event;
	var targ = e.target || e.srcElement; 
	if (targ.nodeType == 3) { 
		targ = targ.parentNode;
	}
	return targ;
}


//Show the feedback for the clicked DT item.
function toggleFeedback(dt){					
	$(dt);										//Apply MooTools prototypes to the DT object
	var dl = dt.getParent();					//Get the parent DL of the clicked DT. Using MooTools $ and getParent functions
	if(dl && dl.nodeName === "DL"){				//Ensure 'dl' is what we're expecting
		var dd = dt.getNext();					//Get the next sibling of the clicked DT (should be the DD conatining the feedback)
		var actives = $$(".active");			//Find items with the class 'active' so we can de-activate
		for(var i=0; i < actives.length; i++){	//Loop through the 'actives' so we can toggle them to inactive
			var me = $(actives[i]);				//Apply MooTools prototypes to the current element
			if(me != dd){						//If there is an active DD, and it isn't the DD we want to set to active,
				me.removeClass("active"); 		//Remove the class so it's no longer active
			}
		}
		dt.addClass("active");					//Set our target DT to active!
		dd.addClass("active");					//Set our target DD to active!
	}
}


//Initialize the quiz
function initQuiz(){
	var q1 = $("question1");						//Get the 'question' DL (using MooTools $ function)
	q1.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}

	var q2 = $("question2");						//Get the 'question' DL (using MooTools $ function)
	q2.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}
	var q3 = $("question3");						//Get the 'question' DL (using MooTools $ function)
	q3.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}

	var q4 = $("question4");						//Get the 'question' DL (using MooTools $ function)
	q4.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}
	var q5 = $("question5");						//Get the 'question' DL (using MooTools $ function)
	q5.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}

	var q6 = $("question6");						//Get the 'question' DL (using MooTools $ function)
	q6.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}

	var q7 = $("question7");						//Get the 'question' DL (using MooTools $ function)
	q7.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}

	var q8 = $("question8");						//Get the 'question' DL (using MooTools $ function)
	q8.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}
	var q9 = $("question9");						//Get the 'question' DL (using MooTools $ function)
	q9.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}

	var q10 = $("question10");						//Get the 'question' DL (using MooTools $ function)
	q10.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}
	
	var q11 = $("question11");						//Get the 'question' DL (using MooTools $ function)
	q11.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}

	var q12 = $("question12");						//Get the 'question' DL (using MooTools $ function)
	q12.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}
	
	var q13 = $("question13");						//Get the 'question' DL (using MooTools $ function)
	q13.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}

	var q14 = $("question14");						//Get the 'question' DL (using MooTools $ function)
	q14.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}
	var q15 = $("question15");						//Get the 'question' DL (using MooTools $ function)
	q15.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}

	var q16 = $("question16");						//Get the 'question' DL (using MooTools $ function)
	q16.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}

	var q17 = $("question17");						//Get the 'question' DL (using MooTools $ function)
	q17.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}

	var q18 = $("question18");						//Get the 'question' DL (using MooTools $ function)
	q18.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}
	var q19 = $("question19");						//Get the 'question' DL (using MooTools $ function)
	q19.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}

	var q20 = $("question20");						//Get the 'question' DL (using MooTools $ function)
	q20.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}
	
	
	
}


//Using MooTools DomReady to initialize the quiz (faster than onload)
window.addEvent('domready', initQuiz);