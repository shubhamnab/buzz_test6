/* global $,document,console,quizMaster */
$(document).ready(function() {
	
	$(document).on("pageshow", "#quizPage", function() {
		console.log("Page show");
		//initialize the quiz
		quizMaster.execute("q1.json", ".quizdisplay", function(result) {
			console.log("SUCCESS CB");
			console.dir(result);	
		});
	});

});