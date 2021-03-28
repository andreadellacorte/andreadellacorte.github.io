$(document).ready(function() {
  function rgba(rgb, alpha) {
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
  };

  function setPalette(palette) {
    let root = document.documentElement;

    root.style.setProperty('--body-color', palette.bodyColor);
    root.style.setProperty('--background-color', palette.backgroundColor);
    root.style.setProperty('--font-color', palette.fontColor);
    root.style.setProperty('--border-color', palette.borderColor);
    root.style.setProperty('--link-color', palette.linkColor);
    root.style.setProperty('--accent-color', palette.accentColor);

    document.querySelector('h1').querySelectorAll('svg').forEach(function(element) {
      element.parentNode.removeChild(element);
    });

    const annotateNav = RoughNotation.annotate(
      document.querySelector('#selected-page'),
      { type: 'underline', color: palette.accentColor, padding: 4 });
    RoughNotation.annotationGroup([annotateNav]).show();
  };

  let link = document.querySelector('#randomizeColors');

  link.addEventListener('click', function () {
    var url = "http://colormind.io/api/";
    var data = {
      model : "default",
      input : ["N","N","N","N","N"]
    };

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
        var result = JSON.parse(http.responseText).result;

        var palette = {
          bodyColor: rgba(result[1], 1.0),
          backgroundColor: rgba(result[0], 1.0),
          fontColor: rgba(result[2], 1.0),
          borderColor: rgba(result[3], 1.0),
          linkColor: rgba(result[3], 1.0),
          accentColor: rgba(result[4], 1.0)
        };

        setPalette(palette);
      }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  });
});