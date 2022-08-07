var baseUrl = "https://localhost:44323/api/BrandModels";
var brandId;
var modelName;

$(() => {
  
    $('#gridContainer').dxDataGrid({
      dataSource: new DevExpress.data.CustomStore({
               key: "id",

               loadMode: "cell", 
               load: function() {
                      return $.getJSON(baseUrl+"/GetAll",)
               },
                remove: function (key) {
                  Delete_BrandsModel(key);
                console.log(key);
                },
                update: function (key, value) {
                  console.log(key);
                  Update_BrandsModel(key,value);

                },
                insert: function (key) {
                // console.log(key.modelName, key.brandId);
                Add_BrandsModel(key.modelName, key.brandId);
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
     
      },
      selection: {
        mode: "single" ,
        showCheckBoxesMode : "none",
        
    },
    focusedRowEnabled: true,
      columns: [
        {
          dataField: 'modelName',
          caption: 'Model Name',
        }, {
          dataField: 'brandId',
          caption: 'Brand Name',
          width: 125,
          lookup: {
            dataSource: new DevExpress.data.CustomStore({
                
                loadMode: "raw", 
                load: function() {
                       return $.getJSON("https://localhost:44323/api/Brands/GetAll")
                }
              }),
            displayExpr: 'brandName',
            valueExpr: 'id',
           
          },
        }
      ],
      onSelectionChanged(selectedItems) {
        
        const data = selectedItems.selectedRowsData[0];
        if (data) {
          brandId = data.brandId;
          modelName = data.modelName;
          console.log(data);
          
        }
      },
    
    });
  

    
});







function Delete_BrandsModel(id) {
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

function Add_BrandsModel(modelName,brandId) {
    var data ={
      "modelName": modelName,
      "brandId": brandId
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
function Update_BrandsModel(key,value) {
  if (value.brandId == null) { 
    value.brandId = brandId;
  } if (value.modelName == null) {
    value.modelName = modelName
  } 
  console.log(key + " " + value.brandId + " "+ value.modelName);
    var data ={
      "id": key,
      "brandId":value.brandId,
      "modelName":value.modelName
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

















