DetectJavascriptErrors
======================

#####Global event handler for runtime script errors.

######How it works:

1. Just start the detection:

```javascript
 DetectJavascriptErrors.start(true);  
```
2. When a script error is detected it will trigger our function.

```javascript
// call to undefined function
thisWillAlertForJavascriptError();
```
