(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  var firstChar;
  for (var i = 0; i < names.length; i++) {
    firstChar = names[i].toLowerCase().charAt(0);
	if(firstChar == "j") {
	  byeSpeaker.speak(names[i]);
	}
	else {
	  helloSpeaker.speak(names[i]);
	}
  }
})()


