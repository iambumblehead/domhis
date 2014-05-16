

(function () {

  return window.test = {
    init : function () {
      var homeLinkElem = document.getElementById('HomeLink'),
          contactLinkElem = document.getElementById('ContactLink');
      
      homeLinkElem.onclick = function (e) {
        e.preventDefault();
        domhis.pushState('/');
      };

      contactLinkElem.onclick = function (e) {
        e.preventDefault();
        domhis.pushState('/contact');
      };

      domhis.onpopstate(function (e, fn) {
        console.log('pop state ', e);
        fn();
      });

    }
  };

}());

