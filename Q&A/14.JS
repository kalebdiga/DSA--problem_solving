/**
 * 
 * In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.




Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

*solution breakdown
declare object with alphabetical order
if key in alphabet object
set value of object 


 */



function alphabetPosition(text) {

let alphabet ={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
    ,f:6,
    g:7,
    h:8,
    i:9,
    j:10,
    k:11,
    l:12,
    m:13,
    n:14,
    o:15,
    p:16,
    q:17,
    r:18,
    s:19,
    t:20,
    u:21,
    v:22,
    w:23,
    x:24,
    y:25,
    z:26


}

let position =[]
text=text.toLowerCase()
for (let i = 0; i < text.length; i++) {
    // console.log(text[i])
    if(text[i] in alphabet) 
        
        {
         position.push(alphabet[text[i]])
        }
    
}
// for(let key in text){
//     if(key in alphabet){
//         return true

//     }

// }
position=`${position}`
return position.replaceAll("," , " ")
}

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))
