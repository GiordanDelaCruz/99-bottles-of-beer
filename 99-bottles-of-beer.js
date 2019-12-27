/** OVERVIEW: This program is for displaying the lyrics to the infamous game "99 Bottles of Beer" in 
  *           JavaScript. 
  *            
  *  Note: This is just a easy program for fun.
  */

// Instance variables
var count = 99;

// Loop to print out the lyrics
while(count >= 0){

    if(count ==1){
        console.log( count + " bottles of beer on the wall, " + count + " bottles of beer."
                    + " Take one down and pass it around, no more bottles of beer on the wall.");
    }else if(count !== 0){
        console.log( count + " bottles of beer on the wall, " + count +" bottles of beer."
                    + " Take one down and pass it around, " + (count - 1) + " bottles of beer on the wall.");
    }else{
        console.log("No more bottles of beer on the wall, no more bottles of beer."
                    + " Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
    count--;
}

