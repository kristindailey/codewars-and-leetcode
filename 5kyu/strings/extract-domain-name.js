/* CHALLENGE DESCRIPTION 

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = "cnet"
*/

/* PREP
Parameters
    // string, specifically a URL
Returns 
    // return the domain name only as a string
Examples 
    // "http://github.com/carbonfive/raygun"
        // "github"
    //  "https://www.cnet.com"   
        // "cnet"
Pseudocode 
    // function that takes in one parameter, string
    // replace "http://" and/or "https://" with empty string
    // replace "www."  with empty string
    // split the remaining string by "."
    // return the first part as the domain name
*/

// MY SOLUTION
function returnDomain(str) {
    return str.replace("http://", "").replace("https://", "").replace("www.", "").split(".")[0];
}