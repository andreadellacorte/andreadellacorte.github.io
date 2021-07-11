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

  document.querySelector('meta[name="theme-color"]').setAttribute("content", palette.linkColor);
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
  // https://lospec.com/palette-list/robots-are-cool
  robots: {
    backgroundColor: rgba(hexToRgb('251d29'), 1.0),
    borderColor: rgba(hexToRgb('778299'), 1.0),
    bodyColor: rgba(hexToRgb('433d4c'), 1.0),
    linkColor: rgba(hexToRgb('ffffff'), 1.0),
    accentColor: rgba(hexToRgb('778299'), 1.0),
    fontColor: rgba(hexToRgb('fbcdcd'), 1.0)
  },
  // http://futureland.tv
  futureland: {
    bodyColor: rgba(hexToRgb('000000'), 1.0),
    backgroundColor: rgba(hexToRgb('000000'), 1.0),
    fontColor: rgba(hexToRgb('ffc0c0'), 1.0),
    borderColor: rgba(hexToRgb('ffffff'), 1.0),
    linkColor: rgba(hexToRgb('ffffff'), 1.0),
    accentColor: rgba(hexToRgb('9a98ff'), 1.0)
  },
  // https://lospec.com/palette-list/funtime5
  funtime: {
    backgroundColor: rgba(hexToRgb('ffd090'), 1.0),
    borderColor: rgba(hexToRgb('e07ab3'), 1.0),
    bodyColor: rgba(hexToRgb('382b00'), 1.0),
    linkColor: rgba(hexToRgb('e07ab3'), 1.0),
    accentColor: rgba(hexToRgb('716cb0'), 1.0),
    fontColor: rgba(hexToRgb('79e0cf'), 1.0)
  },
  // https://www.musicforprogramming.net/
  music: {
    backgroundColor: rgba(hexToRgb('00303e'), 1.0),
    borderColor: rgba(hexToRgb('66D9EF'), 1.0),
    bodyColor: rgba(hexToRgb('00303e'), 1.0),
    linkColor: rgba(hexToRgb('ec007c'), 1.0),
    accentColor: rgba(hexToRgb('ae81ff'), 1.0),
    fontColor: rgba(hexToRgb('f8f8f2'), 1.0)
  },
  hilda: {
    backgroundColor: rgba(hexToRgb('ffd090'), 1.0),
    borderColor: rgba(hexToRgb('e07ab3'), 1.0),
    bodyColor: rgba(hexToRgb('382b00'), 1.0),
    linkColor: rgba(hexToRgb('e07ab3'), 1.0),
    accentColor: rgba(hexToRgb('716cb0'), 1.0),
    fontColor: rgba(hexToRgb('79e0cf'), 1.0)
  },
  // WIP - hilda on netflix
  // purple 596088 // dark mauve F6C992 // mauve FADFCC // brown 9C6853 // light blue 78A8AE
  // red D55C5A
  hilda1: {
    bodyColor: rgba(hexToRgb('80b9b9'), 1.0),
    backgroundColor: rgba(hexToRgb('D55C5A'), 1.0),
    fontColor: rgba(hexToRgb('596088'), 1.0),
    borderColor: rgba(hexToRgb('596088'), 1.0),
    linkColor: rgba(hexToRgb('F6C992'), 1.0),
    accentColor: rgba(hexToRgb('D55C5A'), 1.0)
  },
  hilda2: {
    bodyColor: rgba(hexToRgb('d8584e'), 1.0),
    backgroundColor: rgba(hexToRgb('596088'), 1.0),
    fontColor: rgba(hexToRgb('f8c08a'), 1.0),
    borderColor: rgba(hexToRgb('78A8AE'), 1.0),
    linkColor: rgba(hexToRgb('80b9b9'), 1.0),
    accentColor: rgba(hexToRgb('596088'), 1.0)
  },
  hilda3: {
    bodyColor: rgba(hexToRgb('d8584e'), 1.0),
    backgroundColor: rgba(hexToRgb('8e4f39'), 1.0),
    fontColor: rgba(hexToRgb('f8c08a'), 1.0),
    borderColor: rgba(hexToRgb('c09651'), 1.0),
    linkColor: rgba(hexToRgb('80b9b9'), 1.0),
    accentColor: rgba(hexToRgb('c09651'), 1.0)
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
  createCookie('palette','music', 31);
  setPalette(palettes[readCookie('palette')]);
}

$(document).ready(function() {
  switch(readCookie('palette')) {
    case 'dark':
      paletteRobots.style.display = "none";
      paletteDark.style.display = "none";
      paletteFuntime.style.display = "none";
      paletteFutureland.style.display = "none";
      paletteMusic.style.display = "none";

      paletteLight.addEventListener('click', () => {
        createCookie('palette','light',31);
        location.reload();
      });
      break;
    case 'light':
      paletteLight.style.display = "none";
      paletteDark.style.display = "none";
      paletteFuntime.style.display = "none";
      paletteFutureland.style.display = "none";
      paletteMusic.style.display = "none";

      paletteRobots.addEventListener('click', () => {
        createCookie('palette','robots',31);
        location.reload();
      });
      break;
    case 'robots':
      paletteRobots.style.display = "none";
      paletteLight.style.display = "none";
      paletteDark.style.display = "none";
      paletteFutureland.style.display = "none";
      paletteMusic.style.display = "none";

      paletteFuntime.addEventListener('click', () => {
        createCookie('palette','funtime',31);
        location.reload();
      });
      break;
    case 'funtime':
      paletteRobots.style.display = "none";
      paletteLight.style.display = "none";
      paletteFuntime.style.display = "none";
      paletteDark.style.display = "none";
      paletteMusic.style.display = "none";

      paletteFutureland.addEventListener('click', () => {
        createCookie('palette','futureland',31);
        location.reload();
      });
      break;
    case 'futureland':
      paletteLight.style.display = "none";
      paletteFuntime.style.display = "none";
      paletteFutureland.style.display = "none";
      paletteRobots.style.display = "none";
      paletteDark.style.display = "none";

      paletteMusic.addEventListener('click', () => {
        createCookie('palette','music',31);
        location.reload();
      });
      break;
    case 'music':
      paletteLight.style.display = "none";
      paletteFuntime.style.display = "none";
      paletteFutureland.style.display = "none";
      paletteRobots.style.display = "none";
      paletteMusic.style.display = "none";

      paletteDark.addEventListener('click', () => {
        createCookie('palette','dark',31);
        location.reload();
      });
      break;
  };

  let randomizeColors = document.querySelector('#randomizeColors');

  if(randomizeColors) {
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
  }
});
