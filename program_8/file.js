function Calc(){

    var start = Number (document.getElementsByClassName('inp')[0].value); 
    var end=Number (document.getElementsByClassName('inp')[1].value); 
    for(var i= start ; i <= end ; i = i+1){
        
        if( i % 2 == 0 ){
            document.getElementById('even').innerHTML += i + "<br>";
        }
        else{
            document.getElementById('odd').innerHTML += i + "<br>";
        }
    }
}