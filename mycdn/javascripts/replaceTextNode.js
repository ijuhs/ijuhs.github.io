//userRetex should have "g" flag.
//userReplaceFunc is a function which returns a new element with which a matched element is replaced.
function replaceTextNode(userRegex, userReplaceFunc){
  var excludeTags = ['a', 'head', 'noscript', 'option', 'script', 'style', 'title', 'textarea'];
  var textNodeXpath = ".//text()[not(ancestor::"+excludeTags.join(') and not(ancestor::')+")]";
  var allTextNodes = document.evaluate(textNodeXpath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

  for(var i = 0; i < allTextNodes.snapshotLength; ++i){
    var node = allTextNodes.snapshotItem(i);
    var text = node.textContent;
    var pos = 0, match;
    var spanReplaceWith = null;

    while((match = userRegex.exec(text)) !== null){
      if(!spanReplaceWith)
        spanReplaceWith = document.createElement('span');
      spanReplaceWith.appendChild(document.createTextNode(text.substring(pos, match.index))); //appends a text before replaced one.
      spanReplaceWith.appendChild(userReplaceFunc(match));
      pos = match.index + match[0].length;
    }
    if(spanReplaceWith){
      spanReplaceWith.appendChild(document.createTextNode(text.substring(pos, text.length))); //appends the rest.
      try {
        node.parentNode.replaceChild(spanReplaceWith, node);
      }catch(e){
        console.error(e);
        console.log(node);
      }
    }
  }
}
