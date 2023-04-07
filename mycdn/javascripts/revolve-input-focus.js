function revolveInputFocus(rev)
{
  function set_focus_to_input(inpt)
  {
    inpt.focus();
    inpt.select();
    return document.activeElement === inpt;
  }
  function set_focus_loop(inpts)
  {
    $.each(inpts, function(_, inpt){
      if(set_focus_to_input(inpt))
        return false;
    });
  }

  var is = $('input:not([type]),input[type=text],input[type=email],input[type=url],input[type=number],input[type=search],input[type=password],textarea').toArray(); //really nothing such a selector? See a comment of Ron Lussier in http://api.jquery.com/text-selector/.
  var iof = _.indexOf(is, document.activeElement);
  set_focus_loop(rev
                 ? is.slice(0, iof).reverse().concat(is.slice(iof + 1).reverse())
                 : is.slice(iof + 1).concat(is.slice(0, iof)));
}
