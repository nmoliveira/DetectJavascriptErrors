// By: Nuno Oliveira
// https://github.com/nmoliveira/DetectJavascriptErrors

var DetectJavascriptErrors = function() {
  // @stopDefaultHandler: if set to true the default errror handler won't be fired 
  var start = function(stopDefaultHandler) {
    window.onerror = function(message, url, lineNumber) {  
      // handle error as you want
      alert('Javascript Errors Detected!!');
      return stopDefaultHandler;
    }; 
  };
  return {
    start: start
  }   
}();
