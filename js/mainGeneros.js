var app = angular.module('allApp',[]);
var marcador = null;

$("tablaInfo>div>#cuerpoEntero>section").attr(
    {
        'ng-repeat':"genero in listGenero track by $index",
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
    $scope.listGenero = [
        new Genero(
            0,
            "Novela"
        ),
        new Genero(
            1,
            "Romanse"
        ),
        new Genero(
            2,
            "Ciencia Fixion"
        ),
        new Genero(
            3,
            "Historico"
        ),
        new Genero(
            4,
            "De epoca"
        ),
        new Genero(
            5,
            "Terror"
        ),
        new Genero(
            6,
            "Manga"
        )
    ]
    for(let i=0;i<8;i++){
        
        $scope.listGenero.push(
            new Genero(i+7,"Genero no."+(i-1))
        );
    }

    $scope.indxSelecionado = 0;
    //funciones de llamada


    $scope.setIndxSelecionado = function(elIndex){
        $scope.indxSelecionado = elIndex;
    }
});