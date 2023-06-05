/* 9 minutes

PROBLEM
=====
input : string
output : string

rules:
input is url
output is just the domain name of the input

?? empty string ==> not relevant
?? if www. not present => comes after //
?? if http not present => comes after www.
?? if both not present? => unknown

http or https both used

domain name is
  if url contains www. => comes after www.
  if url does not contain www. => comes after //

EXAMPLE
=====
"http://github.com/carbonfive/raygun" => github (comes after //)
"http://www.zombie-bites.com"         => zomebie-bites (comes after www.)
"https://www.cnet.com"                => cnet (comes after www.)
"www.xakep.ru"                        => xakep (comes after www.)

DATA STRUCTURE
=====
arrays?

data format:
1. http:// or https:// (may or may not be present)
2. www. (may or may not be present)
3. domain name
4. rest of the url

ALGORITHM
=====
declare function `domainName` with parameter `url`

if "https://" exists in `url`, replace with ""
if "http://" exists in `url`, replace with ""
if "www." exists in `url`, replace with ""

split `url` into string parts using "." as delimieter

return the first string part
*/

function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");

  let stringParts = url.split(".");

  return stringParts[0];
}

console.log(domainName("https://www.zombie-bites.com/carbonfive/raygun"));