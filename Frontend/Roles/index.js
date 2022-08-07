
 var baseUrl = "https://localhost:44323/api";


 $(() => {
 
     $('#gridContainer').dxDataGrid({
       dataSource: new DevExpress.data.CustomStore({
                key: "id",
                loadMode: "cell", 
                load: function() {
                       return $.getJSON(baseUrl+"/Roles/GetAll",)
                },
                 remove: function (key) {
                     Delete_Roles(key);
                
                 },
                 update: function (key, value) {
                
                 Update_Roles(key,value.name);
 
                 },
                 insert: function (key) {
                     Add_Roles(key.name);
                 },
                
              }),
     //   keyExpr: 'id',
       showBorders: true,
       filterRow: { visible: true },
   
     //   width: 1200,
       
       paging: {
         enabled: false,
       },
       editing: {
         mode: 'row',
         allowUpdating: true,
         allowDeleting: true,
         allowAdding:true,
      
       },
       selection: {
         mode: "single" ,
         showCheckBoxesMode : "none",
         
     },
     focusedRowEnabled: true,
       columns: [
         {
           dataField: 'name',
           caption: 'Role Name',
           
         }
       ],
       onSelectionChanged(selectedItems) {
         const data = selectedItems.selectedRowsData[0];
         if (data) {
          
           roleName = data.name;
           console.log(data);
           
         }
       },
     
     });
    
 
     
 });
 
 
 
 
 
 function Delete_Roles(id) {
     var data ={
       "id": id
     };
     $.ajax({
       method:"DELETE",
       url : baseUrl + "/Roles/Delete",
       data : JSON.stringify(data),
       contentType: 'application/json;charset=utf-8',
       crossDomain: true,
       dataType: 'json'
   
     }).done(function (data) {
         DevExpress.ui.notify('Başarıyla Silindi: '+ data);
      
     }); 
 }
 
 function Add_Roles(value) {
     var data ={
       "name": value
     };
     $.ajax({
       method:"POST",
       url : baseUrl + "/Roles/Add",
       data : JSON.stringify(data),
       contentType: 'application/json;charset=utf-8',
       crossDomain: true,
       dataType: 'json'
   
     }).done(function () {
         DevExpress.ui.notify('Başarıyla Eklendi ');
      
     }); 
 }
 
 
 var roleName;
 function Update_Roles(key,value) {
   if (value == null) { 
     value= roleName;
   } 
     var data ={
       "id": key,
       "name":value
     };
     $.ajax({
       method:"PUT",
       url : baseUrl + "/Roles/Update",
       data : JSON.stringify(data),
       contentType: 'application/json;charset=utf-8',
       crossDomain: true,
       dataType: 'json'
   
     }).done(function () {
         DevExpress.ui.notify('Başarıyla Güncellendi ');
      
     }); 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 