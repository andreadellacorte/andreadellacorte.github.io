function rgba(rgb, alpha) {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
};

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
};

function setPalette(palette) {
  let root = document.documentElement;

  root.style.setProperty('--body-color', palette.bodyColor);
  root.style.setProperty('--background-color', palette.backgroundColor);
  root.style.setProperty('--font-color', palette.fontColor);
  root.style.setProperty('--border-color', palette.borderColor);
  root.style.setProperty('--link-color', palette.linkColor);
  root.style.setProperty('--accent-color', palette.accentColor);
};

function redrawAnnotations() {
  const accentColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--accent-color');

  document.querySelector('h1').querySelectorAll('svg').forEach(function(element) {
    element.parentNode.removeChild(element);
  });

  const annotateNav = RoughNotation.annotate(
    document.querySelector('#selected-page'),
    { type: 'underline', color: accentColor, padding: 4 });
  RoughNotation.annotationGroup([annotateNav]).show();
};

var palettes = {
  dark: {
    bodyColor: rgba(hexToRgb('201727'), 1.0),
    backgroundColor: rgba(hexToRgb('261b2e'), 1.0),
    fontColor: rgba(hexToRgb('fd724e'), 1.0),
    borderColor: rgba(hexToRgb('5f2f45'), 1.0),
    linkColor: rgba(hexToRgb('6eb8a8'), 1.0),
    accentColor: rgba(hexToRgb('c6505a'), 1.0)
  },
  light: {
    bodyColor: rgba(hexToRgb('ffffff'), 1.0),
    backgroundColor: rgba(hexToRgb('eeeeee'), 1.0),
    fontColor: rgba(hexToRgb('505050'), 1.0),
    borderColor: rgba(hexToRgb('dddddd'), 1.0),
    linkColor: rgba(hexToRgb('477DB8'), 1.0),
    accentColor: rgba([240,32,80], 0.6)
  },
  // https://lospec.com/palette-list/molten
  molten: {
    bodyColor: rgba(hexToRgb('201727'), 1.0),
    backgroundColor: rgba(hexToRgb('261b2e'), 1.0),
    fontColor: rgba(hexToRgb('fd724e'), 1.0),
    borderColor: rgba(hexToRgb('5f2f45'), 1.0),
    linkColor: rgba(hexToRgb('a02f40'), 1.0),
    accentColor: rgba(hexToRgb('382d43'), 1.0)
  },
  arvind: {
    bodyColor: rgba(hexToRgb('2f142f'), 1.0),
    backgroundColor: rgba(hexToRgb('2a584f'), 1.0),
    fontColor: rgba(hexToRgb('6eb8a8'), 1.0),
    borderColor: rgba(hexToRgb('774448'), 1.0),
    linkColor: rgba(hexToRgb('74a33f'), 1.0),
    accentColor: rgba(hexToRgb('c6505a'), 1.0)
  }
};

if(readCookie('palette')) {
  setPalette(palettes[readCookie('palette')]);
} else {
  createCookie('palette','dark',31);
}

$(document).ready(function() {
  switch(readCookie('palette')) {
    case 'dark':
      paletteDark.style.display = "none";

      paletteLight.addEventListener('click', () => {
        createCookie('palette','light',31);
        location.reload();
      });
      break;
    case 'light':
      paletteLight.style.display = "none";

      paletteDark.addEventListener('click', () => {
        createCookie('palette','dark',31);
        location.reload();
      });
      break;
  };

  let randomizeColors = document.querySelector('#randomizeColors');

  randomizeColors.addEventListener('click', function () {
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