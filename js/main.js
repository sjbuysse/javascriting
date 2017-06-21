function template(str, delims = {open: '*(', close: ')*'}) {

  var oLength = delims.open.length;
  var cLength = delims.close.length;
  var templateString = [];
  var functionArguments = [];
  var theVariable;
  var remaining;

  // when we'll pass the templateString the constructor function, it will remove all quotes, 
  // so we need to wrap everything that's a string in another set of quotes so that it remains a string.
  function wrapInQuotes(text) {
    return "'" + text + "'";
  }
  // split the str in segments to replace the delimiters (and the content) with a variable
  var segments = str.split(delims.open);
  templateString.push(wrapInQuotes(segments[0]));

  for(var i=1, len= segments.length; i<len; i++) {
    // remove the opening delimiters
    var currentSegment = segments[i];
    currentSegment = currentSegment.slice(oLength);
    var closeIndex = currentSegment.indexOf(delims.close);
    theVariable = currentSegment.slice(0, closeIndex);
    // we don't put the variable in extra quotes, as we want it to be a variable.
    templateString.push(theVariable);
    functionArguments.push(theVariable);
    remaining = currentSegment.slice(closeIndex + cLength);
    templateString.push(wrapInQuotes(remaining));
  }

  templateString = 'while(times--){console.log('+templateString.join('+') +')}';
  console.log(functionArguments.join(','));

  if(functionArguments.length>0) {
      return new Function(functionArguments.join(','), 'times', templateString);
  } else {
      return new Function('times', templateString);
  }
}

