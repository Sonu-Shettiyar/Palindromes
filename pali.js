//check its a palindrome or not ,print yes if both are palindrome either no.



let a = "raman"

b="";
for(i=a.length-1;i>=0;i--){
b+=a[i];
}
 if(a==b){
   console.log("Palindrome");
}else{
   console.log("Not a Palindrome");
}