/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/moment-precise-range-plugin@1.3.0/moment-precise-range.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
if(void 0===moment&&"function"==typeof require)var moment=require("moment");!function(e){function n(e,n){return e+" "+r[n+(1===e?"":"s")]}function t(e,n,t,r,s,o,u){return{years:e,months:n,days:t,hours:r,minutes:s,seconds:o,firstDateWasLater:u}}var r={nodiff:"",year:"year",years:"years",month:"month",months:"months",day:"day",days:"days",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds",delimiter:" "};e.fn.preciseDiff=function(n,t){return e.preciseDiff(this,n,t)},e.preciseDiff=function(s,o,u){var i,a=e(s),f=e(o);if(a.add(f.utcOffset()-a.utcOffset(),"minutes"),a.isSame(f))return u?t(0,0,0,0,0,0,!1):r.nodiff;if(a.isAfter(f)){var m=a;a=f,f=m,i=!0}else i=!1;var d=f.year()-a.year(),h=f.month()-a.month(),c=f.date()-a.date(),y=f.hour()-a.hour(),p=f.minute()-a.minute(),v=f.second()-a.second();if(v<0&&(v=60+v,p--),p<0&&(p=60+p,y--),y<0&&(y=24+y,c--),c<0){var D=e(f.year()+"-"+(f.month()+1),"YYYY-MM").subtract(1,"M").daysInMonth();c=D<a.date()?D+c+(a.date()-D):D+c,h--}return h<0&&(h=12+h,d--),u?t(d,h,c,y,p,v,i):function(e,t,s,o,u,i){var a=[];return e&&a.push(n(e,"year")),t&&a.push(n(t,"month")),s&&a.push(n(s,"day")),o&&a.push(n(o,"hour")),u&&a.push(n(u,"minute")),i&&a.push(n(i,"second")),a.join(r.delimiter)}(d,h,c,y,p,v)}}(moment);
//# sourceMappingURL=/sm/7d8794e9b5f3504b14b2e927010bb924dc20b28f22ce869c3487ef0b9eedae3c.map