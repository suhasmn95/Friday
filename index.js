const startBtn = document.querySelector("#start-btn");

const recognistion = new webkitSpeechRecognition();
recognistion.continuous = true;
recognistion.lang = "en-US";
recognistion.interimResults = false;
recognistion.maxAlternatives = 1 ;

const synth = window.speechSynthesis;

startBtn.addEventListener("click",() => {
	recognistion.start();
});

recognistion.onresult =(e) => {
	const transcript = e.results[e.results.length -1][0].transcript.trim();
	
	//Greetings
	if (transcript === "hello" 
	|| transcript === "hi"
	)
	{
		recognistion.stop()
		const utter = new SpeechSynthesisUtterance("hi, how are you?");
		utter.onend = () => {
			recognistion.start();
		}
		synth.speak(utter);
	}
	
	//bye
	
	if (transcript === "bye" 
	|| transcript === "goodbye"
	)
	{
		recognistion.stop()
		const utter = new SpeechSynthesisUtterance("good bye, see you soon");
		synth.speak(utter);
	}
};

//console.log(e.results[e.results.length -1][0].transcript);