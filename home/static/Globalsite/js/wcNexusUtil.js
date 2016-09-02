    function isElementInViewport (el) {
        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
    // B >= H && T >= 0 ------------完全显示
    // 0 < B < H || 0 < T < -H ------------没显示完
    // B <= 0 && T <= -H  ------------完全没显示         
        //底下的这一个return是针对只要有一点没显示完就触发
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        
    }   
    function isElementDisappeared (el) {
        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
    // B >= H && T >= 0 ------------完全显示
    // 0 < B < H || 0 < T < -H ------------没显示完
    // B <= 0 && T <= -H  ------------完全没显示         

        //针对完全不见了才触发（没考虑左右）
        return (
            rect.top <= -rect.height &&
            rect.bottom <= 0
        );
    }
    /*  CSRF-config Start */
// $.ajaxSetup({ 
//      beforeSend: function(xhr, settings) {
//          function getCookie(name) {
//              var cookieValue = null;
//              if (document.cookie && document.cookie != '') {
//                  var cookies = document.cookie.split(';');
//                  for (var i = 0; i < cookies.length; i++) {
//                      var cookie = jQuery.trim(cookies[i]);
//                      // Does this cookie string begin with the name we want?
//                      if (cookie.substring(0, name.length + 1) == (name + '=')) {
//                          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                          break;
//                      }
//                  }
//              }
//              return cookieValue;
//          }
//          if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
//              // Only send the token to relative URLs i.e. locally.
//              xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
//          }
//      } 
// });
// $(document).ajaxSend(function( event, xhr, settings ) {
//     if (settings.type == 'POST' || settings.type == 'PUT' || settings.type == 'DELETE') {
//         function getCookie(name) {
//             var cookieValue = null;
//             if (document.cookie && document.cookie != '') {
//                 var cookies = document.cookie.split(';');
//                 for (var i = 0; i < cookies.length; i++) {
//                     var cookie = jQuery.trim(cookies[i]);
//                     // Does this cookie string begin with the name we want?
//                     if (cookie.substring(0, name.length + 1) == (name + '=')) {
//                         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                         break;
//                     }
//                 }
//             }
//             return cookieValue;
//         }
//         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
//             // Only send the token to relative URLs i.e. locally.
//             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
//         }
//     }
// });
    /*  CSRF-config End */    