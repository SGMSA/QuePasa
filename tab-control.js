function main() {
    
    tabControl();
    
    var x = document.getElementById("tab1");
    var y = document.getElementById("tab2");
    var z = document.getElementById("tab3");

    x.addEventListener("click", tabControl);
    y.addEventListener("click", tabControl);
    z.addEventListener("click", tabControl);

    function tabControl() {
        if (x == "click") {
            document.getElementById("section1").style.visibility = "visible";
        }
        else {
            document.getElementById("section1").style.visibility = "hidden";
        }
        if (y == "click") {
            document.getElementById("section2").style.visibility = "visible";
        }
        else {
            document.getElementById("section2").style.visibility = "hidden";
        }
        if (z == "click") {
            document.getElementById("section3").style.visibility = "visible";
        }
        else {
            document.getElementById("section3").style.visibility = "hidden";
        }
    }
}
