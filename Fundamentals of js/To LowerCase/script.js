function lowerCaseString(str1,str2){
    let answer;
// You have been provided with two strings
//Str1="JOHN"
//Str2 = "DOE"
//"You need to convert str1 and str2 to lowercase, concatenate them together, and store the concatenated string in the variable 'answer'."
    answer = str1.concat(str2).toLowerCase();
    console.log(answer);

    return answer;
}