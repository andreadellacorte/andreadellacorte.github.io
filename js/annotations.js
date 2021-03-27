$(document).ready(function() {
  const accentColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--accent-color');

  const annotateNav = RoughNotation.annotate(document.querySelector('#selected-page'), { type: 'underline', color: accentColor, padding: 4 });
  RoughNotation.annotationGroup([annotateNav]).show();
})
