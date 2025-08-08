 var stopSavingValues;
 let dataInterval1; 
function BatchProcessBottleFillingMimic2(){
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
//		+'<button id="reset" class="btn btn-danger" style="width:100%" disabled>Reset</button>'
		+'</div>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
//		+'<button id="datasheet" class="btn btn-danger" style="width:100%;margin-top:10px;" disabled>View Datasheet</button>'
		+'</div>'
		+'<div class="col-sm-6">'
//		+'<button type="button" class="btn btn-danger"  id="graph" style="margin-top:10px;width:100%" data-toggle="modal" data-target="#modalTrends" disabled>Trends </button>'
		+'</div>'
		+'</div>'
//		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
//		+'<center><span >READINGS</span></center>'
//		+'</div>'
	
//		+'<div class="row conf" >'
//		+'<table class="table table-bordered">'
//		+' <thead>'
//
//		+'</thead>'
//		+'<tbody>'
//		+' <tr>'
//		+'   <td><label><b> TT </b></label></td>'
//		+'   <td><label class="PMCValue" id="temp">22</label>°C</td>'
//		+'  </tr>'
//		+'  <tr>'
//		+' <td><label><b>CV1  </b></label></td>'
//		+' <td><label class="PMCValue" id="cv1">0</label>%</td>'
//		+'  </tr>'
//		+'  <tr>'
//		+' <td><label><b>CV2 </b></label></td>'
//		+' <td><label class="PMCValue" id="cv2">0</label>%</td>'
//		+'  </tr>'
//		+'  <tr>'
//		+' <td><label><b>WT </b></label></td>'
//		+' <td><label class="PMCValue" id="wt">0</label>ltr</td>'
//		+'  </tr>'
//		+'  <tr>'
//		+' <td><label><b>STIRRER STATUS </b></label></td>'
//		+' <td><label class="PMCValue" id="strSt">OFF</label></td>'
//		+'  </tr>'
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
//		+'  </tr>'
//		+'</tbody>'
//		+'</table>'

//		+'</div>'
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
	
	BottleFillingDiagram();
//	$("#BoilerHeatExchangerPost").click(function(){
//		BatchProcessBottleFillingPostQuestion();
//	});

}
function BottleFillingDiagram()
{  
	var paper = Raphael("diagram", 1500, 700);

var x = 250, y = 50;
var time = 1000*2;

 var rackVertical  = paper.rect((x + 685), (y), 10, 260).attr({
        fill: "90-#D0D0D0-#A0A0A0-#F8F8F8",
        stroke: "#2c3e50",
        "stroke-width": 1.5,
    }); 
    
 var b1BaseRack = paper.rect((x + 695), (y+80.5), 43, 10).attr({
        fill: "90-#D0D0D0-#A0A0A0-#F8F8F8",
        stroke: "#2c3e50",
        "stroke-width": 1.5,
    }); 
 var b2BaseRack = paper.rect((x + 695), (y+150), 43, 10).attr({
        fill: "90-#D0D0D0-#A0A0A0-#F8F8F8",
        stroke: "#2c3e50",
        "stroke-width": 1.5,
    }); 
 var b3BaseRack = paper.rect((x + 695), (y+230), 43, 10).attr({
        fill: "90-#D0D0D0-#A0A0A0-#F8F8F8",
        stroke: "#2c3e50",
        "stroke-width": 1.5,
    });  
 

    var b1 = paper.rect((x + 703), (y + 40), 32, 40);
    b1.attr({ stroke: "#2c3e50", "stroke-width": 1.5,});

    var b2 = paper.rect((x + 703), (y + 100), 33, 50);
   b2.attr({ stroke: "#2c3e50", "stroke-width": 1.5,});
    
    var b3 = paper.rect((x + 703), (y + 170), 35, 60);
    b3.attr({ stroke: "#2c3e50", "stroke-width": 1.5,});
  
   
   // ROBOT PATH

    var path1 = paper.path("M"+(x+870)+" "+(y+10)+" l 0 355").attr({ stroke: "#d4d7d9", "stroke-width": 5});
    var path2 = paper.path("M"+(x+880)+" "+(y+10)+" l 0 355").attr({ stroke: "#d4d7d9", "stroke-width": 5});
    
    var path3 = paper.path("M"+(x+900)+" "+(y+10)+" l 0 355").attr({ stroke: "#d4d7d9", "stroke-width": 5});
    var path4 = paper.path("M"+(x+910)+" "+(y+10)+" l 0 355").attr({ stroke: "#d4d7d9", "stroke-width": 5});
    
    
    var robImg = paper.image("images/topRobot.png", (x+792), (y+300), 130, 100);
    
    var robotHand = paper.path("M"+(x+798)+" "+(y+60)+"").attr({ stroke: "#000", "stroke-width": 14});
    var robotHand1 = paper.path("M"+(x+798)+" "+(y+60)+"").attr({ stroke: "#b4b4de", "stroke-width": 11.5});
    
    var hand = paper.rect((x + 792),(y + 340),8,18,1).attr({"fill":"180-#b8baba-#636566","stroke":"#000","stroke-width":1.5});

     
     var numBearings = 11; // Number of images
	var gap = 30; // Gap between images
	
	var bearings = []; // Array to store images
	var centers = []; // Array to store rotation centers
	var angle = 0; // Initial angle
	
	// Create multiple images and store their centers
	for (var i = 0; i < numBearings; i++) {
	    var posX = x + 404.5 + (i * gap); // X-position with spacing
	    var posY = y + 363; // Y-position remains the same
	
	    // Create bearing image
	    var bearing = paper.image("images/bearing.png", posX, posY, 30, 30);
	    
	    // Store image and its rotation center
	    bearings.push(bearing);
	    centers.push({ cx: posX + 15, cy: posY + 15 }); // Center of each image
	}
	
	var bearingCenter = paper.circle((x+419),(y+378),6).attr({"fill":"#000"});
	var dist = 0;
	
	 for(var i=0;i<11;i++){
		bearingCenter = paper.circle((x+419+dist),(y+378),6).attr({"fill":"#000"});
		dist+=30;
	}
	
//	bearingRotation();
	
			var rotationInterval = null; // Store the interval ID
			var isBearingRotating = false; // Flag to track rotation state
			var angle = 0; // Rotation angle
			
			function bearingRotationOn() {
			    if (isBearingRotating) return; // Prevent multiple intervals
			    isBearingRotating = true;
			
			    // Start a new interval
			    rotationInterval = setInterval(function () {
			        angle -= 10; // Adjust rotation speed
			        for (var i = 0; i < bearings.length; i++) {
			            bearings[i].transform("r" + angle + "," + centers[i].cx + "," + centers[i].cy);
			        }
			    }, 50);
			}
			
			// Function to STOP rotation
			function bearingRotationOff() {
			    isBearingRotating = false;
			    clearInterval(rotationInterval); // Stop rotation
			    rotationInterval = null; // Reset interval ID
			}


//   robotUpb1(x,y);

   function robotUpb1(x,y){ 
	
    hand.animate({ transform: "t0,-290" }, time, "easeInOut");	
   robImg.animate({ y: y+10 }, time, "easeInOut", function() { 
	
    hand.animate({ transform: "t-75,-290" }, time, "easeInOut");   
    robotHand.animate({ path: "M" + (x + 798) + " " + (y + 59) + "l -79 0" }, time, "easeInOut");
    robotHand1.animate({ path: "M" + (x + 798) + " " + (y + 59) + "l -75 0" }, time, "easeInOut", function() {
     
     robotHand.animate({ path: Raphael.transformPath("M" + (x + 798) + " " + (y + 60) + "l -79 0", 'T 0 -5') }, time, "easeInOut");
     robotHand1.animate({ path: Raphael.transformPath("M" + (x + 798) + " " + (y + 60) + "l -75 0", 'T 0 -5') }, time, "easeInOut");
     hand.animate({ transform: "t-75,-294" }, time, "easeInOut");	
     robImg.animate({ y: y+6 }, time);
     b1.animate({ y: y+36 }, time, "easeInOut",function(){
     
        b1.animate({ x: x + 703 + 45 }, time, "easeInOut");
        hand.animate({ transform: "t-30,-294" }, time, "easeInOut");
        
        robotHand.animate({ path: "M" + (x + 798) + " " + (y + 55) + "l -36 0" }, time, "easeInOut");
        robotHand1.animate({ path: "M" + (x + 798) + " " + (y + 55) + "l -30 0" }, time, "easeInOut", function() {
           
            robotHand.animate({ path: Raphael.transformPath("M" + (x + 798) + " " + (y + 55) + "l -38 0", 'T 0 285') }, time, "easeInOut");
            robotHand1.animate({ path: Raphael.transformPath("M" + (x + 798) + " " + (y + 55) + "l -32 0", 'T 0 285') }, time, "easeInOut");
            hand.animate({ transform: "t-32,-9" }, time, "easeInOut");
            
            b1.animate({ y: y + 320,x:x+ 703 + 45-3 }, time, "easeInOut");
            robImg.animate({ y: y + 292 }, time, "easeInOut", function() {
                
                robotHand.animate({ path: Raphael.transformPath("M" + (x + 798) + " " + (y + 53) + "l -121 0", 'T 0 288') }, time, "easeInOut");
                robotHand1.animate({ path: Raphael.transformPath("M" + (x + 798) + " " + (y + 53) + "l -115 0", 'T 0 288') }, time, "easeInOut");
                hand.animate({ transform: "t-115,-8" }, time, "easeInOut");
                
                b1.animate({ x: x + 703 + 41 - 80 }, time, "easeInOut", function() {
                    robotHand.animate({ path: Raphael.transformPath("M" + (x + 798) + " " + (y + 50 + 290) + "l 0 0", 'T 0 0') }, time, "easeInOut");
                    robotHand1.animate({ path: Raphael.transformPath("M" + (x + 798) + " " + (y + 50 + 290) + "l 0 0", 'T 0 0') }, time, "easeInOut");
                    
                     b1.animate({ x: x + 703 + 41 - 330 }, time*3, "easeInOut");
//	                   conveyerOn();
                        startConveyer();
                        
                    hand.animate({ transform: "t0,-8" }, time, "easeInOut", function() {
				    setTimeout(function(){
					 b1.hide();
//					 conveyerOff();
                      stopConveyer();
                      
				     },time*2,function(){
					   
					    
				});
	                  
	                  
                        
                       });
                    });
                });
             });
        });
    });
});

 } 
  // Conveyer
  
    var rect = paper.rect((x+400), (y+362), 340, 33,12).toBack();
    rect.attr({
        "stroke-dasharray": "-.", // Dashed pattern
        "stroke-width": 3,
        "stroke": "black","fill":"#969997"
    });
    
		var isConveyerRunning = false; // Control flag
		var dashOffset = 0;
		
		function conveyerOn() {
		    if (!isConveyerRunning) return; // Stop if flag is false
		
		    dashOffset += 2; // Move dashes forward (clockwise effect)
		    rect.node.style.strokeDashoffset = dashOffset; // Apply offset to dashes
		
		    setTimeout(conveyerOn, 50); // Repeat animation
		}
		
		function conveyerOff() {
		    isConveyerRunning = false; // Stop conveyor movement
		    dashOffset = 0; // Reset dash offset
		    rect.node.style.strokeDashoffset = dashOffset; // Apply reset
		}
		
		// Function to START animation
		function startConveyer() {
		    if (!isConveyerRunning) {
		        isConveyerRunning = true;
		        conveyerOn();
		        bearingRotationOn();
		    }
		}
      
      
      function stopConveyer() {
    conveyerOff(); // Properly stop animation
    bearingRotationOff();
}

    
}