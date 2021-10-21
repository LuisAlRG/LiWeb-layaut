var app = angular.module('allApp',[]);
var marcador = null;

    $("tablaInfo>div>div>section").attr(
        {
            'ng-repeat':"venta in listVenta track by $index",
            'ng-init':"mostElemento=false"
        }
    );

    $("tablaInfo>div>div>section>div.cel1").attr(
        {'ng-click': "mostElemento=(mostElemento ? false : true);"}
    );

    $("tablaInfo>div>div>section>div.elementComplete").attr(
        {'ng-if':"mostElemento"}
    );

    app.controller('allController',function($scope,$http){
        //inicializaciones
        $scope.listVenta=[
            {id:0,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:2,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:2,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:2,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:2,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:2,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:2,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:2,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:2,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:2,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:2,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:2,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5}
        ];
    
        $scope.listVentaMostrado=[];

        //funciones
        $scope.formatoFecha = function( laFecha ){
            let cdena = venta.fecha.getDate() +"/"+ venta.fecha.getMonth() +"/"+ venta.fecha.getFullYear() ;
            return cdena;
        }
    });