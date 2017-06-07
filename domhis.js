// Filename: domhis.js
// Timestamp: 2017.06.07-12:40:47 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)
//
// https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history
// second param to pushState is ignored by firefox, the 'title' parameter
//

let domhis = module.exports = ((win, loc, his, ispopping) => {

  win = typeof window === 'object' ? window : {};
  loc = win.location;
  his = win.history,
  ispopping = false;

  return {
    pushState : (uri, obj) => {
      if (!ispopping && typeof uri === 'string') {
        if (typeof his === 'object') {
          his.pushState(obj || { uri : uri }, '', uri);
        } else {
          loc.href = loc.origin + uri.replace(/^([^\/])/, '/$1');
        }
      }
    },

    onpopstate : (fn) => {
      if (typeof fn === 'function' && his) {
        win.onpopstate = e => {
          if (e.state && e.state.uri) {
            ispopping = true;
            fn(e.state.uri, () => ispopping = false);
          }
        };
      }
    }
  };
  
})();











