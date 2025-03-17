function concatString(str1 , str2){
    //You are provided with two strings concatenate them together, and store the concatenated string in the variable 'concat'."
    let concat;
	concat = str1.concat(str2) ;
    return concat;
}



function indexOfWorld(str1 , str2) {
//You are provided with two strings concatenate them together, and store the index of the "World" in indexOfWor
let indexOfworld;
    let con = str1.concat(str2) ;
    indexOfworld = con.indexOf("World") ;
    // console.log(indexOfWorld) ; 
return indexOfworld; 
}