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
		 
		var htm=''
			+'         <h5 class="text-center" style="color: #f8f9fa; background-color: #343a40; padding: 10px;">PROCEDURE</h5>'

    +'         <div class="section">'
    +'             <h4 class="tab-title">1. Piping Diagram Configuration</h4>'
    +'             <ul>'
    +'                 <li>- Configure all parameters for the piping diagram. In which you need to identify vessels and equipment to run the plant.</li>'
    +'                 <li>- Click on the <button class="button">Verify Components</button> button.</li>'
    +'                 <li>- If all configuration parameters are correct, the "Next Level" button will be visible.</li>'
    +'                 <li>- Click on the <button class="button">Next Level</button> button to proceed.</li>'
    +'             </ul>'
    +'         </div>'

    +'         <div class="section">'
    +'             <h4 class="tab-title">2. Instrument Diagram Configuration</h4>'
    +'             <ul>'
    +'                 <li>- Follow the same steps as above to configure the instrument diagram. In this you will have identify the instruments required to run the plant.</li>'
    +'                 <li>- Click on the <button class="button">Verify Instruments</button> button.</li>'
    +'                 <li>- If all configuration parameters are correct, the "Next Level" button will be visible.</li>'
    +'                 <li>- Click on the <button class="button">Next Level</button> button to continue.</li>'
    +'             </ul>'
    +'         </div>'

    +'         <div class="section">'
    +'             <h4 class="tab-title">3. Sequence of Activities</h4>'
    +'             <ul>'
    +'                 <li>- Read the “Prior Knowledge Assessment” statements carefully.</li>'
    +'                 <li>- Enter the appropriate sequence number in the provided text box. The system will not allow you to write the duplicate numbers. Hence be careful.</li>'
    +'                 <li>- Click on the <button class="button">Submit</button> button.</li>'
    +'                 <li>- You have three attempts to verify whether the sequence is correct or not.</li>'
    +'                 <li>- Try three times before proceeding to the Simulation section.</li>'
    +'             </ul>'
    +'         </div>'

    +'         <div class="section">'
    +'             <h4 class="tab-title">4. Simulation Execution</h4>'
    +'             <ul>'
    +'                 <li>- Click on the <button class="button">Start</button> button to begin the simulation.</li>'
    +'                 <li>- The first-time setting runs for 5 minutes by default.</li>'
    +'                 <li>- For other test cycles, you can choose different time durations such as 2 min, 3 min, 4 min, etc.</li>'
    +'                 <li>- The simulation will display the status and phases during execution.</li>'
    +'                 <li>- You can start the next test cycle or view the datasheet and trends according to the test cycles.</li>'
    +'                 <li>- The datasheet for each test cycle can be downloaded in PDF format by clicking on the <button class="button">Download</button> button.</li>'
    +'                 <li>- Multiple readings are available in line format.</li>'
    +'                 <li>- Use the checkbox to view different series or hide specific series as needed.</li>'
    +'             </ul>'
    +'         </div>'

//    +'         <div class="section">'
//    +'             <h4 class="tab-title">4.1. Download Graph</h4>'
//    +'             <ul>'
//    +'                 <li>- Click on the <button class="button">Download Graph</button> button to save the graph.</li>'
//    +'             </ul>'
//    +'         </div>'

    +'         <div class="section">'
    +'             <h4 class="tab-title">4.1. Data Monitoring & Graphs</h4>'
    +'             <ul>'
    +'                 <li>- View the Datasheet and Trends accordingly.</li>'
    +'                 <li>- The trend functionality allows you to see multiple readings in a line or trend format.</li>'
    +'                 <li>- Use the checkbox to switch between different series or hide/show specific data.</li>'
    +'                 <li>- Download the graph using the <button class="button">Download Graph</button> button.</li>'
    +'             </ul>'
    +'         </div>'

    +'         <div class="section">'
    +'             <h4 class="tab-title">4.2. Result Assessment</h4>'
    +'             <ul>'
    +'                 <li>- Click on the <button class="button">Result</button> button to view your performance assessment.</li>'
    +'             </ul>'
    +'         </div>';
		$("#procedureBody").html(htm);
	});
	$("#tagDetail1").click(function () {
		 
		var htm=''
			+'  <table class="table table-hover table-bordered">'
			+'    <thead>'
			+' <tr class="table-info">'
			+'  <th>Tags</th>'
			+'  <th>Tag Details</th>'
			+' </tr>'
			+' </thead>'
			+' <tbody>'
			
			+' <tr>'
			+'  <td>TT</td>'
			+' <td> Temperature Transmitter   </td>'
			+'  </tr>'
			+' <tr>'
			+'  <td>CV1</td>'
			+' <td>Control Valve 1 </td>'
			+'  </tr>'
			+' <tr>'
			+'  <td>CV2</td>'
			+' <td>Control Valve 2 </td>'
			+'  </tr>'
			+' <tr>'
			+'  <td>WT</td>'
			+' <td>Load Cell</td>'
			+'  </tr>'
			
			
			+' </tbody>'
			+'  </table>'
		$("#tagBody").html(htm);
	});
	