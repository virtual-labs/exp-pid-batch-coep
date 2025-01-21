
function BatchProcessBottleFillingPiping()
{
	ComponentMasterJson = {};
	
	var StdCompPipingCount=55;
	var StdJackettedVesselCount=1;
	var StdTankCount=5;
	var StdPumpCount=1;
	var StdControlValveCount=7;
	var StdAngleValveCount=5;
	var StdRackCount=2;
	var StdBeltCount=2;
	var StdAramCount=2;
	var StdMotorCount=10;
	var StdRotataryTableCount=1;
	var Stdvessels1=5;
	var Stdvessels1half=5;
	var Stdvessels3=5;
	var StdValvesCount=5;

	var perJackettedVesselCount;
	var perTankCount;
	var perPumpCount;
	var perControlValveCount;
	var perAngleValveCount;
	var perRackCount;
	var perBeltCount;
	var perAramCount;
	var perMotorCount;
	var StdRotataryTableCount;
	var pervessels1;
	var pervessels1half;
	var pervessels3;
	var perValvesCount;

	 var jacketVessels;
	 var vessel1;
	 var vessel1half;
	 var vessel3;
	 var solenoidValve;
	 var controlValves;
	 var angleValves;
	 var tanks;
	 var pumps;
	 var rank;
	 var belt;
	 var arams;
	 var motors;
	 var rotaryTable;

	var TotalComp;
	
	
	$("#Header").html("	<center><span>BATCH PROCESS & BOTTLE FILLING - VESSEL & PIPING DIAGRAM</span></center>");
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
	
     	+'<div class="row conf" >'
	
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of jacketted vessels</b></label>'
		+' <input class="form-select" id="jacketVessels" type="number" min="0" max="5" value="0" tabindex="1" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Vessels(1 Liter)</b></label>'
		+' <input class="form-select" id="vessel1" type="number" min="0" max="5" value="0" tabindex="2" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Vessels(1.5 Liter)</b></label>'
		+' <input class="form-select" id="vessel1half" type="number" min="0" max="5" value="0" tabindex="3" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Vessels(3 Liter)</b></label>'
		+' <input class="form-select" id="vessel3" type="number" min="0" max="5" value="0" tabindex="4" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of solenoid valves</b></label>'
		+' <input class="form-select" id="solenoidValve" type="number" min="0" max="5" value="0" tabindex="5" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of control valves</b></label>'
		+' <input class="form-select" id="controlValves" type="number" min="0" max="5" value="0" tabindex="6" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of angle valves</b></label>'
		+' <input class="form-select" id="angleValves" type="number" min="0" max="5" value="0" tabindex="7" ></input>'
		+'</div>' 
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of tanks</b></label>'
		+' <input class="form-select" id="tanks" type="number" min="0" max="5" value="0" tabindex="8" ></input>'
		+'</div>' 
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of pumps</b></label>'
		+' <input class="form-select" id="pumps"  type="number" min="0" max="5" value="0" tabindex="9" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of racks</b></label>'
		+' <input class="form-select" id="racks" type="number" min="0" max="5" value="0" tabindex="10" ></input>'
		+'</div>' 
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of belts</b></label>'
		+' <input class="form-select" id="belts" type="number" min="0" max="5" value="0" tabindex="11" ></input>'
		+'</div>' 
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of arams</b></label>'
		+' <input class="form-select" id="arams" type="number" min="0" max="5" value="0" tabindex="12" ></input>'
		+'</div>' 
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of motors</b></label>'
		+' <input class="form-select" id="motors" type="number" min="0" max="5" value="0" tabindex="13" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of rotary Table</b></label>'
		+' <input class="form-select" id="rotaryTable" type="number" min="0" max="5" value="0" tabindex="14" ></input>'
		+'</div>'
		
		
		
		+'<div class="col-sm-12">'
		+'<label><b>Utilities</b></label>'
		+'<select class="form-select" id="Utilities" multiple="multiple" tabindex="15">'
		+'  <option value="Water">Water</option>'
		+'  <option value="Air">Air</option>'
		+'  <option value="Steam">Steam </option>'
		+'  <option value="Electricity">Electricity</option>'
		+'  <option value="Sterile_Water">Sterile Water </option>'
		+'  <option value="Heating_Ventilation_Air_Conditioning(HVAC)"> Heating Ventilation Air Conditioning(HVAC)</option>'
		+'  <option value="CCTV_Surveillance">CCTV - Surveillance</option>'
		+'  <option value="Access_Control"> Access Control</option>'
		
	
		+'</select>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyComponents" style="margin-top:10px;margin-bottom:10px;width:100%" data-toggle="modal" data-target="#myModal" tabindex="16">Verify Components </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal">'
		+'    <div class="modal-dialog " id="modelDialog">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody">'
		
		+'	        </div>'
//		+'	        <!-- Modal footer -->'
		+'	        <div class="modal-footer">'
		+'	          <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
		+'	        </div>'
		+'	      </div>'
		+'	    </div>'
		+'	  </div>'
//		+'	  <!-- End Modal -->'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="nextLevel1" style="margin-top:10px;margin-bottom:10px;width:100%" hidden>Next Level</button>'
		+'</div>'
		
		+'</div>'
	$("#Selection").html(htm);
	htm=''
		+'<div class="row statement" ><p>The spray drying process is a widely used technique for converting liquid feed into a dry powder form by rapidly drying with a hot gas.'
		+'This method is commonly used in industries such as food processing, pharmaceuticals, chemicals, and ceramics. The objective'
		+'of this task is to develop a comprehensive Piping and Instrumentation Diagram (P&ID) for a Spray Drying Process Plant that '
		+'outlines the necessary equipment, instrumentation, control loops, and piping systems.'
		+'<br><b> Problem Description</b><br>'
		+'The spray drying process involves several critical stages such as atomization, drying, powder collection, and gas handling.'
		+'A well-designed P&ID is required to ensure optimal control, safety, and efficient operation of the plant. The diagram should '
		+'incorporate the flow of materials, energy, and signals, highlighting all relevant equipment such as pumps, compressors,'
		+'heat exchangers, filters, and storage vessels, along with the associated instrumentation for monitoring and control.</p>'
		
		+'<br><b style="margin-bottom:10px;">The P&ID should include all major and minor process components and systems such as:</b><br>'

		+'<p><span class="subTitle">Feed Preparation System:</span><br> Where liquid feed is prepared and conditioned before entering the spray dryer.'
		+'<br><span class="subTitle">Atomization System:</span><br> Atomizers or nozzles that break the liquid feed into droplets for drying.'
		+'<br><span class="subTitle">Drying Chamber:</span><br> A chamber where hot air or gas dries the atomized liquid into fine powder.'
		+'<br><span class="subTitle">Air Handling System: </span><br>For controlling airflow and temperature inside the drying chamber.'
		+'<br><span class="subTitle">Powder Recovery and Collection System:</span><br> Cyclones, filters, and receivers used to capture dried particles from the exhaust gas.'
		+'<br><span class="subTitle">Exhaust Gas Handling System:</span><br> Includes fans, scrubbers, and filtration units to ensure environmental compliance.'
		+'<br><span class="subTitle">Cooling/Storage: </span><br>Systems for cooling, storing, and packaging the dried product</p></div>'
		$("#diagram").html(htm);
       var temp=0;
	   var percentage;
	   var totalComp;
	   var flag=0;
	   var selectedValues;
	   var selectedArray=[];
	$("#verifyComponents").click(function(){
		 percentage=0;
		 jacketVessels=parseInt($("#jacketVessels").val());
		 vessel1=parseInt($("#vessel1").val());
		 vessel1half=parseInt($("#vessel1half").val());
		 vessel3=parseInt($("#vessel3").val());
		 solenoidValve=parseInt($("#solenoidValve").val());
		 
		 controlValves=parseInt($("#controlValves").val());
		 angleValves=parseInt($("#angleValves").val());
		 tanks=parseInt($("#tanks").val());
		 pumps=parseInt($("#pumps").val());
		 rack=parseInt($("#racks").val());
		 
		 belt=parseInt($("#belts").val());
		 arams=parseInt($("#arams").val());
		 motors=parseInt($("#motors").val());
		 rotaryTable=parseInt($("#rotaryTable").val());
		
		 const selectedValues = $("#Utilities").val();
		 
		 if (selectedValues) {
	          selectedValues.forEach(value => {
	            if (!selectedArray.includes(value)) {
	              selectedArray.push(value);
	            }
	          });

//	          $("#output").text("Values in Array: " + selectedArray.join(", "));
	        } 
		 
		 
		 
		 CountComp();
		 
		  console.log(" jacketVessels "+jacketVessels);
		  console.log(" vessel1 "+vessel1);
		  console.log(" vessel1half "+vessel1half);
		  console.log(" vessel3 "+vessel3);
		  console.log(" solenoidValve "+solenoidValve);
		  console.log(" controlValves "+controlValves);
		  console.log(" angleValves "+angleValves);
		  console.log(" tanks "+tanks);
		  console.log(" pumps "+pumps);
		  console.log(" rack "+rack);
		  console.log(" belt "+belt);
		  console.log(" arams "+arams);
		  console.log(" motors "+motors);
		  console.log(" rotaryTable "+rotaryTable);
		 
		  
		  if(totalComp==0 ||(jacketVessels === "" || vessel1 === "" || vessel1half === "" || vessel3=="" || solenoidValve=="" ||controlValves=="" || angleValves=="" ||tanks=="" 
			  || pumps=="" || rack==""|| belt=="" || arams=="" || motors=="" || rotaryTable=="" )){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box ");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp();
			  }else{
				  if(flag==0){
					  $("#modelDialog").removeClass("modal-md");
					  $("#modelDialog").addClass("modal-xl");
					  $("#modelTitle").html("Required configuration ");
					  htm=''
						  +'<div class="row">'
						  +'<div class="col-sm-6" >'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td colspan="4"><center>REQUIRED COMPONENTS</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>Jacketted vessels</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>Vessels (1 Liter)</center></td>'
						+'     <td><center>5</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>Vessels (1.5 Liter)</center></td>'
						+'     <td><center>5</center></td>'
						+'     <td><center>Vessels (3 Liter)</center></td>'
						+'     <td><center>5</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>Solenoid Valves</center></td>'
						+'     <td><center>5</center></td>'
						+'     <td><center>Control Valves</center></td>'
						+'     <td><center>7</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>Angle Valves</center></td>'
						+'     <td><center>5</center></td>'
						+'     <td><center>Tanks</center></td>'
						+'     <td><center>5</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>Pumps</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>Racks</center></td>'
						+'     <td><center>2</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>Belts</center></td>'
						+'     <td><center>2</center></td>'
						+'     <td><center>Arams</center></td>'
						+'     <td><center>2</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>Motor</center></td>'
						+'     <td><center>2</center></td>'
						+'     <td><center>Rotary table</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
					    +' </tbody>'
						+'</table>'
						+'</div>'
						 +'<div class="col-sm-6" >'
							+'<table class="table table-striped table-bordered">'
							+' <tbody>'
							+'    <tr class="table-dark text-dark">'
							+'     <td colspan="2"><center> REQUIRED UTILITIES</center></td>'
							+'   </tr>'
							+'    <tr>'
							+'     <td><center>AIR</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" style=""></i></center></td>'
							+'   </tr>'
							+'   <tr>'
							+'     <td><center>ELECTRICITY</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
							+'   </tr>'
							+'   <tr>'
							+'     <td><center>COMMUNICATION NETWORK</center></td>'
							+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
							+'   </tr>'
							
							+'    <tr>'
							+'     <td><center>ACCESS CONTROL</center></td>'
							+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
							
							+'   </tr>'
							
							+'    <tr>'
							+'     <td><center>CCTV</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
							
							+'   </tr>'
						    +' </tbody>'
							+'</table>'
							+'</div>'
							+'</div>'

						+"<img src='images/bottlefilling.png' class='img-fluid' style='border-style: double;border-color: black;'>"
					  
						 $("#modelBody").html(htm);
						  $("#modelBody").css("color","red");   
				  }
				  else
					  {
					  CountComp();
					  }
				  
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp(){
		
		 if(totalComp==0 ||(jacketVessels === "" || vessel1 === "" || vessel1half === "" || vessel3=="" || solenoidValve=="" ||controlValves=="" || angleValves=="" ||
				 tanks=="" || pumps=="" || rack==""|| belt=="" || arams=="" || motors=="" || rotaryTable=="" )){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		
	else{
		console.log(" jacketVessels "+jacketVessels);
		  console.log(" vessel1 "+vessel1);
		  console.log(" vessel1half "+vessel1half);
		  console.log(" vessel3 "+vessel3);
		  console.log(" solenoidValve "+solenoidValve);
		  console.log(" controlValves "+controlValves);
		  console.log(" angleValves "+angleValves);
		  console.log(" tanks "+tanks);
		  console.log(" pumps "+pumps);
		  console.log(" rack "+rack);
		  console.log(" belt "+belt);
		  console.log(" arams "+arams);
		  console.log(" motors "+motors);
		  console.log(" rotaryTable "+rotaryTable);
		  
		if((jacketVessels==StdJackettedVesselCount) && (tanks==StdTankCount) && (pumps==StdPumpCount) && (StdControlValveCount==controlValves) &&( StdAngleValveCount==angleValves)
				&&(StdRackCount==rack)&&(StdBeltCount==belt)&&(StdAramCount==arams)&&(StdMotorCount==motors)&&(StdRotataryTableCount== rotaryTable)&&(Stdvessels1==vessel1)
				&&(Stdvessels1half==vessel1half)&&(Stdvessels3==vessel3)&&(StdValvesCount==solenoidValve)){
			
			if(selectedArray.length==0){
				
				 $("#modelDialog").removeClass("modal-xl");
					$("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Error box");
					  $("#modelBody").html("<b>Select utilities.</b> ");                                                                                                
					  $("#modelBody").css("color","red");
			}
			else
				{ 
					 $("#modelDialog").removeClass("modal-xl");
					 $("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Message box ");
					 $("#modelBody").html("<b>Click on 'Next level' button.</b>");
					$("#modelBody").css("color","green");
					$("#jacketVessels,#vessel1,#vessel1half,#vessel3,#solenoidValve,#controlValves,#angleValves,#tanks,#pumps,#racks,#belts,#arams,#motors,#rotaryTable,#verifyComponents,#Utilities").prop("disabled",true);
					
					flag=1;
					addToMasterJson();
					htm=''
						+'<div class="col-sm-12" >'
						+"<img src='images/bottlefilling.png' class='img-fluid' id='partA1' style=' width: 100px;height:100px;position: relative; margin: 20px;'  >"
						+'</div>'
						
					$("#diagram").html(htm);
					 $("#partA1").animate(
					          {
					            width: "1000px",
					            height: "700px",
					           left: "+=100px",
		//			            background-color:"red"
					            
					          },
					          1000,
					          
					        );
						$("#nextLevel1").prop("hidden",false);
				}	
		}
		else{
			
			perJackettedVesselCount=parseFloat((jacketVessels*100)/StdJackettedVesselCount);
			perTankCount=parseFloat((tanks*100)/StdTankCount);
			perPumpCount=parseFloat((pumps*100)/StdPumpCount);
			perControlValveCount=parseFloat((controlValves*100)/StdControlValveCount);
			perAngleValveCount=parseFloat((angleValves*100)/StdAngleValveCount);
			perRackCount=parseFloat((rack*100)/StdRackCount);
			perBeltCount=parseFloat((belt*100)/StdBeltCount);
			perAramCount=parseFloat((arams*100)/StdAramCount);
			perMotorCount=parseFloat((motors*100)/StdMotorCount);
			StdRotataryTableCount=parseFloat((rotaryTable*100)/StdRotataryTableCount);
			pervessels1=parseFloat((vessel1*100)/Stdvessels1);
			pervessels1half=parseFloat((vessel1half*100)/Stdvessels1half);
			pervessels3=parseFloat((vessel3*100)/Stdvessels3);
			perValvesCount=parseFloat((solenoidValve*100)/StdValvesCount);
			   
			 
			 console.log(" perJackettedVesselCount "+perJackettedVesselCount);
			 console.log(" perTankCount "+perTankCount);
			 console.log(" perPumpCount "+	 perPumpCount);
			 console.log(" perControlValveCount "+perControlValveCount);
			 console.log(" perAngleValveCount "+perAngleValveCount);
			 
			 console.log(" perRackCount "+perRackCount);
			 console.log(" perBeltCount "+perBeltCount);
			 console.log(" perAramCount "+	 perAramCount);
			 console.log(" perMotorCount "+perMotorCount);
			 console.log(" StdRotataryTableCount "+StdRotataryTableCount);
			 console.log(" pervessels1 "+pervessels1);
			 console.log(" pervessels1half "+pervessels1half);
			 console.log(" pervessels3 "+pervessels3);
			 console.log(" perValvesCount "+perValvesCount);
			 
				totalComp=perJackettedVesselCount+perTankCount+perPumpCount+perControlValveCount+perAngleValveCount+perRackCount+perBeltCount+
				perAramCount+perMotorCount+StdRotataryTableCount+pervessels1+pervessels1half+pervessels3+perValvesCount;
			  avg=parseInt(totalComp/14);
			  
			  console.log(" avg "+avg);
			
				 $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
			
				if((jacketVessels>StdJackettedVesselCount) || (tanks>StdTankCount) || (pumps>StdPumpCount) || (controlValves>StdControlValveCount) || (angleValves>StdAngleValveCount) || 
						(rack>StdRackCount) || (belt>StdBeltCount) || (arams>StdAramCount) || (motors>StdMotorCount)
						||(rotaryTable>StdRotataryTableCount) || (vessel1half>Stdvessels1half) || (vessel3>Stdvessels3) || (solenoidValve>StdValvesCount)){
					
					$("#modelBody").css("color","red"); 
					 $("#modelTitle").html("Error box");
					$("#modelBody").html("<b>More components than expected. </b>");
				}else
					{
						if(avg<100){
							$("#modelBody").css("color","red");
							$("#modelTitle").html("Message box");
							 $("#modelBody").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody").css("color","red");
							 $("#modelTitle").html("Error box");
							 $("#modelBody").html("<b>More components than expected.</b>");
						}
					}
		}
	}
		
	}
	function addToMasterJson()
	{
		
		tempMasterJsonComp = {
		"totalComponent":"12",
		"tank":"4",
		"pump":"2",
		"HeatExchanger":"1",
		"Heater":"1",
		"Valves":"4",
		
//		"Utilities":selectedArray,
		};
		
		ComponentMasterJson.Component=tempMasterJsonComp;
		ComponentMasterJson.Component.Utilities=selectedArray;
		console.log(ComponentMasterJson);
	}
	
	$("#nextLevel1").click(function(){
		BatchProcessBottleFillingInstrument();
	});
	
	
	
}

