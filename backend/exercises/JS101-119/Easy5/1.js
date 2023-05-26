/*
input : floating point number representing an angle in degrees
output : convert that floating point to degrees minutes seconds as string

algo:
first convert floating point degree to seconds and round down to integer
60 minutes in a degree, 60 seconds in a minute
divide seconds by 3600 and round down to get degree
what remains of the seconds, divide by 60 and round down to get minute
what remains of the seconds, report as seconds
stitch together into string
*/

function dms(degrees) {
  let allSeconds = Math.floor(degrees * 3600);
  let degree = Math.floor(allSeconds / 3600);
  let minSeconds = allSeconds - (degree * 3600);
  let minute = Math.floor(minSeconds / 60);
  let secSeconds = minSeconds - (minute * 60);
  let outStr = degree + "°" + minute + "'" + secSeconds + '"';
  return outStr;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"