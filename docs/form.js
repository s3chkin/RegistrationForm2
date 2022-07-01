function register()
{
    var name = document.getElementById("name").value;
    document.getElementById("resultName").innerHTML = name;

    var email = document.getElementById("email").value;
    document.getElementById("resultEmail").innerHTML = email;

    var password = document.getElementById("password").value;
    document.getElementById("resultPassword").innerHTML = password;

    
    document.getElementById("rslt").innerHTML = "Hi " + name + "! " + "Welcome to the this web site...";

    
    document.getElementById("frm1").reset();
}

function LogIn()
{
    // reultLogIn
    var name = document.getElementById("nameInputLogIn").value;
    document.getElementById("reultLogIn").innerHTML = name;

    if(name.register() == name)
    {
        alert("Hi" + name);
    }

}