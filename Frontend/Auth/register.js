


const baseUrl = "https://localhost:44323/api/Auths";

$(function() {
    $("#firstName").dxTextBox({
        label:"First Name",
        name: "text"
    }).dxValidator({
        validationRules: [
            { type: "required" }
        ]
    });
    $("#lastName").dxTextBox({
        label:"Last Name",
        name: "text"
    }).dxValidator({
        validationRules: [
            { type: "required" }
        ]
    });
    $("#email").dxTextBox({
        label:"Email",
        name: "email"
    }).dxValidator({
        validationRules: [
            { type: "required" }
        ]
    });
 
    $("#password").dxTextBox({
        label:"Password",
        name: "Password",
        mode: "password"
    }).dxValidator({
        validationRules: [
            { type: "required" }
        ]
    });

 
    $("#validateAndSubmit").dxButton({
        text: "Submit",
        type: "success",
        onClick: function() {
            const email= $('#email').dxTextBox('instance').option('value') ; 
            const password= $('#password').dxTextBox('instance').option('value') ; 
            const firstName= $('#firstName').dxTextBox('instance').option('value') ; 
            const lastName= $('#lastName').dxTextBox('instance').option('value') ; 
           
            
            Register(email,password,firstName,lastName);
           
            
        } ,
        // useSubmitBehavior: true // bu kodu araştır
    });
});


function Register(email,password,firstName,lastName) {
    var data ={
        "email": email,
        "password": password,
        "firstName": firstName,
        "lastName": lastName
    };
    $.ajax({
      method:"POST",
      url : baseUrl + "/Register",
      data : JSON.stringify(data),
      contentType: 'application/json;charset=utf-8',
      crossDomain: true,
      dataType: 'json'
    }).done(function (data) {
        console.log(data)
        DevExpress.ui.notify("Kayıt Başarılı");
        setTimeout(5000);
        window.location.pathname= "/Auth/login.html";
       
    }).fail(function (data){
        DevExpress.ui.notify(data.responseText);

    }); 
}