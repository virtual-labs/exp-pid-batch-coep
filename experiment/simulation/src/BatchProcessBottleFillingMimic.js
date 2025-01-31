 var stopSavingValues;
 let dataInterval; 
function BatchProcessBottleFillingPipingMimic(){
$("#Header").html("	<center><span >SIMULATION</span></center>");
	
	
	
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >PROCESS MONITORING PANEL</span></center>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="startBtn" class="btn btn-danger" style="width:100%" data-toggle="modal" data-target="#myModal1">Start</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button id="reset" class="btn btn-danger" style="width:100%" disabled>Reset</button>'
		+'</div>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="datasheet" class="btn btn-danger" style="width:100%;margin-top:10px;" disabled>View Datasheet</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button type="button" class="btn btn-danger"  id="graph" style="margin-top:10px;width:100%" data-toggle="modal" data-target="#modalTrends" disabled>Trends </button>'
		+'</div>'
		+'</div>'
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >READINGS</span></center>'
		+'</div>'
	
		
		+'<div class="row conf" >'
		+'<table class="table table-bordered">'
		+' <thead>'

		+'</thead>'
		+'<tbody>'
		+' <tr>'
		+'   <td><label><b> TT </b></label></td>'
		+'   <td><label class="PMCValue" id="temp">22</label>°C</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>CV1  </b></label></td>'
		+' <td><label class="PMCValue" id="cv1">0</label>%</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>CV2 </b></label></td>'
		+' <td><label class="PMCValue" id="cv2">0</label>%</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>WT </b></label></td>'
		+' <td><label class="PMCValue" id="wt">0</label>ltr</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>STIRRER STATUS </b></label></td>'
		+' <td><label class="PMCValue" id="strSt">OFF</label></td>'
		+'  </tr>'
//		
//		+'  <tr>'
//		+' <td><label><b>Peristaltic Pump :</b></label></td>'
//		+' <td><label class="PMCValue" id="pump">0</label>%</td>'
//		+'  </tr>'
//		+'  <tr>'
//		+' <td><label><b>FD Fan :</b></label></td>'
//		+' <td><label class="PMCValue" id="fdfan">0</label>%</td>'
//		+'  </tr>'
//		+'  <tr>'
//		+' <td><label><b>ID Fan :</b></label></td>'
//		+' <td><label class="PMCValue" id="idfan">0</label>%</td>'
		+'  </tr>'
		+'</tbody>'
		+'</table>'

		+'</div>'
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="btnResult" style="margin-top:10px;width:100%" disabled >Result</button>'
		+'</div>'
		
		
		+'<!-- The Modal -->'  
   +'<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="modelTitle1" aria-hidden="true">'  
  +'<div class="modal-dialog" id="modelDialog1" role="document">'  
    +'<div class="modal-content">'  
     +' <!-- Modal Header -->'  
      +'<div class="modal-header"> ' 
       +' <h4 class="modal-title" id="modelTitle1"></h4>  '
        +'<button type="button" class="close" data-dismiss="modal" aria-label="Close" id = "cross">'  
        +'  <span aria-hidden="true">&times;</span>'  
        +'</button>'  
      +'</div>  '
      +'<!-- Modal body -->  '
      +'<div class="modal-body" id="modelBody1"> ' 
       +' <!-- Content will be populated here -->'  
      +'</div> ' 
      +'<!-- Modal footer --> ' 
      +'<div class="modal-footer">  '
        +'<button type="button" class="btn btn-danger" data-dismiss="modal" id = "modalClose">OK</button>'  
      +'</div>'  
    +'</div>'  
 +' </div> ' 
+'</div>'  
+'<!-- End Modal -->'
		
	
	
	$("#Selection").html(htm);
	
	
//	spryerDryermimicDiagram();
	
	$("#graph").click(function(){
		spryerDryerPostQuestion(dataJson);
		trendsCount++;
	});
	
	$("#btnResult").click(function(){
		resultJson.animationStart=startCount;
		resultJson.datasheet=datasheetCount;
		resultJson.trends=trendsCount;
		console.log(resultJson);
		result();
	});
	
	
	$("#reset").click(function(){
		stopSavingValues();
		clearInterval(dataInterval);
		$("#Selection").html('');
		$("#diagram").html('');
	     $("#datasheet").prop("disabled",true);
		 // Example Usage
		 
		resetApp();
		 $("#startBtn").prop("disabled",false);
		 $("#reset").prop("disabled",true);
		console.log("reset clicked ");
	});
	
	
	function resetApp() {
	
//	  resetFlg =1;
//	 console.log("reset stop "+resetFlg);
  // Step 1: Stop animations and clear relevant timeouts
//  stopAnimationsAndTimers();

  // Step 2: Reset any specific state or UI if needed
 
//  $("#Selection").html(htm); // Update the content as needed

  // Step 3: Reinitialize functions like spryerDryermimicDiagram if required
//  spryerDryermimicDiagram(); // Assuming you need to reinitialize this for the reset
        
      BatchProcessBottleFillingPipingMimic();
      
  console.log("Reset complete.");
}
	
	$("#datasheet").click(function(){
		const link = document.createElement('a'); 
	    link.setAttribute('download', 'sprayDryerData.pdf'); 
	    link.setAttribute('href', 'images/sprayDryerData.pdf'); 
	    link.setAttribute('target','_blank')
	    document.body.appendChild(link); 
	    link.click(); 
	    document.body.removeChild(link);
	    datasheetCount++;
		});
	
	BatchProcessBottleFillingDiagram();
//	$("#BoilerHeatExchangerPost").click(function(){
//		
//		BatchProcessBottleFillingPostQuestion();
//		
//	});

}
function BatchProcessBottleFillingDiagram()
{
    
		// Get the dimensions of the window
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		
		// Define the desired virtual canvas size
		var virtualWidth = 1500;
		var virtualHeight = 1000;
		
		// Create the Raphael canvas
		var paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
		
		// Set the viewBox to scale content dynamically
		paper.setViewBox(0, 0, virtualWidth, virtualHeight, true);
		
		// Detect device pixel ratio
		var scaleFactor = window.devicePixelRatio || 1;
		
		// Define scale adjustment based on screen scaling
		var scale;
		if (scaleFactor === 1) {
		    // 100% scaling
		   scale = 1 * 1.1 / scaleFactor;
		} else if (scaleFactor > 1 && scaleFactor <= 1.25) {
		    // 125% scaling
		    scale = 1 * 1.4 / scaleFactor; // Adjust as per your requirement
		} else {
		    // Other scaling (e.g., 150%, etc.)
		    scale = 1 / scaleFactor; // Default adjustment
		}
		
		// Apply the scale to the canvas using transform
		paper.canvas.setAttribute('style', `transform: scale(${scale}); transform-origin: 0 0;`);
		
		// Ensure the canvas matches the screen dimensions
		paper.setSize('100%', '100%');

    var x=220,y=120;
	
	
	  
//	  var paper = Raphael("diagram", 1500, 700);
//
// var x=250,y=50;
//
//	var w = 1500;
//	var h = 1000;
//	var width = $(window).width();
//	var paper = new Raphael(document.getElementById('diagram'), '100%', '70%');
//	paper.setViewBox(0, 0, w, h, true);
//	paper.setSize('100%', '70%');

//var tankAcolor = "#fc6868";
//var tankBcolor = "#68a1fc";
//var tankCcolor = "#68fc72";

//var tankAcolor = "#c73e3e"; //red
//var tankBcolor = "#3f85eb"; //blue
//var tankCcolor = "#56b054"; //green

var tankAcolor = "rgb(199, 62, 62)"; //red
var tankBcolor = "rgb(63, 133, 235)"; //blue
var tankCcolor = "rgb(86, 176, 84)"; //green


// var time = 2000; // this time takes 5 min and 40 sec
   var time = 2000;
   
	tank(x+ 210,y+ 140);
	tank(x+380,y+ 140);
	tank(x+550,y+ 140);
  
    tankContiner(x-70,y);
    tankContiner(x+600,y);
    tankContiner(x+820,y);
   
	function tank(x,y,tankColor){
	 paper.path("M" + (x ) + " " + (y) + 
		    " l 100 0 l 0 -100 l -15 -15 l 0 -10 l -70 0 l 0 10 l -15 15 l 0 100").attr({"fill":tankColor,"stroke":"#595756","stroke-width":2});
		    
	paper.image("images/ultrasonic.png", (x+35), (y-151), 65, 35);	    
		    }

	    
   
   function tankContiner(x,y){
	paper.path("M" + (x+30) + " " + (y+350 ) + 
		    " l 90 0 l 0 -70 l -15 -15 l 0 -10 l -60 0 l 0 10 l -15 15 z")
		    .attr({
			   stroke: "#000", // Light gray for a metallic outline
	    "stroke-width": 0.3,
	    fill: "180-#d6d6d6-#a9a9a9-#ffffff-#7f7f7f" // Gradient for aluminum effect
			});
	
	paper.rect((x+44),(y+247),62,15,5).attr({
			   stroke: "#000", // Light gray for a metallic outline
	    "stroke-width": 0.3,
	    fill: "180-#d6d6d6-#a9a9a9-#ffffff-#7f7f7f" // Gradient for aluminum effect
			});	
			
	paper.rect(x+25,y+350,100,20,5).attr({
			   stroke: "#000", // Light gray for a metallic outline
	    "stroke-width": 0.1,
	    fill: "180-#d6d6d6-#a9a9a9-#ffffff-#7f7f7f" // Gradient for aluminum effect
			});			
			
    }	

 
 //Images TankA
   
   var connectingPipeTankA = paper.image("images/pipe2.png", (x+50), (y+325), 40, 25);
  	var motorTankA = paper.image("images/motor.png", (x+65), (y+290), 70, 70);
    var motorOffTankA = paper.image("images/motorRed.png", (x + 88), (y + 318), 26, 26);
    var motorOnTankA = paper.image("images/motorGreen.png", (x + 90), (y + 319.5), 21, 21).toBack();
  
   var tankAFlow = paper.path("M"+(x+100)+" "+(y+295)+" l 0 -320 l 161 0 l 0 40").attr({
			   stroke: "#000", // Light gray for a metallic outline
	    "stroke-width": 9
	   ,"stroke-linejoin": "round"
			});
			
  var tankAFlow1 = paper.path("M"+(x+100)+" "+(y+295)+" l 0 -320 l 161 0 l 0 39.5").attr({
			   stroke: "#fff", // Light gray for a metallic outline
	    "stroke-width": 6.8
	   ,"stroke-linejoin": "round"
			});
	
	
     var valveOffTankA = paper.image("images/verticalValveOff.png", (x + 58), (y + 80), 54, 40);
     var valveOnTankA = paper.image("images/verticalValveOn.png", (x + 58), (y + 80), 54, 40).toBack();
    
  
    //Images TankB
   
   var connectingPipeTankBFeed = paper.image("images/pipe2.png", (x+720), (y+325), 40, 25);
  	var motorTankBFeed = paper.image("images/motor.png", (x+65+670), (y+290), 70, 70);
    var motorOffTankBFeed = paper.image("images/motorRed.png", (x + 88+670), (y + 318), 26, 26);
    var motorOnTankBFeed = paper.image("images/motorGreen.png", (x + 90+670), (y + 319.5), 21, 21).toBack();

      var tankBFlowFeed = paper.path("M"+(x+770)+" "+(y+295)+" l 0 -320 l -167 0 l 0 40").attr({
			   stroke: "#000", // Light gray for a metallic outline
	    "stroke-width": 9
	   ,"stroke-linejoin": "round"
			});
			
  var tankBFlow1Feed = paper.path("M"+(x+770)+" "+(y+295)+" l 0 -320 l -167 0 l 0 39.5").attr({
			   stroke: "#fff", // Light gray for a metallic outline
	    "stroke-width": 6.8
	   ,"stroke-linejoin": "round"
			});
     
       var valveOffTankBFeed = paper.image("images/verticalValveOff.png", (x + 58+670), (y + 80), 54, 40);
     var valveOnTankBFeed = paper.image("images/verticalValveOn.png", (x + 58+670), (y + 80), 54, 40).toBack();
      
      //Images TankC
   
   var connectingPipeTankCFeed = paper.image("images/pipe2.png", (x+940), (y+325), 40, 25);
  	var motorTankCFeed = paper.image("images/motor.png", (x+65+670+220), (y+290), 70, 70);
    var motorOffTankCFeed = paper.image("images/motorRed.png", (x + 88+670+220), (y + 318), 26, 26);
    var motorOnTankCFeed = paper.image("images/motorGreen.png", (x + 90+670+220), (y + 319.5), 21, 21).toBack();
  
  
    var tankCFlowFeed = paper.path("M"+(x+990)+" "+(y+295)+" l 0 -340 l -560 0 l 0 60").attr({
			   stroke: "#000", // Light gray for a metallic outline
	    "stroke-width": 9
	   ,"stroke-linejoin": "round"
			});
			
  var tankCFlow1Feed = paper.path("M"+(x+990)+" "+(y+295)+" l 0 -340 l -560 0 l 0 59.5").attr({
			   stroke: "#fff", // Light gray for a metallic outline
	    "stroke-width": 6.8
	   ,"stroke-linejoin": "round"
			});
  
     var valveOffTankCFeed = paper.image("images/verticalValveOff.png", (x + 58+670+220), (y + 80), 54, 40);
     var valveOnTankCFeed = paper.image("images/verticalValveOn.png", (x + 58+670+220), (y + 80), 54, 40).toBack();
    
 

$("#startBtn").click(function () {
	 $("#startBtn").prop("disabled",true);
	 
    $("#modelDialog1").addClass("modal-lg");
  $("#modelTitle1").html("Check the Components");
  var modelBody1=''
	  +'<b>Before starting the plant check whether<br>- All valves are closed <br>' 
	  +'- All pumps are switched off<br>- The instrument air, electricity and other required utilities are available <br>'
	 +' - The production schedule mandates to produce and <br>'
	 +' - Raw material is available</b>'
	
  $("#modelBody1").html(modelBody1);
    $("#myModal1").modal("show");
     $("#modelBody1").css({
	            'font-weight': '500',            // Add padding
	            'font-family': 'math',       // Font style
	            'font-size': '16px',          // Font size
	            'color': '#0c55a3'               // Text color
	        });
});

// Trigger animation and functionality after modal is dismissed
$("#myModal1").on("hidden.bs.modal", function () {
    console.log("Modal has been dismissed!");
     $("#reset").prop("disabled",false);
    // Start animation and additional functionality
    motorTankA.toFront();
    motorOnTankA.toFront();
    stOn .toFront();
		   setTimeout(() => {
		    stOff.toFront();
		    rnOn.toFront();
		}, time/10);
		
    tankBFill();
    tankAFill();
    tankCFill();

    setTimeout(() => {
        changeSensorToGreen("tankALSHH");
        changeSensorToGreen("tankBLSHH");
        changeSensorToGreen("tankCLSHH");
    }, time * 3);

    steamInit = 0;
    coldWaterFlg = 0;

    setTimeout(() => {
        getValues();
    }, time * 7);
});

// Optional: Add click event to the `#modalClose` button
$("#modalClose,#cross").click(function () {
    $("#myModal1").modal("hide");
    // Modal dismiss functionality is already handled by `data-dismiss="modal"`.
});


  
 // labels
 
 var feedTankA =  paper.text((x+5), (y+295), "Feed")
 .attr({ 'font-size': 15, "fill":"#292828","font-weight":"bold" }); 
  
  var feedTankAA =  paper.text((x+5), (y+315), "Tank A")
 .attr({ 'font-size': 15,"fill":"#292828","font-weight":"bold"});  
  
  
  
  var lshh1 = paper.text((x-100), (y+262), "LSHH1")
 .attr({ font: "12px Arial", stroke: "#204687"});   
   
   
    var v1Valve = paper.text((x-30), (y+187), "V1")
 .attr({ font: "12px Arial", stroke: "#204687"});  
 
   var v2Valve = paper.text((x+640), (y+187), "V2")
 .attr({ font: "12px Arial", stroke: "#204687"});
 
   var v2Valve = paper.text((x+860), (y+187), "V3")
 .attr({ font: "12px Arial", stroke: "#204687"}); 
   
   var lsll1 = paper.text((x-100), (y+320), "LSLL1")
 .attr({ font: "12px Arial", stroke: "#204687"});  
 
  
  var feedTankB =  paper.text((x+675), (y+295), "Feed")
 .attr({ 'font-size': 15, "fill":"#292828","font-weight":"bold" }); 
  
  var feedTankBB =  paper.text((x+675), (y+315), "Tank B")
 .attr({ 'font-size': 15,"fill":"#292828","font-weight":"bold"}); 
 
  var lshh2 = paper.text((x+570), (y+262), "LSHH2")
 .attr({ font: "12px Arial", stroke: "#204687"});   
   
   var lsll2 = paper.text((x+570), (y+320), "LSLL2")
 .attr({ font: "12px Arial", stroke: "#204687"});   
  
  var feedTankC =  paper.text((x+895), (y+295), "Feed")
 .attr({ 'font-size': 15,"fill":"#292828","font-weight":"bold"}); 
   
   var feedTankCC =  paper.text((x+895), (y+315), "Tank C")
 .attr({ 'font-size': 15,"fill":"#292828","font-weight":"bold"});   
   
   var lshh3 = paper.text((x+805), (y+240), "LSHH3")
 .attr({ font: "12px Arial", stroke: "#204687"});   
   
   var lsll1 = paper.text((x+815), (y+300), "LSLL3")
 .attr({ font: "12px Arial", stroke: "#204687"});  
   
   var controlValve2 = paper.text((x+575), (y+423), "CV2")
 .attr({ font: "12px Arial", stroke: "#204687"});  
   
   var controlValve1 = paper.text((x+40), (y+423), "CV1")
 .attr({ font: "12px Arial", stroke: "#204687"});  
 
  var steamLabel = paper.text((x-10), (y+460), "STEAM")
 .attr({ font: "12px Arial", stroke: "#204687"});
 
  var hwLabel = paper.text((x-28), (y+500), "HOT WATER")
 .attr({ font: "12px Arial", stroke: "#204687"});
 
  var conLabel = paper.text((x+770), (y+500), "CONDENSATE")
 .attr({ font: "12px Arial", stroke: "#204687"});
  
   var cwLabel = paper.text((x+760), (y+460), "COLD WATER")
 .attr({ font: "12px Arial", stroke: "#204687"});
   
   var av1 = paper.text((x+205), (y+165), "AV1")
 .attr({ font: "12px Arial", stroke: "#204687"});  
 
    var av2 = paper.text((x+445), (y+165), "AV2")
 .attr({ font: "12px Arial", stroke: "#204687"}); 
 
    var av3 = paper.text((x+605), (y+165), "AV3")
 .attr({ font: "12px Arial", stroke: "#204687"});  
   
    var sol1 = paper.text((x+120), (y+100), "V4")
 .attr({ font: "12px Arial", stroke: "#204687"});  
   
    var sol2 = paper.text((x+790), (y+100), "V5")
 .attr({ font: "12px Arial", stroke: "#204687"});
 
     var sol3 = paper.text((x+1010), (y+100), "V6")
 .attr({ font: "12px Arial", stroke: "#204687"});  
     
     var m1 = paper.text((x+100), (y+367), "M1")
 .attr({ font: "12px Arial", stroke: "#204687"});
 
    var m2 = paper.text((x+771), (y+367), "M2")
 .attr({ font: "12px Arial", stroke: "#204687"});
    
    var m3 = paper.text((x+992), (y+367), "M3")
 .attr({ font: "12px Arial", stroke: "#204687"}); 
     
    var m4 = paper.text((x+370), (y+188), "M4")
 .attr({ font: "12px Arial", stroke: "#204687"}); 
     
    var tt = paper.text((x+475), (y+207), "TT")
 .attr({ font: "12px Arial", stroke: "#204687"});  
    
    var av1 = paper.text((x+280), (y+165), "WT")
 .attr({ font: "12px Arial", stroke: "#204687"}); 
     
  
// var totWtUnit = paper.text((x+365	),(y+165),"L").attr({
//    font: "20px Arial", fill :"#fc2d2d","font-weight": "bold"})
  	

var tankCText = paper.text((x+434),(y+80)," ").attr({
font: "12px Arial", fill: "#2a2a2b", stroke: "#2a2a2b", "stroke-width": 0.5}).toFront();

  function tankCFill(){
	motorOnTankCFeed.toFront();
	var Tank_arr2 = [];
	
	Tank_arr2[0] = paper.path('M' + (x + 990) + ' ' + (y + 295) + ' l 0 0').attr({ stroke: tankCcolor, 'stroke-width': 6.1,'opacity':0.9 });	
	
	setTimeout(function(){
		valveOnTankCFeed.toFront();
	},(time/2));
	
	Tank_arr2[0].animate(
	    { path: 'M' + (x + 990) + ' ' + (y + 295) + ' l 0 -343' },
	    time,function(){
	    Tank_arr2[1] = paper.path('M' + (x + 990) + ' ' + (y+295-343+2.8) + ' l 0 0').attr({ stroke: tankCcolor, 'stroke-width': 6.1 ,'opacity':0.9});
	        Tank_arr2[1].animate( 
	              { path: 'M' + (x + 990) + ' ' + (y+295-343+2.8) + ' l -562.5 0' }, time,function(){
		
		    Tank_arr2[2] = paper.path('M' + (x+990-562+2) + ' ' + (y+295-343+2.8) + ' l 0 0').attr({ stroke: tankCcolor, 'stroke-width': 6.1 ,'opacity':0.9});
	        Tank_arr2[2].animate( 
	              { path: 'M' + (x+990-562+2) + ' ' + (y+295-343) + ' l 0 188' }, time,function(){
		          
		          var belowPipe = paper.path('M' + (x+405) + ' ' + (y+140) + ' l 0 0').attr({ stroke: tankCcolor, 'stroke-width': 6.1,'opacity':1 });
	                        belowPipe.animate({path: 'M' + (x+405) + ' ' + (y+140) + ' l 0 15' },(time/2.5)),
	                          tankCAngleClose.toFront(); 
		           
		           Tank_arr2[3] = paper.path('M' + (x+990-562+2.2) + ' ' + (y+295-343+2.8+185) + ' l 0 0').attr({ stroke: tankCcolor, 'stroke-width': 99 ,'opacity':1});
		     
		     
		     
	        Tank_arr2[3].animate( 
	              { path: 'M' + (x+990-562+2.2) + ' ' + (y+295-343+2.8+185) + ' l 0 -100' }, time,
	                tankCIntervalIncrement(),
	                
	                 function () {
		                          
		                           tank(x+ 210,y+ 140);
									tank(x+380,y+ 140);
									tank(x+550,y+ 140);
                                    
                                    setTimeout(() => { 
		                               tankCTextReleasePer.attr({ opacity: 1 });		                              
		                               
		                                tankCEmpty();
	                                 },(time/2));
                                   
                                    
	                                Tank_arr2[0].animate({ stroke: 'white' }, 50);
	                                Tank_arr2[1].animate({ stroke: 'white' }, 50);
	                                Tank_arr2[2].animate({ stroke: 'white' }, 50);
	                                
	                                motorOnTankCFeed.toBack(); 
	                                motorOffTankCFeed.toFront();	                   
	                                valveOffTankCFeed.toFront();
	                                 changeSensorToRed("tankCLSLL");
	                            })
		         }) 
	          })  
		 }) 
		 
		 
		  function tankCIntervalIncrement(){
			tankBInt();
		    tankCPercent = 100;
			let currentPercent = 1; // Start from 1
			
			// Calculate the interval duration to distribute over the given percentage
			let intervalDuration = time / tankCPercent;
			
			let interval = setInterval(() => {
			    // Update the text with the current percentage
			    tankCText.attr({ text: currentPercent + " %" }).toFront();
			    
			    // Increment the current percentage
			    currentPercent++;
			    tankCText.toFront();
			    // Stop the interval once the target percentage is reached
			    if (currentPercent > tankCPercent) {
			        clearInterval(interval);
			    }
			}, intervalDuration);
					
			}
		 
		 
}

var tankBText = paper.text((x+600),(y+80)," ").attr({
font: "12px Arial", fill: "#2a2a2b", stroke: "#2a2a2b", "stroke-width": 0.5}).toFront();

  function tankBFill(){
	var Tank_arr1 = []; // Array to hold path objects 
//	let tankBPercent = Math.floor(Math.random() * (100 - 30 + 1)) + 30;  
   motorOnTankBFeed.toFront();
    
	Tank_arr1[0] = paper.path('M' + (x + 770) + ' ' + (y + 295) + ' l 0 0').attr({ stroke: tankBcolor, 'stroke-width': 6.1,'opacity':0.9 });	
	
	setTimeout(function(){
		valveOnTankBFeed.toFront();
	},(time/2));
	
	Tank_arr1[0].animate(
	    { path: 'M' + (x + 770) + ' ' + (y + 295) + ' l 0 -323' },
	    time,function(){
		let newY0 = y + 300 - 310; // Calculate where Tank_arr[0] ends
	        Tank_arr1[1] = paper.path('M' + (x + 100+670) + ' ' + (newY0-15) + ' l 0 0').attr({ stroke: tankBcolor, 'stroke-width': 6.1 ,'opacity':0.9});
	        Tank_arr1[1].animate( 
	              { path: 'M' + (x + 100+670) + ' ' + (newY0-15) + ' l -170 0' }, time,            
	         function(){
		      
		       Tank_arr1[2] = paper.path('M' + (x+603) + ' ' + (newY0-15) + ' l 0 0').attr({ stroke: tankBcolor, 'stroke-width': 6.1 ,'opacity':0.9});
	        Tank_arr1[2].animate( 
	              { path: 'M' + (x+603) + ' ' + (newY0-15) + ' l 0 165' }, time,function(){
		      
		       var belowPipe = paper.path('M' + (x+565) + ' ' + (newY0+150) + ' l 0 0').attr({ stroke: tankBcolor, 'stroke-width': 6,'opacity':1 });
	                        belowPipe.animate({path: 'M' + (x+565) + ' ' + (newY0+150) + ' l 0 15' },(time/2.5)),
	                          tankBAngleClose.toFront(); 
		      
		      
		     Tank_arr1[3] = paper.path('M' + (x+600) + ' ' + (newY0+150) + ' l 0 0').attr({ stroke: tankBcolor, 'stroke-width': 99 ,'opacity':1});
		     
		     
	        Tank_arr1[3].animate( 
	              { path: 'M' + (x+600) + ' ' + (newY0+150) + ' l 0 -100' }, time,
	                
       
	             tankBIntervalIncrement(),
	           
				     
	               function () {
		                         
		                           tank(x+ 210,y+ 140);
									tank(x+380,y+ 140);
									tank(x+550,y+ 140);
                                  
                                  setTimeout(() => { 
		                              tankBTextReleasePer.attr({ opacity: 1 });
		                               feedingTanks(); 
		                              tankBEmpty();
		                             
	                                 },(time/2));
                                  
                                  
	                                Tank_arr1[0].animate({ stroke: 'white' }, 50);
	                                Tank_arr1[1].animate({ stroke: 'white' }, 50);
	                                Tank_arr1[2].animate({ stroke: 'white' }, 50);
	                                
	                                motorOnTankBFeed.toBack(); 
	                                motorOffTankBFeed.toFront();	                   
	                                valveOffTankBFeed.toFront();
	                                 changeSensorToRed("tankBLSLL");
	                            })
		      
	})   
		       
		 })
	})
	
	 
	 function tankBIntervalIncrement(){
		tankCInt();
		    tankBPercent = 100;
			let currentPercent = 1; // Start from 1
			
			// Calculate the interval duration to distribute over the given percentage
			let intervalDuration = time / tankBPercent;
			
			let interval = setInterval(() => {
			    // Update the text with the current percentage
			    tankBText.attr({ text: currentPercent + " %" }).toFront();
			    
			    // Increment the current percentage
			    currentPercent++;
			    tankBText.toFront();
			    // Stop the interval once the target percentage is reached
			    if (currentPercent > tankBPercent) {
			        clearInterval(interval);
			    }
			}, intervalDuration);
					
			}	
	 
	
}



 var tankAText = paper.text((x+265),(y+80)," ").attr({
font: "12px Arial", fill: "#2a2a2b", stroke: "#2a2a2b", "stroke-width": 0.5}).toFront();
 
  function tankAFill(){	
			
	var Tank_arr = []; // Array to hold path objects
   
    
  let tankAPercent = Math.floor(Math.random() * (100 - 30 + 1)) + 30;  
   

    
	Tank_arr[0] = paper.path('M' + (x + 100) + ' ' + (y + 294) + ' l 0 0').attr({ stroke: tankAcolor, 'stroke-width': 6.1,'opacity':0.9 });
	setTimeout(function(){
		valveOnTankA.toFront();
	},(time/2));
	
	Tank_arr[0].animate(
	    { path: 'M' + (x + 100) + ' ' + (y + 294) + ' l 0 -322' },
	    time,
	    function () {
	        let newY0 = y + 300 - 310; // Calculate where Tank_arr[0] ends
	        Tank_arr[1] = paper.path('M' + (x + 100) + ' ' + (newY0-15) + ' l 0 0').attr({ stroke: tankAcolor, 'stroke-width': 6.1 ,'opacity':0.9});
	        Tank_arr[1].animate(
		       
	              { path: 'M' + (x + 100) + ' ' + (newY0-15) + ' l 164.5 0' },
	             
	             
	            time,
	            function () {
	                let newX1 = x + 100 + 160+1; // Calculate where Tank_arr[1] ends in X
	                Tank_arr[2] = paper.path('M' + newX1 + ' ' + (newY0-18) + ' l 0 0').attr({ stroke: tankAcolor, 'stroke-width': 6.3 ,'opacity':0.9});
	                Tank_arr[2].animate(
	                    { path: 'M' + newX1 + ' ' + (newY0-18) + ' l 0 165' },
	                    time,
	                    function () {
	                        let newY2 = newY0 + 149+0.5; // Calculate where Tank_arr[2] ends in Y
	                        
	                        var belowPipe = paper.path('M' + (newX1-31) + ' ' + newY2 + ' l 0 0').attr({ stroke: tankAcolor, 'stroke-width': 6.3,'opacity':1 });
	                        belowPipe.animate({path: 'M' + (newX1 -31) + ' ' + newY2 + ' l 0 15' },(time/2.5)),
	                          tankAAngleClose.toFront();  
	                        Tank_arr[3] = paper.path('M' + (newX1-1) + ' ' + newY2 + ' l 0 0').attr({ stroke: tankAcolor, 'stroke-width': 100,'opacity':1 });
	                        
	                        
	                        Tank_arr[3].animate(
	                            {
		
		                     
		 path: 'M' + (newX1 -1) + ' ' + newY2 + ' l 0 -100' },
	                            time,
	                          tankAIntervalIncrement(),
	                          
	                            function () {
		                         
//		                            tank(x+ 210,y+ 140);
		                            changeSensorToRed("tankALSLL");
	                                Tank_arr[0].animate({ stroke: 'white' }, 50);
	                                Tank_arr[1].animate({ stroke: 'white' }, 50);
	                                Tank_arr[2].animate({ stroke: 'white' }, 50);
	                                setTimeout(() => { 
		                              tankATextReleasePer.attr({ opacity: 1 });
		                              receipeLabel.attr({ opacity: 1 });
		                              tankAEmpty(); 
	                                 },(time/2));
	                                
	                                
	                                motorOnTankA.toBack(); 
	                                valveOffTankA.toFront();	                   
	                                motorOffTankA.toFront();
	                                
	                            }
	                        );
	                    }
	                );
	            }
	        );
	    }
	);
	
	function tankAIntervalIncrement(){
		tankAInt();
		    tankAPercent = 100;
			let currentPercent = 1; // Start from 1
			
			// Calculate the interval duration to distribute over the given percentage
			let intervalDuration = time / tankAPercent;
			
			let interval = setInterval(() => {
			    // Update the text with the current percentage
			    tankAText.attr({ text: currentPercent + " %" }).toFront();
			    
			    // Increment the current percentage
			    currentPercent++;
			    tankAText.toFront();
			    // Stop the interval once the target percentage is reached
			    if (currentPercent > tankAPercent) {
			        clearInterval(interval);
			    }
			}, intervalDuration);
					
			}			
}			
			

    var sensors = {};
  function createSensor(id, x, y, color) {
    var sensor = {
        lslRect: paper.rect(x + 147, y + 22, 25, 15).attr({ "fill": "10-#5c6160-#000" }),
        lslSmallRect: paper.rect(x + 152, y + 37, 14, 3.5).attr({ "fill": "10-#5c6160-#000" }),
        lslColoredRectBig: paper.rect(x + 150, y + 25, 18, 9).attr({ "fill": color }) // Color passed as parameter
        // lslColoredRectSmall: paper.rect(x + 149, y + 38, 18, 5).attr({ "fill": color })  // Optional small rect
    };

    sensors[id] = sensor;
}

			// Create a green sensor
			function createGreenSensor(id, x, y) {
			    createSensor(id, x, y, "#66de66"); // Green color
			}
			
			// Create a red sensor
			function createRedSensor(id, x, y) {
			    createSensor(id, x, y, "#f54242"); // Red color
			}

  
  
  function changeSensorToGreen(id) {
    // Check if the sensor exists
    if (sensors[id]) {
        // Update the fill color of the colored rectangle
        sensors[id].lslColoredRectBig.attr({ "fill": "#66de66" }); // Green color
    } else {
//        console.log(`Sensor with id "${id}" not found.`);
    }
}


		function changeSensorToRed(id) {
		    // Check if the sensor exists
		    if (sensors[id]) {
		        // Update the fill color of the colored rectangle
		        sensors[id].lslColoredRectBig.attr({ "fill": "#f54242" }); // Red color
		    } else {
//		        console.log(`Sensor with id "${id}" not found.`);
		    }
		}

  
 	
		function tankDefaultFitting(x,y){
			paper.path('M' + (x) + ' ' + (y) + 'l 95 0 l 0 30').attr({"stroke-width": 7.5, "stroke": "#969799", "stroke-linejoin": "round"  });
//			paper.path('M' + (x) + ' ' + (y) + 'l 95 0 l 0 48').attr({"stroke-width": 5, "stroke": "#9e9b9b", "stroke-linejoin": "round"  });
			paper.image("images/tankInit.png", (x), (y -30), 50, 60);
			
		} 
		
		var inletGtankA = paper.image("images/svValveV2G.png", (x -50), (y + 189.5), 40, 40).attr({'transform': 'r' + 270});
		var inletRtankA = paper.image("images/svValveV1R.png", (x -50), (y + 189.5), 40, 40).attr({'transform': 'r' + 270});	
		
		tankDefaultFitting((x-90),(y+218));
		inletRtankA.toFront();
		
        tankDefaultFitting((x+580),(y+218));
        var inletGtankB = paper.image("images/svValveV2G.png", (x +620), (y + 189.5), 40, 40).attr({'transform': 'r' + 270});
		var inletRtankB = paper.image("images/svValveV1R.png", (x +620), (y + 189.5), 40, 40).attr({'transform': 'r' + 270});	
        
        tankDefaultFitting((x+800),(y+218));
        var inletGtankC = paper.image("images/svValveV2G.png", (x +840), (y + 189.5), 40, 40).attr({'transform': 'r' + 270});
		var inletRtankC = paper.image("images/svValveV1R.png", (x +840), (y + 189.5), 40, 40).attr({'transform': 'r' + 270});	
		
		
  
  createRedSensor("tankALSHH", x-220, y+232); // tankA
  createGreenSensor("tankALSLL", x-220, y+292);// tankA
  
  var tankAsens1Line = paper.path("M"+(x-38)+" "+(y+282)+"l -21 0 l 0 -20 l -5 0 l 0 25 l 26 0 z").attr({"fill": "50-#e8e8eb-#3d3d3d"}).toBack();
  var tankAsens2Line = paper.path("M"+(x-38)+" "+(y+340)+"l -21 0 l 0 -20 l -5 0 l 0 25 l 26 0 z").attr({"fill": "50-#e8e8eb-#3d3d3d"}).toBack();
 
  createRedSensor("tankBLSHH", x+448, y+232); // tankB
  createGreenSensor("tankBLSLL", x+448, y+292); // tankB
  
  var tankBsens1Line = paper.path("M"+(x+630)+" "+(y+282)+"l -21 0 l 0 -20 l -5 0 l 0 25 l 26 0 z").attr({"fill": "50-#e8e8eb-#3d3d3d"}).toBack();
  var tankBsens2Line = paper.path("M"+(x+630)+" "+(y+340)+"l -21 0 l 0 -20 l -5 0 l 0 25 l 26 0 z").attr({"fill": "50-#e8e8eb-#3d3d3d"}).toBack();
 
  
  createRedSensor("tankCLSHH", x+668, y+232); // tankC
  createGreenSensor("tankCLSLL", x+668, y+292); // tankC
  
  var tankCsens1Line = paper.path("M"+(x+850)+" "+(y+282)+"l -21 0 l 0 -20 l -5 0 l 0 25 l 26 0 z").attr({"fill": "50-#e8e8eb-#3d3d3d"}).toBack();
  var tankCsens2Line = paper.path("M"+(x+850)+" "+(y+340)+"l -21 0 l 0 -20 l -5 0 l 0 25 l 26 0 z").attr({"fill": "50-#e8e8eb-#3d3d3d"}).toBack();
  
  
//     feedingTanks();
		function feedingTanks() {
    inletGtankA.toFront();
    inletGtankB.toFront();
    inletGtankC.toFront();

    setTimeout(() => {
       
        changeSensorToGreen("tankALSLL");       
        changeSensorToGreen("tankBLSLL");       
        changeSensorToGreen("tankCLSLL");
        
    }, time * 2)
    
    
    setTimeout(() => {
        changeSensorToRed("tankALSHH");
        changeSensorToRed("tankBLSHH");
         changeSensorToRed("tankCLSHH");
        
    }, time * 4)
    
    
    setTimeout(() => {
    inletRtankA.toFront();
	inletRtankB.toFront();
	inletRtankC.toFront();
	}, time*4.5)
}

  
  // Random percentage of 3 tanks
  
   var receipeLabel = paper.text((x+870),(y+5)," RECEIPE ").attr({
    font: "20px Arial", fill: "#2d2e2d","font-family":"digital-clock-font","font-weight": "bold",opacity: 0}).toFront();
  
  var randomAPercentage = Math.floor(Math.random() * (98 - 60 + 1)) + 60;  
   
		  if(randomAPercentage%2==0){
			randomAPercentage = randomAPercentage
		}else{
			console.log("else Previous "+randomAPercentage);
			randomAPercentage = parseInt(randomAPercentage)-parseInt(1);
		}
  var tankATextReleasePer = paper.text((x+870),(y+40)," Tank A : "+randomAPercentage+" %").attr({
    font: "20px Arial", fill: tankAcolor,"font-family":"digital-clock-font","font-weight": "bold",opacity: 0}).toFront();
   
  var randomBPercentage = Math.floor(Math.random() * (98 - 60 + 1)) + 60;
  
             if(randomBPercentage%2==0){
			randomBPercentage = randomBPercentage
		}else{
			console.log("else Previous "+randomBPercentage);
			randomBPercentage = parseInt(randomBPercentage)-parseInt(1);
		}
    
  var tankBTextReleasePer = paper.text((x+870),(y+70)," Tank B : "+randomBPercentage+" %").attr({
    font: "20px Arial", fill: tankCcolor,"font-family":"digital-clock-font","font-weight": "bold",opacity: 0}).toFront(); 
  
  var randomCPercentage = Math.floor(Math.random() * (98 - 60 + 1)) + 60;  
    
     if(randomCPercentage%2==0){
			randomCPercentage = randomCPercentage
		}else{
			console.log("else Previous "+randomCPercentage);
			randomCPercentage = parseInt(randomCPercentage)-parseInt(1);
		}
     
  var tankCTextReleasePer = paper.text((x+870),(y+100)," Tank C : "+randomCPercentage+" %").attr({
    font: "20px Arial", fill: tankBcolor,"font-family":"digital-clock-font","font-weight": "bold",opacity: 0}).toFront();
    
    var finalA = 0;
    var finalB = 0;
    var finalC = 0;
    
     finalA = parseInt(randomAPercentage/2);
      console.log(finalA);
     
     finalB = parseInt(randomBPercentage/2);
      console.log(finalB);
      
     finalC = parseInt(randomCPercentage/2);
      console.log(finalC); 
    
 //After tankC

 var tankCAfterFlow = paper.path("M"+(x+565)+" "+(y+140)+" l 0 50 l -140 0 l 0 85 ").attr({
			   stroke: "#000", // Light gray for a metallic outline
	    "stroke-width": 9
	   ,"stroke-linejoin": "round"
			});
//   
 var tankCAfterFlowW = paper.path("M"+(x+565)+" "+(y+140)+" l 0 50 l -140 0 l 0 85 ").attr({
			   stroke: "#fff", // Light gray for a metallic outline
	    "stroke-width": 6.5
	   ,"stroke-linejoin": "round"
			});
 
 
   var tankCAngleOpen = paper.image("images/angleValveOpen.png", (x+555), (y+153), 40, 25);			
 var tankCAngleClose = paper.image("images/angleValveClose.png", (x+555), (y+153), 40, 25);

 			
 //After tankB

 var tankBAfterFlow = paper.path("M"+(x+405)+" "+(y+140)+" l 0 130").attr({
			   stroke: "#000", // Light gray for a metallic outline
	    "stroke-width": 9
	   ,"stroke-linejoin": "round"
			});
   
 var tankBAfterFlowW = paper.path("M"+(x+405)+" "+(y+140)+" l 0 130").attr({
			   stroke: "#fff", // Light gray for a metallic outline
	    "stroke-width": 6.5
	   ,"stroke-linejoin": "round"
			});			
			
  	var tankBAngleOpen = paper.image("images/angleValveOpen.png", (x+395), (y+153), 40, 25);			
    var tankBAngleClose = paper.image("images/angleValveClose.png", (x+395), (y+153), 40, 25);
 	
  //After tankA

 var tankAAfterFlow = paper.path("M"+(x+230)+" "+(y+140)+" l 0 50 l 60 0 l 0 85 ").attr({
			   stroke: "#000", // Light gray for a metallic outline
	    "stroke-width": 9
	   ,"stroke-linejoin": "round"
			});
   
 var tankAAfterFlowW = paper.path("M"+(x+230)+" "+(y+140)+" l 0 50 l 60 0 l 0 85 ").attr({
			   stroke: "#fff", // Light gray for a metallic outline
	    "stroke-width": 6.5
	   ,"stroke-linejoin": "round"
			});
	
  var tankAAngleOpen = paper.image("images/angleValveOpen.png", (x+220), (y+153), 40, 25);			
  var tankAAngleClose = paper.image("images/angleValveClose.png", (x+220), (y+153), 40, 25);
	
	var strMotorOn = paper.image("images/mototStrOn.png", (x+312), (y+172), 110, 120);
	var strMotorOff = paper.image("images/mototStrOff.png", (x+312), (y+172), 110, 120);
	
	//load cell	
	var loadCellRod = paper.image("images/LCHanger.png", (x+300), (y+182), 50, 85);
	
	var loadCell = paper.image("images/loadCellBatch1.png", (x+296), (y+205), 50, 37);
	
	
	
	var jacketFillRect;	

 //jacket
				
//				var rectX = x + 240, rectY = y + 330, rectWidth = 250, rectHeight = 200, cornerRadius = 20;
//				
//				// Path for the rectangle with sharp top corners and rounded bottom corners
//				var jacketRectPathBlue = paper.path(
//				    `M${rectX},${rectY} h${rectWidth} v${rectHeight - cornerRadius} 
//				     a${cornerRadius},${cornerRadius} 0 0 1 -${cornerRadius},${cornerRadius} 
//				     h${-(rectWidth - 2 * cornerRadius)} 
//				     a${cornerRadius},${cornerRadius} 0 0 1 -${cornerRadius},-${cornerRadius} 
//				     v${-(rectHeight - cornerRadius)} z`
//				).attr({
//				    fill: "180-#99ccff-#cce5ff",
//				    stroke: "#555353",
//				    "stroke-width": 1.5
//				});

 
 var rectX = x + 240,
    rectY = y + 330,
    rectWidth = 250,
    rectHeight = 200,
    cornerRadius = 20;

// Path for the rectangle with sharp top corners and rounded bottom corners
var jacketRectPathBlue = paper.path(
    `M${rectX},${rectY} h${rectWidth} v${rectHeight - cornerRadius} 
     a${cornerRadius},${cornerRadius} 0 0 1 -${cornerRadius},${cornerRadius} 
     h${-(rectWidth - 2 * cornerRadius)} 
     a${cornerRadius},${cornerRadius} 0 0 1 -${cornerRadius},-${cornerRadius} 
     v${-(rectHeight - cornerRadius)} z`
).attr({
    fill: "180-#99ccff-#cce5ff", // Starting gradient
    stroke: "#555353",
    "stroke-width": 1.5
});




// Function to animate color transition to red
function jacketHeater(duration) {
    // Start and end gradients
    var startGradient = "#cce5ff";
     var endGradient = "#db6e6e";
//    var endGradient = "50-#debaba-#cf5555";
 
    // Ensure the path starts with the initial gradient
    jacketRectPathBlue.attr({ fill: startGradient });

    // Animate the gradient fill
    jacketRectPathBlue.animate(
        { fill: endGradient }, // Target attributes
        duration,              // Duration of animation (in milliseconds)
        "<>"                   // Easing function for smooth transition
        
    );
    
  
   
}

function jacketHeaterSecond(duration) {
    // Start and end gradients
    var startGradient = "#db6e6e";
     var endGradient = "#ff7a7a";
//    var endGradient = "50-#debaba-#cf5555";
 
    // Ensure the path starts with the initial gradient
    jacketRectPathBlue.attr({ fill: startGradient });

    // Animate the gradient fill
    jacketRectPathBlue.animate(
        { fill: endGradient }, // Target attributes
        duration,              // Duration of animation (in milliseconds)
        "<>"                   // Easing function for smooth transition
        
    );
    
  
   
}

function jacketHeater5Second(duration) {
    // Start and end gradients
    var startGradient = "#e8a7a7";
     var endGradient = "#db6e6e";
//    var endGradient = "50-#debaba-#cf5555";
 
    // Ensure the path starts with the initial gradient
    jacketRectPathBlue.attr({ fill: startGradient });

    // Animate the gradient fill
    jacketRectPathBlue.animate(
        { fill: endGradient }, // Target attributes
        duration,              // Duration of animation (in milliseconds)
        "<>"                   // Easing function for smooth transition
        
    );
    
  
   
}


function jacketHeaterSlowCool(duration) {
    // Start and end gradients
    var startGradient = "#db6e6e";
     var endGradient = "#e8a7a7";
//    var endGradient = "50-#debaba-#cf5555";
 
    // Ensure the path starts with the initial gradient
    jacketRectPathBlue.attr({ fill: startGradient });

    // Animate the gradient fill
    jacketRectPathBlue.animate(
        { fill: endGradient }, // Target attributes
        duration,              // Duration of animation (in milliseconds)
        "<>"                   // Easing function for smooth transition
        
    );
    
  
   
}



function jacketCooling(duration) {
    // Start and end gradients
    var startGradient = "#db6e6e";
     var endGradient = "#cce5ff";
//    var endGradient = "50-#debaba-#cf5555";
 
    // Ensure the path starts with the initial gradient
    jacketRectPathBlue.attr({ fill: startGradient });

    // Animate the gradient fill
    jacketRectPathBlue.animate(
        { fill: endGradient }, // Target attributes
        duration,              // Duration of animation (in milliseconds)
        "<>"                   // Easing function for smooth transition
    );
}

// Start the heater with a duration of 5 seconds
//jacketCooling(time*5);

 
 
 //rectangle heating - 
 
 
// Animate the fade-out effect and transition to the red gradient
//jacketHeater();
// function jacketHeater(){
//	setTimeout(() => {
//		
//		jacketRectPathBlue.attr({
//				    fill: "50-#debaba-#cf5555",
//				    stroke: "#555353",
//				    "stroke-width": 1.5
//				});
//		
//	 },time*5)
//	
//}
 
 
 var jacketOutlineRectBase = paper.rect((x+264),(y+335-70),202,250,20).attr({
            fill: "180-#606060-#909090-#505050-#707070",
            stroke: "#505050",
            "stroke-width": 1.5
        });
        
 var jacketOutlinePath = paper.path("M"+(x+265)+" "+(y+350-60)+" l 0 200 l 200 0 l 0 -200 z").attr({
//	 fill: "180-#d4d4d4-#ffffff-#c0c0c0-#e0e0e0",
           fill: "#fff",
            stroke: "#000",
            "stroke-width": 0.5
        });
 
 
 //ttSensor
	
	var ttSensor = paper.image("images/ttSensor.png", (x+430), (y+205), 32, 206).toFront();
 
 // steam flow
 
  var steamPipe = paper.path("M"+(x+240)+" "+(y+340)+" l -50 0 l 0 120 l -170 0").attr({ stroke: "#000","stroke-width": 9,"stroke-linejoin": "round"})
  var steamPipe1 = paper.path("M"+(x+240)+" "+(y+340)+" l -50 0 l 0 120 l -170 0").attr({ stroke: "#fff","stroke-width": 6.5,"stroke-linejoin": "round"}) 
  
 
  var cv = paper.image("images/controlValve.png", (x + 50), (y + 405), 70, 70);
   
   var steamInit = 0;
//    steamFlow(); 
  function steamFlow(){
	
	var steamColor = "90-#ffb3b3-#fadfde";
	
	var steamFlow = paper.rect((x+21),(y+457.5),0,5.5	).attr({  "fill": steamColor, // Gradient: white to light pink to reddish
            opacity: 0.7,                      // Semi-transparent for a steam effect
            stroke: "none"   });
            
    var steamFlow1 = paper.rect((x+187),(y+462),5.5,0).attr({  "fill": steamColor, // Gradient: white to light pink to reddish
            opacity: 0.7,                      // Semi-transparent for a steam effect
            stroke: "none"   }).toFront();
    
    var steamFlow2 = paper.rect((x+187),(y+462-124.5),0,5.5).attr({  "fill": steamColor, // Gradient: white to light pink to reddish
            opacity: 0.7,                      // Semi-transparent for a steam effect
            stroke: "none"   }).toFront(); 
             cv.toFront(); 
             
             if(steamInit==0){
             incrementCv1Val(); 
             }else if(steamInit==1){
             incrementCv1Val5Per(); 
             jacketHeater5Second(time*4); 
             }else{
	        incrementCv1Val60Per();
	        jacketHeaterSecond(time*20);
//	          jacketHeater(time*20);
             }   
	          steamFlow.animate({ width: 170 }, (time/2),function(){

		      steamFlow1.animate({ height: 120, y: y + 342 }, (time/2),function(){
//			cv.toFront();
			steamFlow1.toFront();
			steamFlow2.animate({ width: 54 }, (time/2),function(){
				 setTimeout(() => { 
					condensetFlow();
				},time*2);
				
				
			})
      
		})
	})

}


//steamFlowRemove();

function steamFlowRemove(){
	
	var steamColorRemove = "#fff";
	
	var steamFlow = paper.rect((x+21),(y+457.5),0,5.5	).attr({  "fill": steamColorRemove, // Gradient: white to light pink to reddish
            opacity: 0.7,                      // Semi-transparent for a steam effect
            stroke: "none"   });
            
    var steamFlow1 = paper.rect((x+187),(y+462),5.5,0).attr({  "fill": steamColorRemove, // Gradient: white to light pink to reddish
            opacity: 0.7,                      // Semi-transparent for a steam effect
            stroke: "none"   }).toFront();
    
    var steamFlow2 = paper.rect((x+186.6),(y+462-124.5),0,5.5).attr({  "fill": steamColorRemove, // Gradient: white to light pink to reddish
            opacity: 0.7,                      // Semi-transparent for a steam effect
            stroke: "none"   }).toFront(); 
           cv1Percent.attr({ text: "0" }); 
            cv.toFront();       
	          steamFlow.animate({ width: 170.2 }, (time/2),function(){
//		        steamFlow.toFront();
		        cv.toFront();
		      steamFlow1.animate({ height: 122, y: y + 340 }, (time/2),function(){
			steamFlow1.toFront();
			steamFlow2.animate({ width: 54 }, (time/2),function(){
			cv1Percent.attr({ text: "0" });
			    
                   setTimeout(() => { 
					condensetFlowRemove();
				},time);
 
			})
		})
	})

}

 //to bottle filling plant text
  
  var outPutBox = paper.text((x+375),(y+580),"TO BOTTLE FILLING PLANT").attr({
    font: "20px Arial", fill :"90-#455a99-#606662-#395199-#E3F2FD","font-weight": "bold"})
  
 //cold water 
  
  var coldWater = paper.path("M"+(x+490)+" "+(y+340)+" l 50 0 l 0 120 l 170 0").attr({ stroke: "#000","stroke-width": 9,"stroke-linejoin": "round"})
  var coldWater1 = paper.path("M"+(x+490)+" "+(y+340)+" l 50 0 l 0 120 l 170 0").attr({ stroke: "#fff","stroke-width": 6.5,"stroke-linejoin": "round"}) 
   
  var cv1 = paper.image("images/controlValve.png", (x + 580), (y + 405), 70, 70);
  
//  coldWaterFlow();
  var coldWaterFlg = 0;
  
  function coldWaterFlow(){
//	var waterColor = "90-#29b6f6-#0288d1-#b3e5fc";
       var waterColor = "90-#2196F3-#64B5F6-#BBDEFB-#E3F2FD";
	var water = paper.rect((x+711),(y+457),0,5.5).attr({
    fill: waterColor, // Blue color for water
    stroke: "none" // No border
     });
     
    var water1 = paper.rect((x+709-172),(y+460),5.5,0).attr({
    fill: waterColor, // Blue color for water
    stroke: "none" // No border
     }); 
     
    
    var water2 = paper.rect((x+543),(y+337),0,5.5).attr({
    fill: waterColor, // Blue color for water
    stroke: "none" // No border
     });  
     
		cv1.toFront();
		if(coldWaterFlg==0){ 
		incrementCv2Val();
		}else{
		incrementCv2100Val();
		 }
		water.animate({ width: 173 ,x: x + 537}, (time/2),function(){
//			jacketHeaterSlowCool(time*3);
			 water1.animate({ height: 122, y: y + 338 }, (time/2),function(){
				
				water2.animate({ width: 53 ,x: x + 490}, (time/2))
//				,function(){
//		      coldWaterFlowRemove();
//		})
	})
})

}
  
// coldWaterFlowRemove();
 function coldWaterFlowRemove(){
	
	 cv2Percent.attr({ text: "0" });
	
//	var waterColor = "90-#29b6f6-#0288d1-#b3e5fc";
       var waterColor = "#fff";
      
	var water = paper.rect((x+711),(y+457),0,5.5).attr({
    fill: waterColor, // Blue color for water
    stroke: "none" // No border
     });
     
    var water1 = paper.rect((x+709-172),(y+460),5.5,0).attr({
    fill: waterColor, // Blue color for water
    stroke: "none" // No border
     }); 
     
    
    var water2 = paper.rect((x+543),(y+337),0,5.5).attr({
    fill: waterColor, // Blue color for water
    stroke: "none" // No border
     });  
     
		cv1.toFront();
		
		water.animate({ width: 173 ,x: x + 537}, (time/2),function(){
			 water1.animate({ height: 123, y: y + 337 }, (time/2),function(){
				water2.animate({ width: 53 ,x: x + 490}, (time/2))
		   
		
	})
})

}
  
  
  
  //condensate
  
   var condensate = paper.path("M"+(x+490)+" "+(y+500)+" l 220 0 l 0 20 ").attr({ stroke: "#000","stroke-width": 9,"stroke-linejoin": "round"})
  var condensate1 = paper.path("M"+(x+490)+" "+(y+500)+" l 220 0 l 0 20").attr({ stroke: "#fff","stroke-width": 6.5,"stroke-linejoin": "round"}) 
//    var condensate2 = paper.path("M"+(x+490+220)+" "+(y+500)+" l 0 30").attr({ stroke: "#000","stroke-width": 9,"stroke-linejoin": "round"})
     

//  condensetFlow();
  
  function condensetFlow(){
   
   var condensateColor = "50-#edab79-#e0bea4";	
	
//	var condensateColor = "90-#4590d9-#f0b181-#e69455";
	 var condensateRect = paper.rect((x+490),(y+497),0,5.5).attr({
    fill: condensateColor, // Blue color for water
    stroke: "none" // No border
     });
	
	 var condensateRect1 = paper.rect((x+490.2+216.9),(y+497),6,0).attr({
    fill: condensateColor, // Blue color for water
    stroke: "none" // No border
     });
	
	condensateRect.animate({ width: 223}, (time),function()
	{
		condensateRect1.animate({ height: 22}, (time))
	})
	
}

//condensetFlowRemove();
 function condensetFlowRemove(){
	var condensateColor = "#fff";
	 var condensateRect = paper.rect((x+490),(y+497),0,5.5).attr({
    fill: condensateColor, // Blue color for water
    stroke: "none" // No border
     });
	
	 var condensateRect1 = paper.rect((x+490.2+216.9),(y+497),5.5,0).attr({
    fill: condensateColor, // Blue color for water
    stroke: "none" // No border
     });
	
	condensateRect.animate({ width: 222}, (time/2),function()
	{
		condensateRect1.animate({ height: 21}, (time/2))
	})
	
}


  //container
  container1(x-53,y+24);
  
  
  function container1(x,y){
    var cont1Top = paper.ellipse(x + 766, y + 500, 30, 6).attr({ "stroke": "#948d84" }).toFront();
    
 
    var contOutLine = paper.path(
			  "M" + (x + 736) + " " + (y + 500) + // Move to the starting point
			  " l 0 55 l 60 0 l 0 -55" +          // Draw the rectangular outline
			  " A30,6 0 0,0 " + (x + 736) + " " + (y + 500) // Add the arc from right to left
			).attr({
			  stroke: "#948d84", // Set stroke color
			  fill: "90-#d7d9d7-#b0b2b6-#8d8f93-#f8f9f8"       // Ensure no fill for the shape
			});
     var rectCont2 = paper.rect(x+730, y+545,72,18,5).attr({fill: "90-#d7d9d7-#b0b2b6-#8d8f93-#f8f9f8", 
         stroke: "#8d8f93", }).toFront();
//	var cycloneBottom1 = paper.ellipse(x + 766, y + 448, 30, 6).attr({ "stroke": "#b6a68e" }).toFront();
    }
  
  //hot water
  
   var hotWater = paper.path("M"+(x+240)+" "+(y+500)+" l -220 0 l 0 20 ").attr({ stroke: "#000","stroke-width": 9,"stroke-linejoin": "round"})
  var hotWater1 = paper.path("M"+(x+240)+" "+(y+500)+" l -220 0 l 0 20 ").attr({ stroke: "#fff","stroke-width": 6.5,"stroke-linejoin": "round"}) 
  
  container1(x-748,y+24);
  
//  hotWaterFlow();
  
  function hotWaterFlow(){
	var hotWaterColor = "90-#FA7D57-#AED9F2";
	
	var hotWaterRect = paper.rect((x+240),(y+497),0,5.5).attr({
    fill: hotWaterColor, // Blue color for water
    stroke: "none" // No border
     });
     
     var hotWaterRect1= paper.rect((x+17.2),(y+497),5.5,0).attr({
    fill: hotWaterColor, // Blue color for water
    stroke: "none" // No border
     });
     
     hotWaterRect.animate({ width: 220 ,x: x + 20}, (time),function(){
	   hotWaterRect1.animate({ height: 20.4}, (time))
     });
}	
  
//  hotWaterFlowRemove();
  function hotWaterFlowRemove(){
	var hotWaterColor = "#fff";
	
	var hotWaterRect = paper.rect((x+240),(y+497),0,5.5).attr({
    fill: hotWaterColor, // Blue color for water
    stroke: "none" // No border
     });
     
     var hotWaterRect1= paper.rect((x+17),(y+497),5.5,0).attr({
    fill: hotWaterColor, // Blue color for water
    stroke: "none" // No border
     });
     
     hotWaterRect.animate({ width: 220 ,x: x + 20}, (time),function(){
	   hotWaterRect1.animate({ height: 20.4}, (time))
	  
     });
}
  
  
//  // outPipe
//  
//  var outPipe = paper.path("M"+(x+365)+" "+(y+515)+" l 0 50").attr({ stroke: "#000","stroke-width": 15,"stroke-linejoin": "round"})
//    var outPipe1 = paper.path("M"+(x+365)+" "+(y+515)+" l 0 51").attr({ stroke: "#fff","stroke-width": 11,"stroke-linejoin": "round"})

 
  
   var tank_px2 = 0;
//   tankCEmpty();
   function tankCEmpty(){
//	var time = 1000;
//     console.log("time"+time);
	   var Tank_arrAE = [];
	   
	    tank_px2 = randomBPercentage/2;
//	   console.log("randomCPercentage "+randomBPercentage);
	   
	   var tankBEmp = paper.path('M' + (x + 430) + ' ' + (y + 39)+" l 0 0 ").attr({"stroke":"#fff","stroke-width":99})
	   tankBEmp.animate(
	    { path: 'M' + (x + 430) + ' ' + (y + 39) + ' l 0 '+randomBPercentage }, 
	    time*6);
	    
	    tankBAngleOpen.toFront();
		Tank_arrAE[0] = paper.path('M' + (x + 405) + ' ' + (y + 176	) + ' l 0 0').attr({ stroke: tankCcolor, 'stroke-width': 6.1,'opacity':0.9 });
	   Tank_arrAE[0].animate(
	    { path: 'M' + (x + 405) + ' ' + (y + 176) + ' l 0 89' },
	    time*3,function(){
		   
            
               mixtureFill();
//               feedingTanks();
               setTimeout(() => {
				    Tank_arrAE.forEach(tank => tank.attr({ "stroke": "#fff" })); // Apply stroke color to all tanks
				    tankBAngleClose.toFront();
				     
//				    feedingTanks();
				}, time * 3);
          transitionGradient();
       
	})
	       

	   tank(x+380,y+ 140);
	   tankCEmptyPer();
	   tankCEmptyLit();
	
	   
}

// Define the interval globally to reference in other functions
var dataArr = [];
	
function getValues() {
   // Array to store the JSON objects
   dataInterval = setInterval(() => {
    // Get the current text values
    const temptt = parseInt(tempVal.attr("text")) || 0;
    const cv1Value = parseInt(cv1Percent.attr("text")) || 0;
    const cv2Value = parseInt(cv2Percent.attr("text")) || 0;
    const totWtValue = parseInt(totWt.attr("text")) || 0;

    // Create a JSON object with the current values
    let dataObj = {
	  temp:temptt,
      cv1: cv1Value,
      cv2: cv2Value,
      totalWeight: totWtValue,
      strStatus: strValue,
      strStatusOnOff : strStatus
    };
  
       $("#temp").text(dataObj.temp);
       $("#cv1").text(dataObj.cv1);
       $("#cv2").text(dataObj.cv2);
       
       $("#wt").text(dataObj.totalWeight);
       $("#strSt").text(dataObj.strStatusOnOff);
       
//       console.log(totWtValue);
    // Store the object in the array
    dataArr.push(dataObj);

//    console.log("Data stored:", dataArr);

  }, (time/1.4)); // Interval of 5 seconds
}
 


   stopSavingValues =  function () {
  if (dataInterval) {
    clearInterval(dataInterval);
    console.log("Saving values stopped.");
  } else {
    console.log("No active interval to stop.");
  }
}

  function mixtureFill() {
  // Jacket Filling
  var finalHeight = tank_px1 + tank_px2 + tank_px; // Calculate the final height
  finalHeight = parseInt(finalHeight);

  if (finalHeight > 50) {
    setTimeout(resumeGif, time); // Resume the GIF with a delay
  }

  totalWeightInterval();

  jacketFillRect = paper
    .rect(x + 264, y + 490, 202, 0)
    .attr({
      fill: "20-" + tankAcolor + tankBcolor + tankCcolor,
      opacity: 0.1,
      stroke: "none",
    });

  ttSensor.toFront();
  
 
  
  jacketFillRect.animate(
    { height: finalHeight, y: y + 490 - finalHeight },
    time * 3,
    function () {
      cv.toFront();
      
      // Sequential execution of functions using setTimeout
      setTimeout(() => {
	      
	       tankATextReleasePer.attr({ opacity: 0 });
				     tankBTextReleasePer.attr({ opacity: 0 });
				     tankCTextReleasePer.attr({ opacity: 0 });
				     receipeLabel.attr({ opacity: 0 });
	      
        steamFlow(); // First action
        setTimeout(() => {
          jacketHeater(time * 12); // Second action
          setTimeout(() => {
            temperatureControl(); // Third action
//            setTimeout(() => {
//	         condensetFlow();
//	        }, time*3);
          }, time*3); // Delay for the third action
        }, time); // Delay for the second action
      }, time); // Delay for the first action
    }
  );
  
  strRod.toFront();
  staticImagePath.toFront();
}

 
  function tankCEmptyPer(){
	
	var finalBRemain = 100 - randomBPercentage;
     tankBPercent = 100; // Start at 100
    let targetPercent = finalBRemain; // Decrement down to 50
    let currentPercent = tankBPercent; // Initialize current percent to 100

    let intervalDuration = (time*6) / (tankBPercent - targetPercent); // Calculate interval duration

    // Set up the interval
    let interval = setInterval(() => {
        // Update the text with the current percentage
        tankCText.attr({ text: currentPercent + " %" }).toFront();

        // Decrement the current percentage
        currentPercent--;

        // Stop the interval once the target percentage is reached
        if (currentPercent < targetPercent) {
            clearInterval(interval);
        }
    }, intervalDuration);
}
   
 
 function tankCEmptyLit(){
	var finalBRemain = 100 - randomCPercentage;
     tankAPercent = 50; // Start at 100
     
     var litMapping = finalBRemain/2;
     litMapping = parseInt(litMapping)
//     console.log(" litMapping : "+litMapping);
    let targetPercent = litMapping; // Decrement down to 50
    let currentPercent = tankAPercent; // Initialize current percent to 100

    let intervalDuration = (time*6) / (tankAPercent - targetPercent); // Calculate interval duration

    // Set up the interval
    let interval = setInterval(() => {
        // Update the text with the current percentage
        tCText.attr({ text: currentPercent  }).toFront();

        // Decrement the current percentage
        currentPercent--;

        // Stop the interval once the target percentage is reached
        if (currentPercent < litMapping) {
            clearInterval(interval);
        }
    }, intervalDuration);
}
 
   var tank_px1 = 0;   
   
//   tankBEmpty();
   function tankBEmpty(){
//	var time = 1000;
//     console.log("time"+time);

      

	   var Tank_arrAE = [];
	   
	    tank_px1 = randomCPercentage/2;
//	   console.log("randomCPercentage "+randomCPercentage);
	  ttSensor.toFront();
	   var tankBEmp = paper.path('M' + (x + 600) + ' ' + (y + 39)+" l 0 0 ").attr({"stroke":"#fff","stroke-width":99})
	   tankBEmp.animate(
	    { path: 'M' + (x + 600) + ' ' + (y + 39) + ' l 0 '+randomCPercentage }, 
	    time*6);
	    
	    tankCAngleOpen.toFront();
		Tank_arrAE[0] = paper.path('M' + (x + 565) + ' ' + (y + 175) + ' l 0 0').attr({ stroke: tankBcolor, 'stroke-width': 6.1,'opacity':0.9 });
	   Tank_arrAE[0].animate(
	    { path: 'M' + (x + 565) + ' ' + (y + 175) + ' l 0 16' },
	    time,function(){
	  
		  Tank_arrAE[1] = paper.path('M' + (x + 567) + ' ' + (y + 175+15) + ' l 0 0 ').attr({ stroke: tankBcolor, 'stroke-width': 6.1,'opacity':0.9 });
	   Tank_arrAE[1].animate(
	    { path: 'M' + (x + 567) + ' ' + (y + 175+15) + ' l -143 0 ' },
	    time,function(){
	       
	        Tank_arrAE[2] = paper.path('M' + (x + 567-142) + ' ' + (y + 175+12) + ' l 0 0 ').attr({ stroke: tankBcolor, 'stroke-width': 6.1,'opacity':0.9 });
	   Tank_arrAE[2].animate(
	    { path: 'M' + (x + 567-142) + ' ' + (y + 175+12) + ' l 0 78 ' },
	    time,function(){
		     
		     setTimeout(() => {
				    Tank_arrAE.forEach(tank => tank.attr({ "stroke": "#fff" })); // Apply stroke color to all tanks
				    tankCAngleClose.toFront();
				}, time * 3);

	})
	       })
		    
		 }) 
  
	   tank(x+550,y+ 140);
	   tankBEmptyPer();
	   tankBEmptyLit();
}

 
  function tankBEmptyPer(){
	var finalCRemain = 100 - randomCPercentage;
     tankCPercent = 100; // Start at 100
    let targetPercent = finalCRemain; // Decrement down to 50
    let currentPercent = tankCPercent; // Initialize current percent to 100

    let intervalDuration = (time*6) / (tankCPercent - targetPercent); // Calculate interval duration

    // Set up the interval
    let interval = setInterval(() => {
        // Update the text with the current percentage
        tankBText.attr({ text: currentPercent + " %" }).toFront();

        // Decrement the current percentage
        currentPercent--;

        // Stop the interval once the target percentage is reached
        if (currentPercent < targetPercent) {
            clearInterval(interval);
        }
    }, intervalDuration);
}
   
   
   function tankBEmptyLit(){
	var finalBRemain = 100 - randomBPercentage;
     tankAPercent = 50; // Start at 100
     
     var litMapping = finalBRemain/2;
     litMapping = parseInt(litMapping)
//     console.log(" litMapping : "+litMapping);
    let targetPercent = litMapping; // Decrement down to 50
    let currentPercent = tankAPercent; // Initialize current percent to 100

    let intervalDuration = (time*6) / (tankAPercent - targetPercent); // Calculate interval duration

    // Set up the interval
    let interval = setInterval(() => {
        // Update the text with the current percentage
        tBText.attr({ text: currentPercent  }).toFront();

        // Decrement the current percentage
        currentPercent--;

        // Stop the interval once the target percentage is reached
        if (currentPercent < litMapping) {
            clearInterval(interval);
        }
    }, intervalDuration);
}
   
  var tank_px = 0;
  
  function tankAEmpty(){
//	var time = 1000;
//     console.log("time"+time);
	   var Tank_arrAE = [];
	   
	    tank_px = randomAPercentage/2;
	   
//        jacketOutlinePath.attr({"fill":"#fff"});
        
	   var tankAEmp = paper.path("M"+(x+260)+" "+(y+38)+" l 0 0 ").attr({"stroke":"#fff","stroke-width":99})
	   tankAEmp.animate(
	    { path: 'M' + (x + 260) + ' ' + (y + 38) + ' l 0 '+randomAPercentage }, 
	    time*6);
	    tankAAngleOpen.toFront();
		Tank_arrAE[0] = paper.path('M' + (x + 230) + ' ' + (y + 175) + ' l 0 0').attr({ stroke: tankAcolor, 'stroke-width': 6.1,'opacity':0.9 });
	   Tank_arrAE[0].animate(
	    { path: 'M' + (x + 230) + ' ' + (y + 175) + ' l 0 16' },
	    time,function(){
		  
		  Tank_arrAE[1] = paper.path('M' + (x + 227.5) + ' ' + (y + 175+15) + ' l 0 0 ').attr({ stroke: tankAcolor, 'stroke-width': 6.1,'opacity':0.9 });
	   Tank_arrAE[1].animate(
	    { path: 'M' + (x + 227.5) + ' ' + (y + 175+15) + ' l 65 0 ' },
	    time,function(){
		    
		    Tank_arrAE[2] = paper.path('M' + (x + 227.5+62.5) + ' ' + (y + 175+14) + ' l 0 0 ').attr({ stroke: tankAcolor, 'stroke-width': 6.1,'opacity':0.9 });
	   Tank_arrAE[2].animate(
	    { path: 'M' + (x + 227.5+62.5) + ' ' + (y + 175+14) + ' l 0 76 ' },
	    time,function(){
		       
		     setTimeout(() => {
				    Tank_arrAE.forEach(tank => tank.attr({ "stroke": "#fff" })); // Apply stroke color to all tanks
				    tankAAngleClose.toFront();
				}, time * 3);
		      
		        
//		         Tank_arrAE[3] = paper.path('M' + (x + 365) + ' ' + (y + 490) + ' l 0 0 ').attr({ stroke: tankAcolor, 'stroke-width': 201,'opacity':0.9 });
//	   Tank_arrAE[3].animate(
//	    { path: 'M' + (x + 365) + ' ' + (y + 490) + ' l 0 -'+tank_px+' ' },
//	    time*3,function(){
//		        tankAAngleClose.toFront();
//		        Tank_arrAE[0].attr({"stroke":"#fff"});
//		        Tank_arrAE[1].attr({"stroke":"#fff"});
//		        Tank_arrAE[2].attr({"stroke":"#fff"});
//	})
		      
	       })
		    
		 }) 
	})
	  
	    
	   
	   tank(x+ 210,y+ 140);
	   tankAEmptyPer();
	   tankAEmptyLit();
}

 var finalARemain = 0;
  function tankAEmptyPer(){
	 finalARemain = 100 - randomAPercentage;
     tankAPercent = 100; // Start at 100
    let targetPercent = finalARemain; // Decrement down to 50
    let currentPercent = tankAPercent; // Initialize current percent to 100

    let intervalDuration = (time*6) / (tankAPercent - targetPercent); // Calculate interval duration

    // Set up the interval
    let interval = setInterval(() => {
        // Update the text with the current percentage
        tankAText.attr({ text: currentPercent + " %" }).toFront();

        // Decrement the current percentage
        currentPercent--;

        // Stop the interval once the target percentage is reached
        if (currentPercent < targetPercent) {
            clearInterval(interval);
        }
    }, intervalDuration);
}

//   tankAEmptyLit();
   function tankAEmptyLit(){
	 finalARemain = 100 - randomAPercentage;
     tankAPercent = 50; // Start at 100
     
     var litMapping = finalARemain/2;
     litMapping = parseInt(litMapping)
     console.log(" litMapping : "+litMapping);
    let targetPercent = litMapping; // Decrement down to 50
    let currentPercent = tankAPercent; // Initialize current percent to 100

    let intervalDuration = (time*6) / (tankAPercent - targetPercent); // Calculate interval duration

    // Set up the interval
    let interval = setInterval(() => {
        // Update the text with the current percentage
        tAText.attr({ text: currentPercent  }).toFront();

        // Decrement the current percentage
        currentPercent--;

        // Stop the interval once the target percentage is reached
        if (currentPercent < litMapping) {
            clearInterval(interval);
        }
    }, intervalDuration);
}
	

// stirrer

	var strRod = paper.path('M' + (x + 368) + ' ' + (y + 290) + ' l 0 100 ').attr({ stroke: "#5c5650", 'stroke-width': 4 }).toFront();

//  var gifPath = "images/stirrer.gif"; // Path to the GIF

//var gifPath = "images/st1.gif"; // Path to the GIF

      
      
// Add the GIF to the canvas
//var gif = paper.image(gifPath, (x + 331), (y + 385), 75, 95).attr({ opacity: 1 });

// var staticImagePath = paper.image("images/stirrer_frame1.png", (x + 303), (y + 282), 140, 215).attr({ opacity: 1 }).toBack();


var staticImagePath = paper.image("images/stirrer_frame1.png", (x + 305.5), (y + 282), 135, 215).attr({ opacity: 1 }).toBack();
var gif1; // Declare gif1 outside for both functions to use it

// Function to pause the GIF (replace it with a static image)
pauseGif();

function pauseGif() {
	
	 strValue = 0;
    strStatus = "OFF";
	
    if (gif1) {
        gif1.remove(); // Hide the GIF by removing it
        gif1 = null;  // Set gif1 to null to ensure proper cleanup
    }
    staticImagePath.toFront();
    strMotorOff.toFront();
    staticImagePath.attr({ stroke: "none" });
   
}
//resumeGif();
// Function to resume the GIF (reload the GIF)

var strValue = 0;
var strStatus = "OFF";
function resumeGif() {
	 strStatus = "ON";
    strValue = 1;
    strMotorOn.toFront();
    staticImagePath.toBack();
    
    
    gif1 = paper.image("images/stirrer.gif", (x + 331), (y + 385), 75, 95).attr({ opacity: 1 });
}


 
 // temperature control code
   
   var tempRect = paper.rect((x+480),(y+220),50,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})

 var tempVal = paper.text((x + 504), (y+233), "22").attr({ 'font-size': 18, "font-family":"digital-clock-font","fill":"#07f74f","font-weight":"bold" });
 
 var tempText = paper.text((x+545),(y+233.5)," \u00B0C").attr({font: "15px Arial", fill :"#034f1a","font-weight": "bold"})
 
  var tempArr = [];
  var jsn1 = {};
  //cv1 textBox
   
   var cv1Rect = paper.rect((x+115),(y+410),50,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})
   var cv1RecttUnit = paper.text((x+176	),(y+423)," % ").attr({
    font: "15px Arial", stroke :"#034f1a"})
  
    var cv1Percent = paper.text((x+140),(y+423),"0").attr({
    font: "20px Arial", fill: "#07f74f","font-family":"digital-clock-font","font-weight": "bold"}).toFront();
   
  
  
  //cv1 textBox
   
   var cv2Rect = paper.rect((x+646),(y+410),50,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})
   var cv2RecttUnit = paper.text((x+710	),(y+423)," % ").attr({
    font: "15px Arial", stroke :"#034f1a"})
   
  var cv2Percent = paper.text((x+670),(y+423),"0").attr({
    font: "20px Arial", fill: "#07f74f","font-family":"digital-clock-font","font-weight": "bold"}).toFront(); 
   
   var randomNumberTemp1Dec = 0
   
   
   function incrementCv2Val() {
	
	const randomNumber = Math.floor(Math.random() * (20 - 15 + 1)) + 15;
	
  let value = 0; // Start value
  const targetValue = randomNumber; // Target value
  const incrementInterval = time/4; // Interval in ms for each increment
  const incrementStep = 1; // Increment step for each interval

  // Interval to update the value
  const intervalId = setInterval(() => {
    if (value < targetValue) {
      value += incrementStep; // Increment the value
      cv2Percent.attr({ text: value }); // Update the display
    } else {
      clearInterval(intervalId); // Stop the interval when the target is reached
    }
  }, incrementInterval);
}


  function incrementCv2100Val() {
  let value = 0; // Start value
  const targetValue = 100; // Target value
  const incrementInterval = time / 5; // Interval in ms for each increment
  const incrementStep = 1; // Increment step for each interval

  // Interval to update the value
  const intervalId = setInterval(() => {
    if (value < targetValue) {
      value += incrementStep; // Increment the value
      cv2Percent.attr({ text: value }); // Update the display
    } else {
//      cv2Percent.attr({ text: "0" }); // Reset the display to 0
      clearInterval(intervalId); // Stop the interval
      
//      setTimeout(() => stopSavingValues(), time / 2); // Call stop function
    }
  }, incrementInterval);
}
 

    function incrementCv1Val() {
	
	
  let value = 0; // Start value
  const targetValue = 40; // Target value
  const incrementInterval = time/3; // Interval in ms for each increment
  const incrementStep = 1; // Increment step for each interval

  // Interval to update the value
  const intervalId = setInterval(() => {
    if (value < targetValue) {
      value += incrementStep; // Increment the value
      cv1Percent.attr({ text: value }); // Update the display
    } else {
      clearInterval(intervalId); // Stop the interval when the target is reached
    }
  }, incrementInterval);
}
   
    function incrementCv1Val5Per() {
	
	
  let value = 0; // Start value
  const targetValue = 5; // Target value
  const incrementInterval = time/2; // Interval in ms for each increment
  const incrementStep = 1; // Increment step for each interval

  // Interval to update the value
  const intervalId = setInterval(() => {
    if (value < targetValue) {
      value += incrementStep; // Increment the value
      cv1Percent.attr({ text: value }); // Update the display
    } else {
      clearInterval(intervalId); // Stop the interval when the target is reached
    }
  }, incrementInterval);
}
   
    function incrementCv1Val60Per() {
	
	
  let value = 0; // Start value
  const targetValue = 60; // Target value
  const incrementInterval = time/2.8; // Interval in ms for each increment
  const incrementStep = 1; // Increment step for each interval
   
  // Interval to update the value
  const intervalId = setInterval(() => {
    if (value < targetValue) {
      value += incrementStep; // Increment the value
      cv1Percent.attr({ text: value }); // Update the display
    } else {
      clearInterval(intervalId); // Stop the interval when the target is reached
    }
  }, incrementInterval);
   
   
}
   
   
   function incrementTo60(startTemp) {
  let currentTemp = startTemp;
  const incrementInterval = setInterval(() => {
    if (currentTemp < 60) {
      currentTemp++;
      tempVal.attr({ text: currentTemp }); // Update temperature display
//      console.log("Increasing Temperature: " + currentTemp);
    } else {
//      console.log("Temperature reached 60.");
      clearInterval(incrementInterval); // Stop when temperature reaches 60
//      pauseGif(); // Pause GIF if needed
      
        setTimeout(() => {
	                     
		               steamFlowRemove();
		               
		               }, time*3);
       
    }
  }, time);
}
   
   
  function decreaseToTemp2Dec(randomNumberTemp2, randomNumberTemp2Dec) {
//  console.log("Starting temperature decrease...");
//  console.log("randomNumberTemp2Dec: " + randomNumberTemp2Dec);

  // Start an interval to decrement the temperature
  const interval = setInterval(() => {
//    console.log("Current Temperature: " + randomNumberTemp2);
    tempVal.attr({ text: randomNumberTemp2 }); // Update temperature display every interval

    if (randomNumberTemp2 <= randomNumberTemp2Dec) {
//      console.log("Minimum temperature reached: " + randomNumberTemp2Dec);
      pauseGif(); // Pause GIF when minimum temperature is reached
      clearInterval(interval); // Stop the interval
      
      setTimeout(() => {
	               cv2Percent.attr({ text: "0" });
                coldWaterFlowRemove();
                 setTimeout(() => {
	             hotWaterFlowRemove();
	               setTimeout(() => {
		        steamInit = 1;
		           steamFlow();
		           resumeGif();
	               setTimeout(() => {
//		              resumeGif();
	               incrementTo60(randomNumberTemp2);
	                setTimeout(() => {
		               pauseGif();
		                 setTimeout(() => {
			              resumeGif(); 
			               setTimeout(() => {
				              pauseGif();
				               setTimeout(() => {
					            resumeGif();
					             setTimeout(() => {
						          pauseGif();
						           setTimeout(() => {
							        resumeGif();
							        coldWaterFlg = 1;
							         rnOff.toFront();
							         shOn.toFront();
							         coolProcess();
							         // cooling process
							         }, time*5);
						        }, time*5);
					          }, time*5);
				          }, time*5);
			           }, time*5);
		             }, time*5);
	                }, time*3);
	                }, time);
	             }, time*2);
              }, time*3);
    }

    randomNumberTemp2--; // Decrement the temperature
  }, time); // Adjust the interval time as needed (1000 ms = 1 second)
}
 
//  coolProcess();
  function coolProcess() {
	
  let temperature = 60; // Start at 60
  const minTemperature = 22; // Target temperature
 
     var r1 = paper.rect(x+210,y+233,50,30,50).attr({"fill":mixedColorRGB,"stroke-width":3,"stroke":"#2c2e2c"}); 
   finalShade.attr({opacity : 1});
    finalShade1.attr({opacity : 1});
     coldWaterFlow();
     
     setTimeout(() => { 
	jacketCooling(time*10);
	        hotWaterFlow();
      },time*2);
      
  // Start an interval to decrement the temperature
  const interval = setInterval(() => {
//    console.log(`Current Temperature: ${temperature}`);
    tempVal.attr({ text: temperature }); // Update temperature display (if applicable)
     finalProd.attr({opacity : 1});
    if (temperature <= minTemperature) {
      clearInterval(interval); // Stop the interval when the target is reached
//      console.log("Cooling process completed.");
     
      
        setTimeout(() => { 
	         
	         coldWaterFlowRemove();
	         cv2Percent.attr({ text: "0" });
	         $("#cv2").text("0");
	         $("#strSt").text("OFF");
	          strStatus = "OFF";
              strValue = 0;
              
	           setTimeout(() => {
	           hotWaterFlowRemove();
	        pauseGif();
	        
	        shOff.toFront();
	         setTimeout(() => {
	        stopSavingValues();
	         },time);
         },time*3);
      },time*2);
    } else {
      temperature--; // Decrease the temperature
      
    }
  }, time/2);
}

   
   
 let secondTemp = 40; // Start at 40
//cycleOd60Temp();
function cycleOd60Temp() {
  const randomNumberTemp2 = Math.floor(Math.random() * (64 - 62 + 1)) + 62; // Random number between 62 and 64
  const randomNumberTemp2Dec = Math.floor(Math.random() * (59 - 56 + 1)) + 56; // Random number between 56 and 59
//  console.log("randomNumberTemp2: " + randomNumberTemp2);

  const halfCycle = Math.round((randomNumberTemp2 + secondTemp) / 2); // Calculate the midpoint
  let isGifActive = false; // Track if GIF is currently active (resume or pause)

//  console.log("Half cycle at temperature: " + halfCycle);

  // Start an interval to simulate temperature changes
  const interval = setInterval(() => {
//    console.log("Current Temperature: " + secondTemp);
    tempVal.attr({ text: secondTemp }); // Update temperature display every interval

    // Check for first half and resume GIF
    if (secondTemp <= halfCycle && !isGifActive) {
//      console.log("Resuming GIF in the first half...");
      resumeGif(); // Call the resumeGif function
      isGifActive = true; // Update state to active
    }

    // Check for second half and pause GIF
    if (secondTemp > halfCycle && isGifActive) {
//      console.log("Pausing GIF in the second half...");
      pauseGif(); // Call the pauseGif function
      isGifActive = false; // Update state to inactive
    }

    // When temperature reaches or exceeds the maximum
    if (secondTemp >= randomNumberTemp2) {
//      console.log("Max temperature reached. Starting decrease...");
      pauseGif(); // Pause GIF at max temperature
      clearInterval(interval); // Stop the interval

      // Proceed with the rest of the flow
      setTimeout(() => {
        steamFlowRemove();
//         setTimeout(() => {
//	       condensetFlowRemove();
        setTimeout(() => {
          coldWaterFlow();
          jacketHeaterSlowCool(time*3);
          resumeGif(); // Resume GIF during cold water flow
          setTimeout(() => {
            decreaseToTemp2Dec(randomNumberTemp2, randomNumberTemp2Dec); // Start decreasing temperature
            setTimeout(() => {
//              console.log("Starting hotWaterFlow...");
              hotWaterFlow();
              
            }, time*2);
          }, time);
        }, time * 3);
//         }, time * 2);
      }, time * 2);
    }

    secondTemp++; // Increment the temperature
  }, time); // Adjust the interval time as needed (1000 ms = 1 second)
}




   
 function temperatureControl() {
	
  const randomNumberTemp1 = Math.floor(Math.random() * (44 - 42 + 1)) + 42;
  const randomNumberTemp1Dec = Math.floor(Math.random() * (39 - 36 + 1)) + 36;

//  console.log("randomNumberTemp1Dec " + randomNumberTemp1Dec);

  let i = 22; // Start temperature
  let halfCycle = Math.round((randomNumberTemp1 + i) / 2); // Calculate half-cycle point
  let isGifActive = false; // Track whether the GIF is active
  let tempDiff = randomNumberTemp1 - randomNumberTemp1Dec; // Calculate initial tempDiff
  tempDiff = parseInt(tempDiff);

  const intervalId = setInterval(() => {
    tempVal.attr({ text: i }); // Update the temperature value
    
           i++;
 
    // Toggle GIF based on the current temperature
    if (i <= halfCycle && !isGifActive) {
      isGifActive = true; // Update state
    } else if (i > halfCycle && isGifActive) {
      pauseGif(); // Pause the GIF
      isGifActive = false; // Update state
    }

    // Stop interval and trigger actions when temperature reaches the target
    if (i >= randomNumberTemp1) {
      clearInterval(intervalId);
      pauseGif();

      setTimeout(() => {
        steamFlowRemove(); // Call steam flow removal
//        resumeGif();
        setTimeout(() => {
          coldWaterFlow(); // Call cold water flow
          jacketHeaterSlowCool(time*3);
            resumeGif();  
          // Start decrementing temperature after cold water flow
//          setTimeout(() => {
            const decrementInterval = setInterval(() => {
              if (i > randomNumberTemp1Dec) {
    
                    i--;
                     tempDiff = i - randomNumberTemp1Dec; // Recalculate tempDiff
//                tempArr.push(jsn1);
//                console.log("second "+i);
                
                tempVal.attr({ text: i }); // Update the display with the current temperature
              } else {
	              hotWaterFlow();
                clearInterval(decrementInterval); // Stop when i reaches randomNumberTemp1Dec
//                pauseGif(); // Pause GIF after decrement
                setTimeout(() => {
	                
                  coldWaterFlowRemove(); // Remove cold water flow
                   setTimeout(() => {
	                 hotWaterFlowRemove();
                  setTimeout(() => {
                    steamInit = 1;
                    steamFlow();
                      pauseGif(); 
                    setTimeout(() => {    
                    // Increment i to static 40
                    const incrementInterval = setInterval(() => {
                      if (i < 40) {
                        // Increment i
//                         jsn = {};
                         jsn1.temp = i;
                        tempArr.push(jsn1);
                         i++;
//                        console.log("third "+i);
                        tempVal.attr({ text: i }); // Update the display
                      } else {
                        clearInterval(incrementInterval); // Stop when i reaches 40
                        
                        setTimeout(() => {
	                      	steamFlowRemove(); 
//	                      	 setTimeout(() => {                     
	                          resumeGif();
	                           setTimeout(() => {
		                          pauseGif();
		                           setTimeout(() => {
			                           resumeGif();
			                           setTimeout(() => {
				                         pauseGif();   
				                         setTimeout(() => { 
					                       steamInit = 2;
                                           steamFlow();
                                          
//                                           resumeGif();
                                           cycleOd60Temp();
//                                           setTimeout(() => { 
//	                                          steamFlowRemove();
//	                                           setTimeout(() => { 
//		                                       coldWaterFlow();
//		                                     },time*3);
//	                                       },time*2);
					                    },time*4);
				                       },time*4);
			                         },time*3);
		                          },time*6);
//	                          },time*3);
	                     
	                  }, time*2); 
                      }
                    }, time); // Increment interval
                     }, time); 
                  }, time * 3);//
                  }, time*3);
                }, time*3);
              }
            }, time / 2); // Decrement interval
//          }, time * 2); // Delay before decrement starts
        }, time * 2); // Delay before cold water flow
      }, time); // Delay before steam flow removal
    }
    
  }, time / 2); // Interval for updating the temperature
  
  console.log(dataArr);
}


 var tankAcolorMix = { r: 199, g: 62, b: 62 }; // Red
var tankBcolorMix = { r: 63, g: 133, b: 235 }; // Blue
var tankCcolorMix = { r: 86, g: 176, b: 84 }; // Green   
//     Percentages for each tank
var tankAPercentage = randomAPercentage;
var tankBPercentage = randomBPercentage;
var tankCPercentage = randomCPercentage;

// Total weight
var totWtLit = finalA+finalB+finalC;
console.log(totWtLit);
var totalWeight = parseInt(tankAPercentage) + parseInt(tankBPercentage) +parseInt(tankCPercentage)+parseInt(0);

var weightRect = paper.rect((x+298),(y+152),50,28,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})

var totWt = paper.text((x + 323), (y+165), "0").attr({ 'font-size': 18, "font-family":"digital-clock-font","fill":"#07f74f","font-weight":"bold" });

 var totWtUnit = paper.text((x+364	),(y+166),"ltr").attr({
    font: "15px Arial", fill :"#034f1a","font-weight": "bold"})

function totalWeightInterval() {
    let currentPercent = 1; // Start from 1
   
   var weightLit = parseInt(totWtLit);
    let intervalDuration = (time*3) / weightLit ; // Adjust duration dynamically (1000ms is 1 second for simplicity)

    // Create interval to update weight percentage
    let interval = setInterval(() => {
        // Update the text with the current percentage
        totWt.attr({ text: currentPercent + "" }).toFront();

        // Increment the current percentage
        currentPercent++;

        // Stop the interval once the target percentage is reached
        if (currentPercent > totWtLit) {
            clearInterval(interval);
        }
    }, intervalDuration);
}


// Calculate the blended RGB values
var mixedColor = {
  r: Math.round(
    (tankAcolorMix.r * tankAPercentage +
     tankBcolorMix.r * tankBPercentage +
     tankCcolorMix.r * tankCPercentage) / totalWeight
  ),
  g: Math.round(
    (tankAcolorMix.g * tankAPercentage +
     tankBcolorMix.g * tankBPercentage +
     tankCcolorMix.g * tankCPercentage) / totalWeight
  ),
  b: Math.round(
    (tankAcolorMix.b * tankAPercentage +
     tankBcolorMix.b * tankBPercentage +
     tankCcolorMix.b * tankCPercentage) / totalWeight
  )
};

// Convert to RGB string
 var mixedColorRGB = `rgb(${mixedColor.r}, ${mixedColor.g}, ${mixedColor.b})`;
 
//  var rect1 = paper.path("M"+(x+100)+" "+(y+200)+" l 20 0").attr({"fill":mixedColorRGB});    
  
  
  
  // Animate gradient fading out to the mixed color
var currentStep = 0;
var steps = 100; // Number of steps for smooth animation
var interval = time*150 / steps; // Interval time per step

// Initial gradient stops
var startColor = { r: 199, g: 62, b: 62 }; // Starting color (Red)
var midColor = { r: 86, g: 176, b: 84 }; // Middle color (Green)
var endColor = { r: 63, g: 133, b: 235 }; // Ending color (Blue)

// Gradual transition function
function transitionGradient() {
	
	
	
  if (currentStep <= steps) {
    // Calculate intermediate gradient colors
    var progress = currentStep / steps;
    var interpolatedColor1 = interpolateColor(startColor, mixedColor, progress);
    var interpolatedColor2 = interpolateColor(midColor, mixedColor, progress);
    var interpolatedColor3 = interpolateColor(endColor, mixedColor, progress);

    // Update gradient
    var gradient = `20-rgb(${interpolatedColor1.r}, ${interpolatedColor1.g}, ${interpolatedColor1.b})-
                        rgb(${interpolatedColor2.r}, ${interpolatedColor2.g}, ${interpolatedColor2.b})-
                        rgb(${interpolatedColor3.r}, ${interpolatedColor3.g}, ${interpolatedColor3.b})`;

    jacketFillRect.attr({ fill: gradient });

    // Increment step
    currentStep++;

    // Call again after interval
    setTimeout(transitionGradient, interval);
//    pauseGif();
  }
}

// Linear interpolation function for colors
function interpolateColor(color1, color2, factor) {
  return {
    r: Math.round(color1.r + (color2.r - color1.r) * factor),
    g: Math.round(color1.g + (color2.g - color1.g) * factor),
    b: Math.round(color1.b + (color2.b - color1.b) * factor)
  };
}

 var cstrPipe = paper.image("images/pipe1.png", (x+349), (y+515), 30, 50);
  
  var cstrValve = paper.image("images/svValveV1R.png", (x + 319), (y + 527), 65, 35).attr({'transform': 'r' + 180});
  
  var lshh1 = paper.text((x+390), (y+545), "V7")
 .attr({ font: "12px Arial", stroke: "#204687"});  
  
  paper.text((x-60), (y+10), "START-UP").attr({ 'font-size': 18,"font-family":"digital-clock-font", "fill":"#4e4f52","font-weight":"bold" });
  var stOn = paper.image("images/green.png", (x  -10), (y-8 ), 40, 40);
  var stOff = paper.image("images/red.png", (x -10), (y-8), 40, 40);
  
  paper.text((x -60), (y +60), "RUNNING").attr({ 'font-size': 18, "font-family":"digital-clock-font","fill":"#4e4f52","font-weight":"bold" });
 var rnOn = paper.image("images/green.png", (x -10), (y +40), 40, 40);
 var rnOff = paper.image("images/red.png", (x -10), (y +40), 40, 40);
  
  paper.text((x -60), (y +110), "SHUTDOWN").attr({ 'font-size': 18,"font-family":"digital-clock-font", "fill":"#4e4f52","font-weight":"bold" });
 var shOn = paper.image("images/green.png", (x -10), (y+90), 40, 40);
 var shOff = paper.image("images/red.png", (x -10), (y +90), 40, 40);
  
  
  var outLine = paper.rect((x-110),y-15,150,150).attr({"stroke":"#545557","stroke-width":3}); 
  
//  var r1 = paper.rect(x+25,y+150,50,30,50).attr({"fill":mixedColorRGB,"stroke-width":3,"stroke":"#2c2e2c"});
//  var finalShade = paper.text((x-50), (y+165), "END COLOR SHADE").attr({ font: "12px Arial", stroke: "#2c2e2c",opacity:0});

   
//  var r1 = paper.rect(x+210,y+233,50,30,50).attr({"fill":mixedColorRGB,"stroke-width":3,"stroke":"#2c2e2c"}); 
  var finalShade = paper.text((x+160), (y+240), "FINAL COLOR").attr({ font: "12px Arial", stroke: "#2c2e2c",opacity:0});
  var finalShade1 = paper.text((x+160), (y+257), "SHADE").attr({ font: "12px Arial", stroke: "#2c2e2c",opacity:0});

// tank A

var tA = paper.rect((x+305),(y-10),50,26,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})
var tAText = paper.text((x +330), (y +2), "0").attr({ 'font-size': 18,"font-family":"digital-clock-font", "fill":"#07f74f","font-weight":"bold" });
var tATextUnit = paper.text((x +372), (y +2), "ltr").attr({
    font: "15px Arial", fill :"#034f1a","font-weight": "bold"})
    
    
// tank B

var tB = paper.rect((x+475),(y-10),50,26,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})
var tBText = paper.text((x +500), (y +2), "0").attr({ 'font-size': 18,"font-family":"digital-clock-font", "fill":"#07f74f","font-weight":"bold" });
var tATextUnit = paper.text((x +541), (y +2), "ltr").attr({
    font: "15px Arial", fill :"#034f1a","font-weight": "bold"}) 
    
 // tank C

var tC = paper.rect((x+645),(y-10),50,26,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":5})
var tCText = paper.text((x +670), (y +2), "0").attr({ 'font-size': 18,"font-family":"digital-clock-font", "fill":"#07f74f","font-weight":"bold" });
var tATextUnit = paper.text((x +712), (y +2), "ltr").attr({
    font: "15px Arial", fill :"#034f1a","font-weight": "bold"})      
    
//  var finalProd = paper.text((x +585), (y +535), "PRODUCT READY").attr({
//    font: "18px Arial", fill :"#034f1a","font-weight": "bold"})
    
    var finalProd = paper.text((x + 585), (y + 535), "PRODUCT READY").attr({
    font: "18px Arial",
    fill: "#5f15c7",
    "font-weight": "bold",
    opacity:0
});

// Function to toggle visibility for blinking effect
 let isVisible = true; 
setInterval(() => {
    if (isVisible) {
        finalProd.attr({ fill: "#C71585" }); 
    } else {
        finalProd.attr({ fill: "#5f15c7" }); 
    }
    isVisible = !isVisible;
}, 500);





    
    function tankAInt(){
		    tankAPercent = 50;
			let currentPercent = 1; // Start from 1
			
			// Calculate the interval duration to distribute over the given percentage
			let intervalDuration = time / tankAPercent;
			
			let interval = setInterval(() => {
			    // Update the text with the current percentage
			    tAText.attr({ text: currentPercent}).toFront();
			    
			    // Increment the current percentage
			    currentPercent++;
			    tAText.toFront();
			    // Stop the interval once the target percentage is reached
			    if (currentPercent > tankAPercent) {
			        clearInterval(interval);
			    }
			}, intervalDuration);
}




      function tankBInt(){
		    tankBPercent = 50;
			let currentPercent = 1; // Start from 1
			
			// Calculate the interval duration to distribute over the given percentage
			let intervalDuration = time / tankBPercent;
			
			let interval = setInterval(() => {
			    // Update the text with the current percentage
			    tBText.attr({ text: currentPercent}).toFront();
			    
			    // Increment the current percentage
			    currentPercent++;
			    tBText.toFront();
			    // Stop the interval once the target percentage is reached
			    if (currentPercent > tankBPercent) {
			        clearInterval(interval);
			    }
			}, intervalDuration);
}
     
        function tankCInt(){
		    tankBPercent = 50;
			let currentPercent = 1; // Start from 1
			
			// Calculate the interval duration to distribute over the given percentage
			let intervalDuration = time / tankBPercent;
			
			let interval = setInterval(() => {
			    // Update the text with the current percentage
			    tCText.attr({ text: currentPercent}).toFront();
			    
			    // Increment the current percentage
			    currentPercent++;
			    tCText.toFront();
			    // Stop the interval once the target percentage is reached
			    if (currentPercent > tankBPercent) {
			        clearInterval(interval);
			    }
			}, intervalDuration);
}
	  
	  
}