//
// Define arras of sensors
var sensorsAll = ["position1", "position2", "position3", "position4",
                  "position5", "position6", "position7", "position8"];

var sensors1 = ["position1", "position2", "position3"];
var sensors2 = ["position3", "position5", "position8"];
var sensors3 = ["position2", "position7", "position8"];

var groups = [{id:"group1", color:"#ff0000", sensors:sensors1},
              {id:"group2", color:"#00ff00", sensors:sensors2},
              {id:"group3", color:"#1144dd", sensors:sensors3}];

// active group
var activeSensors = sensors1;
var activeGroup = groups[0];
$("#"+activeGroup.id).data('clicked', true);

// Sensor group 1
for (var i=0;i<groups.length;i++){
  // Define the current group
  let group_i = $("#"+groups[i].id);
  // add events:
  group_i.on("mouseover", mouseOver);
  group_i.on("mouseout", mouseOut);
  group_i.on("click", groups[i], mouseClick);
}

function mouseOver() {
  $(this).fadeTo("fast",1.0);
}

function mouseOut() {
  if ($(this).data('clicked')){
    $(this).fadeTo("fast",1.0);
  } else{
    $(this).fadeTo("fast",0.5);
  }
}

function mouseOver2() {
  $(this).fadeTo("fast",0.8);
  $(this).css({strokeWidth:"2px"});
}

function mouseOut2() {
  $(this).fadeTo("fast",1.0);
  $(this).css({strokeWidth:"1px"});
}

function mouseClick(event) {
  $(this).data('clicked', true);
  $("#"+activeGroup.id).data('clicked', false);
  $("#"+activeGroup.id).fadeTo("fast",0.5);
  //
  let obj = event.data;
  activeGroup = obj;
  //
  activateSensors(obj);
}

function activateSensors(obj) {
  if ( typeof activeSensors !== 'undefined'){
    let currSensors = difference(activeSensors, obj.sensors);
    for (var i=0;i<=currSensors.length;i++){
      let sensor = document.getElementById(currSensors[i]);
      $(sensor).fadeOut();
    }

  }
  //
  for (var i=0;i<=obj.sensors.length;i++){
    let sensor = $("#"+obj.sensors[i]);
    sensor.css({"fill":obj.color});
    sensor.fadeIn();
    // Add event listeners to each active sensor
    sensor.on("mouseover", mouseOver2);
    sensor.on("mouseout", mouseOut2);
  }
  activeSensors = obj.sensors;
}

function difference(array1, array2){
  // initiate array
  let diff = array1.slice();
  // loop over the two arrays to find the elements that are equal
  for (var i=0;i<array1.length;i++){
    for (var j=0;j<array2.length;j++) {
      if (array1[i] == array2[j]){
        // find the index where the value is
        let index = diff.indexOf(array1[i]);
        diff.splice(index, 1);
      }
    }
  }
  return diff;
}

// Things to do at page load
window.onload = function() {
  for (var i=0;i<sensorsAll.length;i++){
    let sensor = document.getElementById(sensorsAll[i]);
    //sensor.setAttribute("opacity","0.0")
    $("#"+sensorsAll[i]).hide();
  }

  let group2 = document.getElementById('group2');
  group2.setAttribute("opacity","0.5");

  let group3 = document.getElementById('group3');
  group3.setAttribute("opacity","0.5");

  activateSensors(activeGroup);
}


