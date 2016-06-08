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

  zone11.addEventListener("mouseover", mouseOver);
  zone11.addEventListener("mouseout", mouseOut);
  zone12.addEventListener("mouseover", mouseOver);
  zone12.addEventListener("mouseout", mouseOut);
  zone13.addEventListener("mouseover", mouseOver);
  zone13.addEventListener("mouseout", mouseOut);
  zone14.addEventListener("mouseover", mouseOver);
  zone14.addEventListener("mouseout", mouseOut);
  zone21.addEventListener("mouseover", mouseOver);
  zone21.addEventListener("mouseout", mouseOut);
  zone22.addEventListener("mouseover", mouseOver);
  zone22.addEventListener("mouseout", mouseOut);
  zone23.addEventListener("mouseover", mouseOver);
  zone23.addEventListener("mouseout", mouseOut);
  zone31.addEventListener("mouseover", mouseOver);
  zone31.addEventListener("mouseout", mouseOut);
  zone32.addEventListener("mouseover", mouseOver);
  zone32.addEventListener("mouseout", mouseOut);
  zone33.addEventListener("mouseover", mouseOver);
  zone33.addEventListener("mouseout", mouseOut);

  function mouseOver() {
    this.setAttribute('opacity','0.9');
  }
  function mouseOut() {
    this.setAttribute('opacity','0.1');
  }
}

