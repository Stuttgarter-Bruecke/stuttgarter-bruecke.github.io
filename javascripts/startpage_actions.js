window.onload = function() {
  var zone31 = document.getElementById('zone3-1');
  zone31.setAttribute('opacity', '0.1');
  var zone32 = document.getElementById('zone3-2');
  zone32.setAttribute('opacity', '0.1');
  var zone33 = document.getElementById('zone3-3');
  zone33.setAttribute('opacity', '0.1');
  var zone21 = document.getElementById('zone2-1');
  zone21.setAttribute('opacity', '0.1');
  var zone22 = document.getElementById('zone2-2');
  zone22.setAttribute('opacity', '0.1');
  var zone23 = document.getElementById('zone2-3');
  zone23.setAttribute('opacity', '0.1');
  var zone11 = document.getElementById('zone1-1');
  zone11.setAttribute('opacity', '0.1');
  var zone12 = document.getElementById('zone1-2');
  zone12.setAttribute('opacity', '0.1');
  var zone13 = document.getElementById('zone1-3');
  zone13.setAttribute('opacity', '0.1');
  var zone14 = document.getElementById('zone1-4');
  zone14.setAttribute('opacity', '0.1');
  var zonebars = document.getElementById('path-bars');
  zonebars.setAttribute('opacity', '0.5');

  // Sensor Holzfeuchte Stoß
  zone11.addEventListener("mouseover", mouseOver);
  zone11.addEventListener("mouseout", mouseOut);
  zone11.addEventListener("click", function() {
    window.top.location.href = "/blog/Feuchte-integraler-stoss";
  }, false);

  // Sensor tau integraler Stoß
  zone12.addEventListener("mouseover", mouseOver);
  zone12.addEventListener("mouseout", mouseOut);
  zone12.addEventListener("click", function() {
    window.top.location.href = "/#";
  }, false);

  // Sensor Dehnungen_M integraler Stoß
  zone13.addEventListener("mouseover", mouseOver);
  zone13.addEventListener("mouseout", mouseOut);
  zone13.addEventListener("click", function() {
    window.top.location.href = "/blog/Dehnungen-integraler-stoss";
  }, false);

  // Sensor Dehnungen integraler Stoß
  zone14.addEventListener("mouseover", mouseOver);
  zone14.addEventListener("mouseout", mouseOut);
  zone14.addEventListener("click", function() {
    window.top.location.href = "/blog/Dehnungen-integraler-stoss";
  }, false);

  // Sensor relative Feuchtigkeit oben
  zone21.addEventListener("mouseover", mouseOver);
  zone21.addEventListener("mouseout", mouseOut);
  zone21.addEventListener("click", function() {
    window.top.location.href = "/blog/Temperatur_1";
  }, false);

  // Sensor Temperatur oben
  zone22.addEventListener("mouseover", mouseOver);
  zone22.addEventListener("mouseout", mouseOut);
  zone22.addEventListener("click", function() {
    window.top.location.href = "/blog/Temperatur_1";
  }, false);

  // Sensor Holzfeuchte oben
  zone23.addEventListener("mouseover", mouseOver);
  zone23.addEventListener("mouseout", mouseOut);
  zone23.addEventListener("click", function() {
    window.top.location.href = "/blog/feuchtigkeit_1";
  }, false);

  // Sensor relative Feuchtigkeit
  zone31.addEventListener("mouseover", mouseOver);
  zone31.addEventListener("mouseout", mouseOut);
  zone31.addEventListener("click", function() {
    window.top.location.href = "/blog/Temperatur_1";
  }, false);

  // Sensor Temperatur
  zone32.addEventListener("mouseover", mouseOver);
  zone32.addEventListener("mouseout", mouseOut);
  zone32.addEventListener("click", function() {
    window.top.location.href = "/blog/Temperatur_1";
  }, false);

  // Sensor Temperatur
  zone33.addEventListener("mouseover", mouseOver);
  zone33.addEventListener("mouseout", mouseOut);
  zone33.addEventListener("click", function() {
    window.top.location.href = "/blog/feuchtigkeit_1";
  }, false);

  // Sensor Stangen
  zonebars.addEventListener("mouseover", mouseOver);
  zonebars.addEventListener("mouseout", mouseOut);
  zonebars.addEventListener("click", function() {
    window.top.location.href = "/blog/kraft-im-integraler-stoss";
  }, false);

  function mouseOver() {
    this.setAttribute('opacity','0.9');
  }
  function mouseOut() {
    this.setAttribute('opacity','0.1');
  }
}

