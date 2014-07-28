function simulateClick(elem, ctrlKey, altKey, shiftKey, metaKey){
  if(elem.target == "_blank") //chrome extensions can't open the _blank target in the new tab as users clicking.
  {
    var elem2 = document.createElement('A');
    elem2.href = elem.href;
    elem = elem2;
    ctrlKey = true;
  }

  var event = document.createEvent("MouseEvents");
  event.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, ctrlKey, altKey, shiftKey, metaKey, 0, null);
  elem.dispatchEvent(event);
}

if(typeof(jQuery) !== 'undefined'){
  (function($){
    $.fn.simulateClick = $.fn.simulate_click = function(ctrlKey, altKey, shiftKey, metaKey){
      //only for chrome extensions
      this.each(function(_, elem){
        simulateClick(elem, ctrlKey, altKey, shiftKey, metaKey);
      });
      
      return this;
    };
  })(jQuery);
}
