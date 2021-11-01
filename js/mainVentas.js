var app = angular.module('allApp',[]);
var marcador = null;

    $("#parteIzquierdo").attr(
        {
            'ng-init':"showForm = false"
        }
    );

    $("#parteIzquierdo>accionesInputs").attr(
        {
            'ng-if':"showForm"
        }
    );

    $("tablaInfo>div>div>section").attr(
        {
            'ng-repeat':"venta in listVenta track by $index",
            'ng-init':"mostElemento = false;"
        }
    );

    $("tablaInfo>div>div>section>div").attr(
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
            {id:3,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:4,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:5,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:6,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:7,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:8,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:9,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:20,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:22,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5},
            {id:24,cliente:"MrMrMango Head",responsable:"Kenji Gonzlez Hoshino",fecha:"11/03/2021",vendidos:5}
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