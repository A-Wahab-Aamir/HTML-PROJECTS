var i = 0; 
function Change()
{
    var color = ["red" , "green", "blue", "orange", "black","brown", "purple"]
    document.getElementsByTagName('body')[0].style.backgroundColor=color[i++];


    if(i > color.length - 1 ){     
        i = 0; 
    }
}