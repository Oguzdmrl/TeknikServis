
$(function() {
    const username = localStorage.getItem("userName");
    $("#menuContainer").dxMenu({
       items: [
                        {
                            text:"ColorPanel",
                            icon: 'color',
                            href:'www.google.com',
                        },
                        {   
                            text: 'BrandPanel',
                            icon: 'toolbox'
                        },
                        {   
                            text: 'BrandModelPanel',
                            icon:'chevronright'
                        },
                        {
                            text: 'Fault',
                            icon:'redo'
                        },
                        {
                            text:'Rapor/Daily',
                            icon:'chart'
                        },
                        {
                            text:'Rapor/MonthlyAndYearly',
                            icon:'chart'
                        },
                        {
                            text:'Roles',
                            icon:'user'
                        },
                        {
                            text:'Authorize',
                            icon:'lock'
                        },
                        {
                            text: 'Çıkış Yap ('+username+')',
                            icon:'return',
                            ID:1
                            
                        }
                    ],
                    onItemClick: function(e) {
                                    // if (e.itemData.text) {
                                    //     // window.location.pathname= e.itemData.text + "/index.html";
                                        
                                    // }
                                    if (e.itemData.ID == 1) {
                                        Logout();
                                    }else if (e.itemData.text) {
                                        window.location.pathname= e.itemData.text + "/index.html";
                                    }
                                },
                               
                   
        orientation: "horizontal", 
        submenuDirection: "rightToTop"
    });
});

function Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("email");
    localStorage.removeItem("userName");
    parent.location= "/Auth/login.html";
}

  
