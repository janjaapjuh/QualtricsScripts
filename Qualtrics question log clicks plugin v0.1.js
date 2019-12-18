Qualtrics.SurveyEngine.addOnload(function()
{
	/*
	Log every click on an option in embedded data field "OptionsSelected".
	Note: only visible in the raw export of responses.	

	Steps to configure:
	1. Add in survey flow an embedded data label called "OptionsSelected underneath your intro".
	2. Set autonumbering under tools to use internal ID's for questions.
	3. Add this script to MPC questions.
	
	Proudly developed by Janjaap Ree - V0.1
	*/
    var self = this;
    this.questionclick = function(event,element)
    {
        // Only log the click of the user when it consists of a MPC question.
        if (element.type == 'radio' || element.type == 'checkbox')
        {
           	var choiceNum = element.id.split('~')[2];
           	var choiceInfo = self.question.runtime.Choices[choiceNum];
            	// Make sure, in case of a checkbox, that the log is only created if it is checked and not when unchecked.
		if (element.type == 'radio' || choiceInfo.Selected){
			var embeddedData = Qualtrics.SurveyEngine.getEmbeddedData("OptionsSelected");
			// If there is no embedded data yet, initialise the list.
			if (embeddedData != null)
				Qualtrics.SurveyEngine.setEmbeddedData("OptionsSelected", embeddedData + ", " + "[" + self.questionId + "]" + choiceInfo.Display);
			else
				Qualtrics.SurveyEngine.setEmbeddedData("OptionsSelected", "[" + self.questionId + "]" + choiceInfo.Display);
		}
        }
    }
});
