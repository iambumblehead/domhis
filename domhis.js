// Filename: domhis.js
// Timestamp: 2017.06.07-12:40:47 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)

let ispopping = false

const pushState = (win, obj, title, uri) => {
  if (win && !ispopping && typeof uri === 'string') {
    if (typeof win.history === 'object') {
      win.history.pushState(obj || { uri: uri }, title || '', uri)
    } else {
      // ensure forward slash
      win.location.href = win.location.origin + uri.replace(/^([^\/])/, '/$1');
    }
  }
}

const onpopstate = (win, fn) => {
  if (win && typeof fn === 'function') {
    // jsdom does not support popstate well
    win.addEventListener('popstate', e => {
      if (e.state && e.state.uri) {
        ispopping = true
        fn(e.state.uri, () => ispopping = false)
      }
    })
  }
}

export default {
  pushState,
  onpopstate
}











