

  
 var baseUrl = "https://localhost:44323/api/Faults";


 $(() => {
 
     $('#gridContainer').dxDataGrid({
       dataSource: new DevExpress.data.CustomStore({
                key: "id",
 
                loadMode: "cell", 
                load: function() {
                       return $.getJSON(baseUrl+"/GetDailyDetails",)
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
        
           
         }
       },
     
     });
    
 
     
 });
 
 
 
 

 
 

