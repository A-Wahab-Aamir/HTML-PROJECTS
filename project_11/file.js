
var counter = 0; 
function Counter1(num){

    counter += num ; 
    document.getElementById('result').innerHTML = counter; 
    
}
function Reset(){
    window.location.reload();

}