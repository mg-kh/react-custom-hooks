var e=require("react"),t=["load","resize","orientationchange"];exports.usePersistState=function(t,r){var a=e.useState(),n=a[0],s=a[1];return e.useEffect(function(){try{var e=JSON.parse(localStorage.getItem(t));if(e)s(e);else{var a=JSON.stringify(r);localStorage.setItem(t,a),s(r)}}catch(e){return console.error(e),r}},[]),[n,function(e){try{var r="function"==typeof e?e(n):e;s(r);var a=JSON.stringify(r);localStorage.setItem(t,a)}catch(e){console.error(e)}}]},exports.useScreenSizes=function(){var r=useState(0),a=r[0],n=r[1],s=useState(0),i=s[0],o=s[1],c=e.useMemo(function(){var e="";switch(!0){case a>=0&&a<=320:e="xs";break;case a>=320&&a<=640:e="sm";break;case a>=640&&a<=768:e="md";break;case a>=768&&a<=1024:e="lg";break;case a>=1024&&a<=1280:e="xl";break;case a>=1280&&a<=1536:e="2xl";break;default:e="_"}return e},[a]);return e.useEffect(function(){t.map(function(e){window.addEventListener(e,function(){n(window.innerWidth),o(window.innerHeigh)})})},[]),{size:c,width:a,height:i}};
