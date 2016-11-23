// Filename: domhis.js
// Timestamp: 2016.11.22-11:21:54 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)
//
// https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history
// second param to pushState is ignored by firefox, the 'title' parameter
//


var domhis = module.exports = (function (win, loc, his) {

  win = typeof window === 'object' ? window : {};
  loc = win.location;
  his = win.history;

  return {
    pushState : function (uri, obj) {
      if (!this.f && typeof uri === 'string') {
        if (typeof his === 'object') {
          his.pushState(obj || { uri : uri }, '', uri);      
        } else {
          loc.href = loc.origin + uri.replace(/^([^\/])/, '/$1');
        }
      }
    },

    onpopstate : function (fn) {
      var that = this;

      if (typeof fn === 'function' && his) {
        win.onpopstate = function (e) {
          that.f = true;
          if (e.state && e.state.uri) {
            fn(e.state.uri, function () {
              that.f = false;
            });
          }
        };
      }
    }
  };
}());











