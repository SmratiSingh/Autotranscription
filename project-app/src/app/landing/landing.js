console.log('this is a js file');
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
	let finalTranscript = '';
  const recognition = new window.webkitSpeechRecognition();
  console.log("recognition created");
	recognition.interimResults = true;
	recognition.continuous = true;
	recognition.lang = "en-US";
  
  function transcribeSpeech(){
    console.log("Inside transcrib function");
    document.getElementById("recordBtn").style.backgroundColor = 'red';
    stopBtn.style.backgroundColor = '#2f4f4f';
	
    recognition.onresult = (event) => {
    let interimTranscript = '';
  //let finalTranscript = '';
	  //const speechToText = event.results[0][0].transcript;
	  for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
			let transcript = event.results[i][0].transcript;
			if (event.results[i].isFinal) {
        finalTranscript += transcript;
        //transcript = event.results[i][0].transcript;
			  //document.write(transcript)
			  //var tarea = document.getElementById("transcriptText")
				//tarea.innerHTML = tarea.innerHTML + transcript 
			  
			 } else {
			   interimTranscript += transcript;
       }
       //transcriptText.innerHTML +=finalTranscript;
       //interim_span.innerHTML = linebreak(interim_transcript);
       final.innerHTML = finalTranscript;
       interim.innerHTML = interimTranscript;
       trans.scrollTop = trans.scrollHeight;
		  }
	  //document.write(finalTranscript);
	  //finalTranscript = ""
	}
	recognition.start();
	recognition.onaudioend = function(){
      //document.write("\n Speech ended.")
      console.log('Audio ended');
      recordBtn.style.backgroundColor = '#2f4f4f';
      stopBtn.style.backgroundColor = '#dcdfe5';
      getKeywords();
		}
  }
  
  function stopRecord(){
    recognition.stop();
    getKeywords();
  }
  function getKeywords(){ 
    var xmlhttp = new XMLHttpRequest();
    console.log('INside keyword extractor');
		//var contentDiv = document.getElementById("summary");
    var question = document.getElementById('final').innerHTML;
		xmlhttp.open("GET", "/keywords?trans="+question, true);
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var resp = xmlhttp.responseText;
        console.log("resp is"+resp);
        var keys = resp.split(',');
        var count = 0; 
        for(var i=0;i<keys.length;i++){
				keywords.innerHTML += ` <p><div class='input-group mb-3 scrollable-content' style='height: 1%' name='k` +toString(count)+ `'>
                                <div class='input-group-prepend'>
                                  <span class='input-group-text' id=''>`+keys[i]+`</span>
                                </div>
                                <div class='input-group-append'>
                                  <button class='btn btn-outline-info' style='color:rgb(49, 82, 82);' type='button' onclick='wipe(this.parentNode.parentNode.name);'>
                                    X
                                  </button>
                                </div>
                              </div></p> <br/>`;
                              count = count + 1;
            }
			}
		}
		xmlhttp.send(null);
  }

  function wipe(rname){
    console.log("rname is"+rname);
    keywords.removeChild(rname);
  }