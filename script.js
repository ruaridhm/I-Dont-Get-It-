//function to make nav bar responsive tile work

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//array of links for each catagory

var catagory = [
    "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code",
    "https://www.w3schools.com/js/js_comments.asp",
    "https://javascript.info/comments",
    "https://www.w3resource.com/javascript/introduction/javascript-syntax-comments.php"
]; 



function cycle(){

    for (let i = 0; i < catagory.length; i++){
        console.log(i);
        console.log(catagory[i]);
        return catagory[i];   
    }
}

    //ignore line underneath modify and use it if needed in cycle function.
    //document.getElementById("dont").innerHTML