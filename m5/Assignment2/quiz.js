var quiz = {
	"questions" : [
		{
			"question" : "What is the HTML tag under which one can write the JavaScript code?",
			"option" : [
				{
					text : "javascript",
					isCorrect : false,
					feedback : "Incorrect!!!"
				},
				{
					text : "scripted",
					isCorrect : false,
					feedback : "Incorrect!!!"
				},
				{
					text : "script",
					isCorrect : true,
					feedback : "Correct!!!"
				},
				{
					text : "js",
					isCorrect : false,
					feedback : "Incorrect!!!"
				}
			],
			"hint" : "Option starts with letter S",
		},
		{
			"question" : "Which of the following is not a reserved word in JavaScript?",
			"option" : [
				{
					text : "interface",
					isCorrect : false,
					feedback : "Incorrect!!!"
				},
				{
					text : "throws",
					isCorrect : false,
					feedback : "Incorrect!!!"
				},
				{
					text : "program",
					isCorrect : true,
					feedback : "Correct!!!"
				},
				{
					text : "short",
					isCorrect : false,
					feedback : "Incorrect!!!"
				}
			],
			"hint" : "Option starts with letter p",
		},
		{
			"question" : "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
			"option" : [
				{
					text : "strip()",
					isCorrect : false,
					feedback : "Incorrect!!!"
				},
				{
					text : "trim()",
					isCorrect : true,
					feedback : "Correct!!!"
				},
				{
					text : "stripped()",
					isCorrect : false,
					feedback : "orrect!!!"
				},
				{
					text : "trimmed()",
					isCorrect : false,
					feedback : "Incorrect!!!"
				}
			],
			"hint" : "Option starts with letter t",
		},
		{
			"question" : "JavaScript is a ________ Side Scripting Language.",
			"option" : [
				{
					text : "Browser",
					isCorrect : true,
					feedback : "Correct!!!"
				},
				{
					text : "Server",
					isCorrect : false,
					feedback : "Incorrect!!!"
				},
				{
					text : "ISP",
					isCorrect : false,
					feedback : "Incorrect!!!"
				},
				{
					text : "None of the above",
					isCorrect : false,
					feedback : "Incorrect!!!"
				}
			],
			"hint" : "Option starts with letter b"
		}
	]
}
var i = 0
var j = 0
window.onload = function display() {
	document.getElementById('question').innerHTML = quiz.questions[i].question
	document.getElementById('hint').innerHTML = quiz.questions[i].hint
	document.getElementById('radio').innerHTML = 
	'<input type = "radio" name = "q1" value = "option 1" onclick="clicks('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
	+'<input type = "radio" name = "q1" value = "option 2" onclick="clicks('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
	+'<input type = "radio" name = "q1" value = "option 3" onclick="clicks('+i+','+j+2+')">' + quiz.questions[i].option[j+2].text + '<br>'
	+'<input type = "radio" name = "q1" value = "option 4" onclick="clicks('+i+','+j+3+')">' + quiz.questions[i].option[j+3].text + '<br>'
    hideButton('Previous')
};
function clicks(i,j) {
	if (quiz.questions[i].option[j].isCorrect) {
		data=''
		data += '<div class="alert alert-success alert-dismissible">'
		data += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		data += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback').innerHTML = data
	} else {
		data=''
		data += '<div class="alert alert-warning alert-dismissible">'
		data += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		data += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback').innerHTML = data
	}
}
function previous1() {
	i--;
	if (i < 0) {
		i = 0;
		hideButton('Previous')
		return;
	}
	showButton('Previous')
	showButton('Next')
	document.getElementById('question').innerHTML = quiz.questions[i].question
	document.getElementById('hint').innerHTML = quiz.questions[i].hint
	document.getElementById('radio').innerHTML =
	 '<input type = "radio" name = "q1" value = "option 1" onclick="clicks('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
	+'<input type = "radio" name = "q1" value = "option 2" onclick="clicks('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
	+'<input type = "radio" name = "q1" value = "option 3" onclick="clicks('+i+','+j+2+')">' + quiz.questions[i].option[j+2].text + '<br>'
	+'<input type = "radio" name = "q1" value = "option 4" onclick="clicks('+i+','+j+3+')">' + quiz.questions[i].option[j+3].text + '<br>'
    if (i == 0) {
    	hideButton('Previous')
    }
}
function next1() {
	i++;
	if (i > quiz.questions.length - 1) {
		i = quiz.questions.length - 1
		hideButton('Next')
		return;
	}
	showButton('Next')
	showButton('Previous')
	document.getElementById('question').innerHTML = quiz.questions[i].question
	document.getElementById('hint').innerHTML = quiz.questions[i].hint
	document.getElementById('radio').innerHTML
	 = '<input type = "radio" name = "q1" value = "option 1" onclick="clicks('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
	+'<input type = "radio" name = "q1" value = "option 2" onclick="clicks('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
	+'<input type = "radio" name = "q1" value = "option 3" onclick="clicks('+i+','+j+2+')">' + quiz.questions[i].option[j+2].text + '<br>'
	+'<input type = "radio" name = "q1" value = "option 4" onclick="clicks('+i+','+j+3+')">' + quiz.questions[i].option[j+3].text + '<br>'
    if (i == quiz.questions.length - 1) {
    	hideButton('Next')
    }
}
function hideButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'hidden';
}
function showButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'visible';
}
function myFunction() {
  	location.reload();
}