
function BatchProcessBottleFillingInstrument()
{
	
	var instrActualCount=0;
	var InstrMasterJson = {};
	var StdCompInstruCount=17;
	
	var StdPS1Count=1;
	var StdPS3Count=1;
	var StdPS1halfCount=1;
	var StdAFRCount=1;
	var StdLSHHCount=3;
	var StdLSLLCount=3;
	var StdLTCount=4;
	var StdTTCount=2;
	var StdWTCount=1;
	
	var perPS1Count;
	var perPS3Count;
	var perPS1halfCount;
	var perAFRCount;
	var perLSHHCount;
	var perLSLLCount;
	var perLTCount;
	var perTTCount;
	var perWTCount;
	
	var ps1;
	var ps3;
	var ps1Half;
	var afr;
	var lshh;
	var lsll;
	var lt;
	var tt;
	var wt;
	
	
	var totalComp1;
	
	timerMasterJson.piping=$("#counter").text();
//	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
	$("#Header").html("	<center><span >BATCH PROCESS & BOTTLE FILLING - INSTRUMENT DIAGRAM</span></center>");
	$("#Selection").css({"overflow": "auto","height":" 837px"});
	htm=''
		+'<div class="row titlePart" style="    border-style: unset;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
		
     	+'<div class="row conf" >'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of proximity sensor for 1 ltr</b></label>'
		+' <input class="form-select" id="ps1" type="number" min="0" max="5" value="0" tabindex="2"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of proximity sensor for 1.5 ltr</b></label>'
		+' <input class="form-select" id="ps1Half" type="number" min="0" max="5" value="0" tabindex="3"></input>'
		+'</div>'

		+'<div class="col-sm-12">'
		+'<label><b>Enter no of proximity sensor for 3 ltr</b></label>'
		+' <input class="form-select" id="ps3" type="number" min="0" max="5" value="0" tabindex="4"></input>'
		+'</div>'
		 
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of air filter regulator(AFR)</b></label>'
		+' <input class="form-select" id="afr" type="number" min="0" max="5" value="0" tabindex="12"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Level Switch Low Low(LSHH)</b></label>'
		+' <input class="form-select" id="lshh" type="number" min="0" max="5" value="0" tabindex="12"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Level Switch High High (LSLL)</b></label>'
		+' <input class="form-select" id="lsll" type="number" min="0" max="5" value="0" tabindex="12"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Level Transmitter (LT)</b></label>'
		+' <input class="form-select" id="lt" type="number" min="0" max="5" value="0" tabindex="12"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Temperature Transmitter (TT)</b></label>'
		+' <input class="form-select" id="tt" type="number" min="0" max="5" value="0" tabindex="12"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Enter no of Weight Transmitter (WT)</b></label>'
		+' <input class="form-select" id="wt" type="number" min="0" max="5" value="0" tabindex="12"></input>'
		+'</div>'
		
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyInstr" style="margin-top:10px;width:100%" data-toggle="modal" data-target="#myModal1" tabindex="13">Verify Instrument </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal1">'
		+'    <div class="modal-dialog " id="modelDialog1">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle1"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody1">'
		
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
		+'<button type="button" class="btn btn-danger"  id="nextLevel2" style="margin-top:10px;margin-bottom:10px;width:100%" tabindex="14" hidden>Next level</button>'
		+'</div>'
		
		+'</div>'
		
	$("#Selection").html(htm);
	
       var temp=0;
	  
	   var flag=0;
	$("#verifyInstr").click(function(){
		
		instrActualCount++;
		 ps1=parseInt($("#ps1").val());
		 ps1Half=parseInt($("#ps1Half").val());
		 ps3=parseInt($("#ps3").val());
		 afr=parseInt($("#afr").val());
		 lshh=parseInt($("#lshh").val());
		 lsll=parseInt($("#lsll").val());
		 lt=parseInt($("#lt").val());
		 tt=parseInt($("#tt").val());
		 wt=parseInt($("#wt").val());
		
		 CountComp1();
         console.log(" ps1 "+ps1);
         console.log(" ps1Half "+ps1Half);
         console.log("ps3 "+ps3);
         console.log(" afr "+afr);
         console.log(" lshh "+lshh);
         console.log(" lsll "+lsll);
         console.log("lt "+lt);
         console.log(" tt "+tt);
         console.log(" wt "+wt);
         
		  if(totalComp1==0){
				$("#modelDialog1").addClass("modal-md");
				$("#modelTitle1").html("Error box");
				  $("#modelBody1").html("<b>Select Components</b> ");
				  $("#modelBody1").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp1();
			  }else {
				  if(flag==0){
					  $("#modelDialog1").addClass("modal-xl");
					  $("#modelTitle1").html("Required configuration ");
						htm=''
					  
						+'<div class="col-sm-12" >'
						+'<center>REQUIRED COMPONENTS</center>'
						+'</div>'
					  +'<div class="col-sm-12" >'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td><center>PS for 1 liter</center></td>'
						+'     <td><center>PS for 1.5 liter</center></td>'
						+'     <td><center>PS for 3 liter</center></td>'
						+'     <td><center>AFR</center></td>'
						+'     <td><center>LSHH</center></td>'
						+'     <td><center>LSLL</center></td>'
						+'     <td><center>LT</center></td>'
						+'     <td><center>TT</center></td>'
						+'     <td><center>WT</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						
						+'     <td><center>3</center></td>'
						+'     <td><center>3</center></td>'
						+'     <td><center>4</center></td>'
						+'     <td><center>2</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
					    +' </tbody>'
						+'</table>'
						+'</div>'
						+"<img src='images/BP_withSensor.png' class='img-fluid' style='border-style: double;border-color: black;width: 100%;height:100%'>"
						 $("#modelBody1").html(htm);
						  $("#modelBody1").css("color","red"); 
				  }
				  else
					  {
					  CountComp1();
					  }
				
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp1(){
		
		if((ps1==StdPS1Count) && (ps1Half==StdPS1halfCount) && (ps3==StdPS3Count) && (afr==StdAFRCount) && (lsll==StdLSLLCount)
				&&(lshh==StdLSHHCount) && (lt==StdLTCount) &&(tt==StdTTCount)&&(wt==StdWTCount)){
			$("#modelDialog1").removeClass("modal-xl");
			 $("#modelDialog1").addClass("modal-md");
			 $("#modelTitle1").html("Message box");
			 $("#modelBody1").html("<b>Click on 'Next level' button.</b>");
			$("#modelBody1").css("color","green");
			$("#tt,#ft,#pt,#lt,#lsl,#lsh,#tsh,#tsl,#vfd,#psh,#plc,#scr,#verifyInstr,#ps1,#ps1Half,#ps3,#afr,#lshh,#lsll,#lt,#tt,#wt").prop("disabled",true);
			addToMasterJson();
		
			flag=1;
			htm=''
				+'<div class="col-sm-12" >'
				+"<img src='images/BP_withSensor.png' class='img-fluid' id='partB1' style=' width: 10%;height:10%;position: relative; margin: 20px;'  >"
				+'</div>'
			  $("#diagram").html(htm);
			  $("#partB1").animate(
			           {
					            width: "90%",
					            height: "80%",
					           left: "+=10px",
		//			            background-color:"red"
					          },
					          1000,
					          
					        );
				$("#nextLevel2").prop("hidden",false);
		}
		else{
			
			
			perPS1Count=parseFloat((ps1*100)/StdPS1Count);
			perPS1halfCount=parseFloat((ps1Half*100)/StdPS1halfCount);
			perPS3Count=parseFloat((ps3*100)/StdPS3Count);
			perAFRCount=parseFloat((afr*100)/StdAFRCount);
			perLSLLCount=parseFloat((lsll*100)/StdLSLLCount);
			perLSHHCount=parseFloat((lshh*100)/StdLSHHCount);
			perLTCount=parseFloat((lt*100)/StdLTCount);
			perTTCount=parseFloat((tt*100)/StdTTCount);
			perWTCount=parseFloat((wt*100)/StdWTCount);
			
			totalComp1= perPS1Count+ perPS3Count+perPS1halfCount+perAFRCount+perLSHHCount+perLSLLCount+perLTCount+perTTCount+perWTCount;
			  avg=parseInt(totalComp1/9);
			  
			  console.log(" avg "+avg);
			
				 $("#modelDialog1").removeClass("modal-xl");
				$("#modelDialog1").addClass("modal-md");
				
				if((StdPS1Count<ps1)||(StdPS1halfCount<ps1Half)||(StdPS3Count<ps3)||(StdAFRCount<afr)||(StdLSLLCount<lsll)||(StdLSHHCount<lshh)||(StdLTCount<lt)||(StdTTCount<tt)|| (StdWTCount<wt)){
					
					$("#modelBody1").css("color","red"); 
					$("#modelTitle1").html("Error box");
					$("#modelBody1").html("<b>More components than expected.</b>");
				}else
					{
						if(avg<100){
							$("#modelTitle1").html("Message box");
							$("#modelBody1").css("color","red");
							 $("#modelBody1").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody1").css("color","red");
							$("#modelTitle1").html("Error box");
							 $("#modelBody1").html("<b>More components than expected. </b>");
						}
					}
				
		}
		
	}
	function addToMasterJson()
	{
		tempMasterJsonInstr = {
				"PS1":"1",
				"PS3":"1",
				"PS1HALF":"1",
				"AFR":"1",
				"LSHH":"3",
				"LSLL":"3",
				"LT":"4",
				"TT":"2",
				"WT":"1",
			
				};
				
		InstrMasterJson.Instrument=tempMasterJsonInstr;
		console.log(InstrMasterJson);
		resultJson.instrument=instrActualCount;
		console.log(resultJson);
	}
	$("#nextLevel2").click(function(){
		if(flag==1){
			BatchProcessBottleFillingSquActivities();
		}
	
	});
	
	
	
}

