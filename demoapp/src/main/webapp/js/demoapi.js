var smsSend = "";
var smsRep = ""
var xhttp = new XMLHttpRequest();
var xhttpwt = new XMLHttpRequest();

// demoapi function and model window
$('#demo1Modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})

$(document).ready(function () {
    $('#demo1Modal').on('click', '#sendsmsbtn', function (e) {
    });

})

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        $(".modal-body #msgrep").val(this.responseText);
        $("#demo1ResultModal").modal();
    }else if (this.readyState == 2 && this.status == 400){
    	console.log(this.statusText);
    	$(".modal-body #msgrep").val(this.statusText);
        $("#demo1ResultModal").modal();
    }
};

function openSMS(msg) {
    $("#demo1Modal").modal();
    return false;
}


function sendSMS() {
    smsSend = $('#smsmsg').val();
    console.log("Whatis=" + $('#smsmsg').val());
    xhttp.open("POST", "api/sendsms", true);
    xhttp.send(smsSend);

    return false;
}
