document.getElementById("submitBtn").addEventListener('click', function() {
    // var RegExp = (/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    var name = document.getElementById("userName").value;
    var email = document.getElementById("Email").value;
    var textbox = document.getElementById("Textarea").value;
    var request_emailregex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var res = request_emailregex.test(email);


    document.getElementById("userNameMSG").innerText = "";
    document.getElementById("emailHelp").innerText = "";
    document.getElementById("TextMSG").innerText = "";

    if (name == "") {
        document.getElementById("userNameMSG").innerText = "What is your good name?";
        document.getElementById("userNameMSG").style.color = "#5221E6";
        document.getElementById("userName").focus();
    } else if (email == "") {
        document.getElementById("emailHelp").innerText = "Enter Your     Email Address  ";
        document.getElementById("emailHelp").style.color = "#5221E6";
        document.getElementById("Email").focus();
    } else if(!res){
        document.getElementById("emailHelp").innerText = "Fill The Email formate xyz@gmail.com";
        document.getElementById("emailHelp").style.color = "red";
        document.getElementById("Email").focus();
    } else if (textbox == "") {
        document.getElementById("TextMSG").innerText = "Please let me know how can i help you!";
        document.getElementById("TextMSG").style.color = "#5221E6";
        document.getElementById("Textarea").focus();
    } else {
        alert(`Thank you for contacting me ${name}!
I shall get back to you soon.`);
        return true;
    }

});