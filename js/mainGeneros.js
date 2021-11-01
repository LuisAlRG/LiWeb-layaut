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
        {id:0,
            nombre:"Novela",
        },
        {id:1,
            nombre:"Romanse"
        },
        {id:2,
            nombre:"Ciencia Fixion"
        },
        {id:3,
            nombre:"Historico"
        },
        {id:4,
            nombre:"De epoca"
        },
        
        {id:5,
            nombre:"Terror"
        },
        {id:1,
            nombre:"Manga"
        }
    ]
    for(let i=2;i<8;i++){
        
        $scope.listGenero.push({
            id:i,
            nombre:"Genero no."+(i-1),
        });
    }

    $scope.indxSelecionado = 0;
    //funciones de llamada


    $scope.setIndxSelecionado = function(elIndex){
        $scope.indxSelecionado = elIndex;
    }
});