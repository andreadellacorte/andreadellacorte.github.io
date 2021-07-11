// When the user scrolls the page, execute progress()
window.onscroll = function() {progress()};

function progress() {
  const linkColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--link-color');

  const fontColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--font-color');

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var scrolled = (winScroll / height) * 100;

  document.getElementById("myBar").style.width = scrolled + "%";
  document.getElementById("myBar").style.backgroundColor = scrolled > 99 ? linkColor : fontColor;
}
