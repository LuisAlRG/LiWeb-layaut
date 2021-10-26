var app = angular.module('allApp',[]);
var marcador = null;

    

    $("tablaInfo>div>div>section").attr(
        {
            'ng-repeat':"venta in listVenta track by $index",
            'ng-init':"mostElemento = false;"
        }
    );

    $("tablaInfo>div>div>section>div.cel1>button").attr(
        {'ng-click': "mostElemento=((mostElemento && (indxSelecionado == $index)) ? false : true); setIndxSelecionado($index) ;"}
    );

    $("tablaInfo>div>div>section>div.elementComplete").attr(
        {'ng-if':"mostElemento && indxSelecionado == $index"}
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

        $scope.indxSelecionado = 0;

        //funciones
        $scope.formatoFecha = function( laFecha ){
            let cdena = venta.fecha.getDate() +"/"+ venta.fecha.getMonth() +"/"+ venta.fecha.getFullYear() ;
            return cdena;
        }

        $scope.setIndxSelecionado = function(elIndex){
            $scope.indxSelecionado = elIndex;
        }

        $scope.cambiarSelectedIndex = function(elIndex){
            return $scope.indxSelecionado == elIndex;
        }
    });