$("#simDemo").click(function () {
	
	htm=''
	+'<div class="row statement" ><p>A problem statement is a crucial element in designing and developing a pilot plant. '
		+'It defines the problem or opportunity that the pilot plant aims to address, and it serves as a guiding force throughout the project.'
		+'Heres a general outline to help you define a problem statement for designing and developing a pilot plant:'
		+'<br><b>Problem Statement:</b> You are given the responsibility as an Instrumentation and Control Engineer to design and commission a pilot '
		+'<br><b>A batch reactor with a capacity of 200 Liters Continuous reactor (CSTR) along with a bottle filling to fill  20 bottles of different size to be filled in one hour. Number of ingardients are three. </b>'
		+'<br><p><b>Background :</b> <br>The pilot plant will be used to test the new “control and automation” technologies.'
		+'<br><b>Key Performance Indicators (KPIs) :</b><br> You will be judged based on the accuracy of design, proper'
		+'selection of field and panel instruments, and successful commissioning of the plant in a stipulated time frame.'
		+'<br><b>Constraints and Assumptions :</b><br> As you are an Instrumentation and Control Engineer process related details are'
		+'not expected from you. You will receive the same from a process expert.</b></div>'
		+'<div class="row"><img src="images/batchProcess.png" class="img img-responsive"></img></div>'
	
		
	$("#proStrBody").html(htm);
});
	$("#procedure").click(function () {
		 
		var htm='Add procedure here'
			+' '
		$("#procedureBody").html(htm);
	});
	$("#tagDetail1").click(function () {
		 
		var htm=''
			+'  <table class="table table-hover table-bordered">'
			+'    <thead>'
			+' <tr class="table-info">'
			+'  <th>Tag Details</th>'
			+'  <th>Tags</th>'
			+' </tr>'
			+' </thead>'
			+' <tbody>'
			
			+' <tr>'
			+' <td> Temperature Transmitter   </td>'
			+'  <td>TT</td>'
			+'  </tr>'
			+' <tr>'
			+' <td>Control Valve 1 </td>'
			+'  <td>CV1</td>'
			+'  </tr>'
			+' <tr>'
			+' <td>Control Valve 2 </td>'
			+'  <td>CV2</td>'
			+'  </tr>'
			+' <tr>'
			+' <td>Load Cell</td>'
			+'  <td>WT</td>'
			+'  </tr>'
			
			
			+' </tbody>'
			+'  </table>'
		$("#tagBody").html(htm);
	});
	