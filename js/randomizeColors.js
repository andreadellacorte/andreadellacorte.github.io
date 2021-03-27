$(document).ready(function() {
  function rgba(rgb, alpha) {
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
  };

  let root = document.documentElement;

  let link = document.querySelector('#randomizeColors');

  link.addEventListener('click', function () {
    var url = "http://colormind.io/api/";
    var data = {
      model : "default"
    }

    var http = new XMLHttpRequest();

    var palette;

    http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
        palette = JSON.parse(http.responseText).result;

        root.style.setProperty('--body-color', rgba(palette[1], 1.0));
        root.style.setProperty('--background-color', rgba(palette[0], 1.0));
        root.style.setProperty('--font-color', rgba(palette[2], 1.0));
        root.style.setProperty('--border-color', rgba(palette[3], 1.0));
        root.style.setProperty('--link-color', rgba(palette[3], 1.0));
        root.style.setProperty('--accent-color', rgba(palette[4], 1.0));

        const accentColor = getComputedStyle(root).getPropertyValue('--accent-color');

        $('h1').querySelectorAll('svg').forEach(function(element) {
          element.parentNode.removeChild(element);
        });

        const annotateNav = RoughNotation.annotate($('#selected-page'), { type: 'underline', color: accentColor, padding: 4 });
        RoughNotation.annotationGroup([annotateNav]).show();
      }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  });
});