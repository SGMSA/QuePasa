var display = 1;
var hidden = 0;



function tabControl() {
    
            
            if (hidden == 0){
            document.getElementById("section1").style.visibility = "hidden";
            document.getElementById("section3").style.visibility = "hidden";
            }
            else (display == 1){
            document.getElementById("section2").style.visibility = "visible";   
            }
}
