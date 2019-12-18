Qualtrics.SurveyEngine.addOnload(function()
{
	/*
	Log every click on an option in embedded data field "OptionsSelected".
	Note: only visible in the raw export of responses.	

	Steps to configure:
	1. Add in survey flow an embedded data label called "OptionsSelected underneath your intro".
	2. Set autonumbering under tools to use internal ID's for questions.
	3. Add this script to MPC questions.
	
	Proudly developed by Janjaap Ree - V0.2
	*/
	var self = this;
	this.questionclick = function(event,element){
        // By default you get the click event as the first parameter and the clicked element as the second parameter
        if (element.type == 'radio' || element.type == 'checkbox')
        {
            	var choiceNum = element.id.split('~')[2];
		var choiceInfo = self.question.runtime.Choices[choiceNum];
		if (element.type == 'radio' || choiceInfo.Selected){
			var embeddedData = Qualtrics.SurveyEngine.getEmbeddedData("OptionsSelected");
			if (embeddedData != null) {
				Qualtrics.SurveyEngine.setEmbeddedData("OptionsSelected", embeddedData + ", " + "[" + self.questionId + "]" + choiceInfo.Display);
			}
			else {
				Qualtrics.SurveyEngine.setEmbeddedData("OptionsSelected", "[" + self.questionId + "]" + choiceInfo.Display);
			}
		}
        }
    }
});
