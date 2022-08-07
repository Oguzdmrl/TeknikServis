var baseUrl = "https://localhost:44323/api/Brands";

$(() => {

    $('#gridContainer').dxDataGrid({
      dataSource: new DevExpress.data.CustomStore({
               key: "id",
               loadMode: "cell", 
               load: function() {
                      return $.getJSON(baseUrl+"/GetAll",)
               },
                remove: function (key) {
                    Delete_Brands(key);
                console.log(key);
                },
                update: function (key, value) {
               
                Update_Brands(key,value.brandName);

                },
                insert: function (key) {
                    Add_Brands(key.brandName);
                },
               
             }),
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
     
      }, selection: {
        mode: "single" ,
        showCheckBoxesMode : "none",
      
    },
    focusedRowEnabled: true,
      columns: [
        {
          dataField: 'brandName',
          caption: 'Brand',
        }
      ],
      onSelectionChanged(selectedItems) {
        
        const data = selectedItems.selectedRowsData[0];
        if (data) {
         
          brandName = data.brandName;
          console.log(data);
          
        }
      },
    
    });
   

    
});










function Delete_Brands(id) {
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

function Add_Brands(value) {
    var data ={
      "brandName": value
    };
    $.ajax({
      method:"POST",
      url : baseUrl + "/Add",
      data : JSON.stringify(data),
      contentType: 'application/json;charset=utf-8',
      crossDomain: true,
      dataType: 'json'
  
    }).done(function () {
        DevExpress.ui.notify('Başarıyla Eklendi ');
     
    }); 
}

var brandName;
function Update_Brands(key,value) {
  if (value == null) { 
    value= colbrandNamerName;
  } 
    var data ={
      "id": key,
      "brandName":value
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












