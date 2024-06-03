/*
//usage
doitagain_querySelector('#id' (a)=>{a.focus();});
*/

function doitagain(f1, f2, wait = 100){
  function doit(){
    const a = f1();
    if(!a){
      setTimeout(doit, wait);
      return;
    }
    f2(a);
  }
  doit();
}

function doitagain_querySelector(selector, f, wait = 100){
  doitagain(()=>document.querySelector(selector), f, wait);
}
