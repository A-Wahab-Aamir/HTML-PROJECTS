function Sum(){

   var num_1=Number( document.getElementById('inp_1').value);

   var num_2 =Number (document.getElementById('inp_2').value); 

   var res = num_1 + num_2; 


   document.getElementById('result').innerHTML="The Sum of " + num_1 + " and " + num_2 + " is " + res


}

function Sub(){

    var num_1=Number( document.getElementById('inp_1').value);
 
    var num_2 =Number (document.getElementById('inp_2').value); 
 
    var res = num_1 - num_2; 
 
 
    document.getElementById('result').innerHTML="The Sub of " + num_1 + " and " + num_2 + " is " + res
 
 
 }

