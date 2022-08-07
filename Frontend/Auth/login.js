const baseUrl = "https://localhost:44323/api/Auths";

$(function() {
    $("#email").dxTextBox({
        label:"Email",
        name: "email",
        align: "center",
        width:200,
    }).dxValidator({
        validationRules: [
            { type: "required" }
        ]
    });
 
    $("#password").dxTextBox({
        label:"Password",
        name: "Password",
        mode: "password",
        width:200,
        
    }).dxValidator({
        validationRules: [
            { type: "required" }
        ]
    });
 
    $("#validateAndSubmit").dxButton({
        text: "Giriş Yap",
        type: "success",
        icon:"todo",
        onClick: function() {
            const email= $('#email').dxTextBox('instance').option('value') ; 
            const password= $('#password').dxTextBox('instance').option('value') ; 
            
            Login(email,password);
        } ,
        // useSubmitBehavior: true // bu kodu araştır
    });
});


function Login(email,password) {
    var data ={
      "email": email,
      "password":password
    };
    $.ajax({
      method:"POST",
      url : baseUrl + "/Login",
      data : JSON.stringify(data),
      contentType: 'application/json;charset=utf-8',
      crossDomain: true,
      dataType: 'json'
    }).done(function (data) {
       if (data.success == true) {
        DevExpress.ui.notify("Giriş Başarılı");
        localStorage.setItem("expiration",data.data.expiration);
        localStorage.setItem("token",data.data.token);
        localStorage.setItem("email",email);
        
        GetByMail(email);
        setTimeout(5000);

        window.location.pathname= "/Fault/index.html";
       
       }
       
    }).fail(function (data){
     
        DevExpress.ui.notify(data.responseText);
    }); 
}

function GetByMail(email) {
    $.get('https://localhost:44323/api/Users/Getbymail?email='+email+'', function (data) { 
          localStorage.setItem("userName",data.firstName +" "+ data.lastName)
    
    });
   
}