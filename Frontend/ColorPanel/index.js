
 var baseUrl = "https://localhost:44323/api/Colors";


$(() => {

    $('#gridContainer').dxDataGrid({
      dataSource: new DevExpress.data.CustomStore({
               key: "id",
               loadMode: "cell", 
               load: function() {
                      return $.getJSON(baseUrl+"/GetAll",)
               },
                remove: function (key) {
                    Delete_Colors(key);
                console.log(key);
                },
                update: function (key, value) {
                console.log(key,value.colorName);
                Update_Colors(key,value.colorName);

                },
                insert: function (key) {
                    Add_Colors(key.colorName);
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
          dataField: 'colorName',
          caption: 'Color',
        }
      ],
      onSelectionChanged(selectedItems) {
        
        const data = selectedItems.selectedRowsData[0];
        if (data) {
         
          colorName = data.colorName;
          console.log(data);
          
        }
      },
    
    });
   

    
});





function Delete_Colors(id) {
    var data ={
      "id": id
    };
    $.ajax({
      method:"DELETE",
      url : baseUrl + "/Delete",
      data : JSON.stringify(data),
      contentType: 'application/json;charset=utf-8',
      crossDomain: true,
      dataType: 'json'
  
    }).done(function (data) {
        DevExpress.ui.notify('Başarıyla Silindi: '+ data);
     
    }); 
}

function Add_Colors(value) {
    var data ={
      "colorName": value
    };
    // var token = localStorage.getItem("token");
    $.post({
      method:"POST",
      // headers: {'Authorization': 'Bearer '+token},
      url : baseUrl + "/Add",
      data : JSON.stringify(data),
      contentType: 'application/json;charset=utf-8',
      crossDomain: true,
      dataType: 'json'
  
    }).done(function () {
        DevExpress.ui.notify('Başarıyla Eklendi ');
     
    }); 
}


var colorName;
function Update_Colors(key,value) {
  if (value == null) { 
    value= colorName;
  } 
    var data ={
      "id": key,
      "colorName":value
    };
    $.ajax({
      method:"PUT",
      url : baseUrl + "/Update",
      data : JSON.stringify(data),
      contentType: 'application/json;charset=utf-8',
      crossDomain: true,
      dataType: 'json'
  
    }).done(function () {
        DevExpress.ui.notify('Başarıyla Güncellendi ');
     
    }); 
}












