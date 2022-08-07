
 var baseUrl = "https://localhost:44323/api";


 $(() => {
  $("#button").dxButton({
    text:"Yetki Ata",
    type:"success",
    onClick: function() {
      Add_Authorize(kId,yetkiId);
    } 
  });

     $('#gridContainer').dxDataGrid({
       dataSource: new DevExpress.data.CustomStore({
                key: "id",
                loadMode: "cell", 
                load: function() {
                       return $.getJSON(baseUrl+"/UserRoles/GetAll",)
                },
                 remove: function (key) {
                     Delete_Authorize(key);
                   
                
                 },
                 update: function (key,value) {
                  console.log(key,value);
                 Update_Authorize(key,value);
              
                 },
                
              }),
       showBorders: true,
       filterRow: { visible: true },
       
       paging: {
         enabled: false,
       },
       editing: {
         mode: 'row',
         allowUpdating: true,
         allowDeleting: true,
      
       },
       selection: {
         mode: "single" ,
         showCheckBoxesMode : "none",
         
     },
     focusedRowEnabled: true,
       columns: [
         {
           dataField: 'userId',
           caption: 'User Name',
           lookup: {
            dataSource: new DevExpress.data.CustomStore({
                loadMode: "raw", 
                load: function() {
                       return $.getJSON("https://localhost:44323/api/Users/GetAll")
                }
              }),
            displayExpr: 'firstName' ,
            valueExpr: 'id',
           
          },

         },
         {
          dataField:'operationClaimId',
          caption : 'Role Name',
          lookup: {
            dataSource: new DevExpress.data.CustomStore({
                loadMode: "raw", 
                load: function() {
                       return $.getJSON("https://localhost:44323/api/Roles/GetAll")
                }
              }),
            displayExpr: 'name',
            valueExpr: 'id',
           
          },
         }
       ],
       onSelectionChanged(selectedItems) {
         const data = selectedItems.selectedRowsData[0];
         if (data) {
          
           id = data.id;
           userId = data.userId;
           operationClaimId = data.operationClaimId;
           
         }
       },
     
     });
    
 
 });
 
 
 

 function Add_Authorize(kId,yetkiId) {
  var data ={
    "userId": kId,
    "operationClaimId": yetkiId
  };
  $.ajax({
    method:"POST",
    url : baseUrl + "/UserRoles/Add",
    data : JSON.stringify(data),
    contentType: 'application/json;charset=utf-8',
    crossDomain: true,
    dataType: 'json'

  }).done(function () {
      DevExpress.ui.notify('Başarıyla Eklendi ');
   
  }); 
}


 
 
 function Delete_Authorize(id) {
     var data ={
       "id": id
     };
     $.ajax({
       method:"DELETE",
       url : baseUrl + "/UserRoles/Delete",
       data : JSON.stringify(data),
       contentType: 'application/json;charset=utf-8',
       crossDomain: true,
       dataType: 'json'
   
     }).done(function (data) {
         DevExpress.ui.notify('Başarıyla Silindi: '+ data);
      
     }); 
 }
 
 
 
 
var id,userId,operationClaimId;

 function Update_Authorize(key,value) {
   if (key == null) { 
    key= id;
   } 
   if (value.userId == null) { 
    value.userId= userId;
   } 
   if (value.operationClaimId == null) { 
    value.operationClaimId = operationClaimId;
   } 
     var data ={
      "id":key,
       "userId": value.userId,
       "operationClaimId":value.operationClaimId
     };
     $.ajax({
       method:"PUT",
       url : baseUrl + "/UserRoles/Update",
       data : JSON.stringify(data),
       contentType: 'application/json;charset=utf-8',
       crossDomain: true,
       dataType: 'json'
   
     }).done(function () {
         DevExpress.ui.notify('Başarıyla Güncellendi ');
      
     }); 
 }
 


 
 var kId,yetkiId;
 $(function() {

  $("#selectBox").dxSelectBox({
    dataSource: new DevExpress.data.CustomStore({
      loadMode: "raw", 
      load: function() {
             return $.getJSON("https://localhost:44323/api/Users/GetAll")
      },
    }),
    valueExpr: "id",
    displayExpr: "firstName",
      label:"Kullanıcı Seçiniz",
      onValueChanged: function(e) {
        kId=e.value;
        
    },

  });

  $("#selectBox2").dxSelectBox({
    dataSource: new DevExpress.data.CustomStore({
      loadMode: "raw", 
      load: function() {
             return $.getJSON("https://localhost:44323/api/Roles/GetAll")
      },

    }),
    valueExpr: "id",
    displayExpr: "name",
    label:"Yetki Seçiniz",
    onValueChanged: function(e) {
      
      yetkiId=e.value;
      
  },
});

});
 



 
 