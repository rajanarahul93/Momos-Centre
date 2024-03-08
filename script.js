function price() {
    var totAmt;
    var typ = document.getElementById("type").value;
    var sof = document.getElementById("sf").value;
    var quan = document.getElementById("quantity").value;
    var nop = document.getElementById("plate").value;
    //validate input
    if (typ === 0 || sof === 0 || quan === 0) {
        alert("Please enter values");
        return;
    }
    totAmt = typ * sof * quan * nop;
    document.getElementById("res").value = totAmt + " RS";
    document.getElementById("msg").value = "Thanks , Visit Again";
}