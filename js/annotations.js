$(document).ready(function() {
  const $ = (t) => document.querySelector(t);
  const annotateNav = RoughNotation.annotate($('#selected-page'), { type: 'underline', color: '#F34A71', padding: 4 });
  RoughNotation.annotationGroup([annotateNav]).show();
})
