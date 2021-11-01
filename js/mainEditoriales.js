var app = angular.module('allApp',[]);
var marcador = null;

$("tablaInfo>div>#cuerpoEntero>section").attr(
    {
        'ng-repeat':"editorial in listEditorial track by $index",
        'ng-init':"mostElemento=false"
    }
);



$("tablaInfo>div>div>section>div").attr(
    {'ng-click': "mostElemento=((mostElemento && (indxSelecionado == $index)) ? false : true); setIndxSelecionado($index) ;"}
);

$("tablaInfo>div>div>section>div.cel4").attr(
    {'ng-click': ""}
);

$("tablaInfo>div>div>section>div.elementComplete").attr(
    {'ng-if':"mostElemento && indxSelecionado == $index"}
);


app.controller('allController',function($scope,$http){
    //inicialisar valores globales
    $scope.listEditorial = [
        {id:0,
            nombre:"Editoriales Illuminatus",
        },
        {id:1,
            nombre:"McGrawHill"
        }
    ]
    for(let i=2;i<8;i++){
        
        $scope.listEditorial.push({
            id:i,
            nombre:"Editorial unico no."+(i-1),
        });
    }

    $scope.indxSelecionado = 0;
    //funciones de llamada


    $scope.setIndxSelecionado = function(elIndex){
        $scope.indxSelecionado = elIndex;
    }
});