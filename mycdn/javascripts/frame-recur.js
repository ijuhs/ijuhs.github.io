/* //sample usage
frameRecur(window, function(f){
  f.document.documentElement.lang = 'ja';
});
*/

function frameRecur(win, fn){
  fn(win);
  var fs = win.frames;
  if(!fs)
    return false;
  for(var i = 0; i < fs.length; ++i){
    var f = fs[i];
    frameRecur(f, fn);
  }

  return true;
}
