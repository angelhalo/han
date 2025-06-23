var WebRootPath;
var imeServer = "https://fntws.aaa.com.tw/wf/";

var waifForEnv = setInterval(() => {
if(window.baseUrl !== undefined) {
       clearInterval(waifForEnv);
       if (typeof WebRootPath == "undefined") {
       WebRootPath = window.baseUrl + "js/";
       var jscript = document.createElement('script');
       jscript.setAttribute('lang', 'text/javascript');
       jscript.setAttribute('src', WebRootPath+'hanlinks/wf_links.js');
       document.getElementsByTagName('head').item(0).appendChild(jscript);
       }
}
}, 50);