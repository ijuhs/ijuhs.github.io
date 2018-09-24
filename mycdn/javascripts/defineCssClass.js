function defineCssClass(cssString){
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = cssString;
  document.getElementsByTagName('head')[0].appendChild(style);
  return style;
}

function defineCssClassOnce(styleId, cssString){
  if(!document.getElementById(styleId))
    defineCssClass(cssString).id = styleId;
}

