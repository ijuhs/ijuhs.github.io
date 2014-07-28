$.expr[':'].exact = function(obj, index, meta, stack){  
    return $(obj).text() === meta[3];
  };
