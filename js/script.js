var texts = [
 {
   theSaying: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
   author: `― Marilyn Monroe`,
 },

 {
   theSaying: `“So many books, so little time.”`,
   author: `― Frank Zappa`,
 },

 {
   theSaying: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
   author: `― Albert Einstein`,
 },

 {
   theSaying: `“A room without books is like a body without a soul.”`,
   author: `― Marcus Tullius Cicero`,
 },

 {
   theSaying: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
   author: `― Bernard M. Baruch`,
 },

 {
   theSaying: `“You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening,And live like it's heaven on earth.”`,
   author: `― William W. Purkey`,
 },

];

var titleChange =  document.getElementById("titleChange");
var authorChange = document.getElementById("authorChange");
var checkRandomNum = [];



function changeText() {
 var numRandom = Math.floor(Math.random() * texts.length);
       titleChange.innerHTML = texts[numRandom].theSaying;
       authorChange.innerHTML = texts[numRandom].author;
        checkRandomNum.push(numRandom);
 }

