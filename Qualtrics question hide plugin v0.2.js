Qualtrics.SurveyEngine.addOnload(function()
{
	/*Overwrite show method with original method + hide container after X ms*/
	/*Proudly developed by Janjaap Ree - V0.2*/
	var self = this;
	self.oldShow = this.question.show;
	
	self.hideContainer = function (){
		if (self.questionContainer) {
		    self.questionContainer.classList.add("hidden");
		    self.question.runtime.SeparatorDisplayed = false;
		}
	}
	
	this.question.show = function (){
		self.oldShow();
		setTimeout(self.hideContainer, 5000); // 5 sec
	}
});
