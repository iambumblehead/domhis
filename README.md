domhis
======
**(c)[Bumblehead][0], 2014** [MIT-license](#license)

### OVERVIEW:

`domhis` is a wrapper for the [`window.history`][1] method. Environments that provide `window.history` will use `window.history.pushState` to update a window location with a url, otherwise the url is defined on `window.location.href` (loading a new document).

```javascript
// change the url
domhis.pushState('/home');

// getting the url when the 'back' button is pressed
domhis.onpopstate(function (e, fn) {
  console.log(e); // /home
  fn();
});
```

When popstate occurs (back button press in a browser) the new url is passed to a callback. Until 'fn' is called, pushState will not update the location. This means that if a user clicks the 'back' button on your single page application, automated calls to pushState from it will be ignored so that clicking 'back' does not add an unwanted url to the push queue.

[0]: http://www.bumblehead.com                            "bumblehead"
[1]: https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history "history"

---------------------------------------------------------
#### <a id="install"></a>Install:

domhis may be downloaded directly or installed through `npm`.

 * **npm**

 ```bash
 $ npm install domhis
 ```

 * **Direct Download**
 
 ```bash
 $ git clone https://github.com/iambumblehead/domhis.git
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

Tests are not automated and are performed by loading a document in the browser.

- load `test/index.html` in your browser and run tests from the console.


---------------------------------------------------------
#### <a id="license">License:

![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2014 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
