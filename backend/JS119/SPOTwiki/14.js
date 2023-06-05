/* 3 min on node 19, 5 min on node 10 (replace behavior not the same)
ALGORITHM
=====
replace all "WUB" in string with " "
replace all "  " in string with " " until no "  " exists
remove leading and training " " from string
return string

*/

function songDecoder(lyric) {
  lyric = lyric.replace(/WUB/gi, " ");
  while (lyric.includes("  ") === true) {
    lyric = lyric.replace("  ", " ");
  }
  lyric = lyric.trim();
  return lyric;
}

console.log(songDecoder("AWUBBWUBC"));