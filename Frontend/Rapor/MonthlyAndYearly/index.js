// $(() => {
//     $('#pie').dxPieChart({
//       size: {
//         width: 500,
//       },
//       palette: 'bright',
//       dataSource: new DevExpress.data.CustomStore({
//         key: "id",
//         loadMode: "cell", 
//         load: function() {
//                return $.getJSON("https://localhost:44323/api/Faults/GetAll",)
//         },
//       }),
//       series: [
//         {
//           argumentField: 'status',
//           valueField: 'status',
//           label: {
//             visible: true,
//             connector: {
//               visible: true,
//               width: 1,
//             },
//           },
//         },
//       ],
//       title: 'Area of Countries',
//       export: {
//         enabled: true,
//       },
//       // onPointClick(e) {
//       //   const point = e.target;
  
//       //   toggleVisibility(point);
//       // },
//       // onLegendClick(e) {
//       //   const arg = e.target;
  
//       //   toggleVisibility(this.getAllSeries()[0].getPointsByArg(arg)[0]);
//       // },
//     });
  
//     function toggleVisibility(item) {
//       if (item.isVisible()) {
//         item.hide();
//       } else {
//         item.show();
//       }
//     }
//   });
  



  
 var baseUrl = 'https://localhost:44323/api/Faults';

 $(() => {

    $("#button").dxButton({
        text:"Onayla",
        type:"success",
        onClick: function() {
          $('#gridContainer').dxDataGrid({
            dataSource: new DevExpress.data.CustomStore({
                     key: "id",
      
                     loadMode: "cell", 
                     load: function() {
                      console.log("month:" + month + " year: " + year);
                            return $.get(baseUrl+'/GetMonthlyAndYearlyDetails?month='+month+'&year='+year+'',)
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
        } 
    });

    
    
 
     
 });
 
 
 var month,year;
 $(function() {

  $("#selectBox").dxSelectBox({
      dataSource: MonthsData,
      valueExpr: "ID",
      displayExpr: "Name",
      label:"Ay Seçiniz",
      onValueChanged: function(e) {
        month=e.value;
        console.log("month:" + month);
    },

  });

  $("#selectBox2").dxSelectBox({
    dataSource: YearData,
    valueExpr: "ID",
    displayExpr: "ID",
    label:"Yıl Seçiniz",
    onValueChanged: function(e) {
      
      year=e.value;
      console.log(year);
  },

});

});









const MonthsData = [{
  ID: 1,
  Name: 'Ocak',
}, {
  ID: 2,
  Name: 'Şubat',
}, {
  ID: 3,
  Name: 'Mart'
}, {
  ID: 4,
  Name: 'Nisan'
}, {
  ID: 5,
  Name: 'Mayıs'
}
, {
ID: 6,
Name: 'Haziran'
}
, {
ID: 7,
Name: 'Temmuz'
}
, {
ID: 8,
Name: 'Ağustos'
}
, {
ID: 9,
Name: 'Eylül'

}
, {
ID: 10,
Name: 'Ekim'

}
, {
ID: 1,
Name: 'Kasım'

}
, {
ID: 12,
Name: 'Aralık',

}

]

const YearData = [
  {ID: 2018},
  {ID: 2019},
  {ID: 2020},
  {ID: 2021},
  {ID: 2022}

]