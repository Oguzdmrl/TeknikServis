var baseUrl = "https://localhost:44323/api/Faults";

$(() => {

    $('#gridContainer').dxDataGrid({
      dataSource: new DevExpress.data.CustomStore({
               key: "id",

               loadMode: "cell", 
               load: function() {
                      return $.getJSON(baseUrl+"/GetAll",)
               },
                remove: function (key) {
                  Delete_Fault(key);
              
                },
                update: function (key, value) {
                  // const test= $('#tbx_brandName').dxTextBox('instance').option('value') ; 
                 Update_Fault(key,value);

                },
                insert: function (key) {
                 
                 Add_Fault(key);
                },
               
             }),
      showBorders: true,
      filterRow: { visible: true },
  
    //   width: 1200,
      
      paging: {
        enabled: false,
      },
      editing: {
        mode: 'raw',
        allowUpdating: true,
        allowDeleting: true,
        allowAdding:true,
     
      },  selection: {
        mode: "single" ,
        showCheckBoxesMode : "none",
        
    },
    focusedRowEnabled: true,
      columns: [
        {
          dataField: 'brandId',
          caption: 'Brand',
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
        },{
          dataField: 'brandModelId',
          caption: 'Model',
          
          lookup: {
            dataSource: new DevExpress.data.CustomStore({
                loadMode: "raw", 
                load: function() {
                       return $.getJSON("https://localhost:44323/api/BrandModels/GetAll")
                }
              }),
            displayExpr: 'modelName',
            valueExpr: 'id',
           
          },
        },
        {
          dataField: 'colorId',
            caption: 'Color',
            width: 100,
            lookup: {
              dataSource: new DevExpress.data.CustomStore({
                  loadMode: "raw", 
                  load: function() {
                         return $.getJSON("https://localhost:44323/api/Colors/GetAll")
                  }
                }),
              displayExpr: 'colorName',
              valueExpr: 'id',
             
            },
        },

        {
          dataField: 'faultTitle',
          caption: ' Title',
          width: 150,
        },
        {
          dataField: 'faultDescription',
          caption: ' Description',
        },
        {
          dataField: 'status',
          caption: 'status',
          width: 55,
        }, 
    
      ],
      onSelectionChanged(selectedItems) {
        
        const data = selectedItems.selectedRowsData[0];
        if (data) {
          brandId = data.brandId;
          colorId = data.colorId;
          brandModelId = data.brandModelId;
          faultTitle = data.faultTitle;
          faultDescription = data.faultDescription;
          console.log(data);
          
        }
      },
    
    });
   

    
});



function Delete_Fault(id) {
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

function Add_Fault(key) {
    var data ={
      "brandId": key.brandId,
      "colorId": key.colorId,
      "brandModelId": key.brandModelId,
      "faultTitle": key.faultTitle,
      "faultDescription": key.faultDescription,
    };

   var token = localStorage.getItem("token");

    $.ajax({
      method:"POST",
      url : baseUrl + "/Add",
      data : JSON.stringify(data),
       headers: {'Authorization': 'Bearer '+token},
      contentType: 'application/json;charset=utf-8',
      crossDomain: true,
      dataType: 'json',
  
    }).done(function () {
        DevExpress.ui.notify('Başarıyla Eklendi ');
     
    }); 
}

var brandId,colorId,brandModelId;
var faultTitle,faultDescription;

function Update_Fault(key,value) {
  if (value.brandId == null) {
    value.brandId = brandId;
  }
  if (value.colorId == null) {
    value.colorId = colorId;
  }
  if (value.brandModelId == null) {
    value.brandModelId = brandModelId;
  }
  if (value.faultTitle == null) {
    value.faultTitle = faultTitle;
  }
  if (value.faultDescription == null) {
    value.faultDescription = faultDescription;
  }
 console.log(value);
    var data ={
      "id": key,
      "brandId":value.brandId,
      "colorId": value.colorId,
      "brandModelId": value,brandModelId,
      "faultTitle": value.faultTitle,
      "faultDescription": value.faultDescription,
      "status": value.status,
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







