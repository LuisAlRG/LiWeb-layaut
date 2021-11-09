var app = angular.module('allApp',[]);
var marcador = null;

//tbiAutor
$("tbiAutor>.cuerpoEntero>section").attr(
    {
        'ng-repeat':"autor in listAutorMos track by $index",
        'ng-init':"mostElemento=false"
    }
);
$("tbiAutor>.cuerpoEntero>section>div").attr(
    {
        'ng-click':"mostElemento=((mostElemento && (indxSAutors == $index)) ? false : true); setIndxSAutors($index) ;"
    }
);
$("tbiAutor>.cuerpoEntero>section>div:nth-child(4)").attr(
    {
        'ng-click':""
    }
);
$("tbiAutor>.cuerpoEntero>section>.elementComplete").attr(
    {
        'ng-if':"mostElemento && (indxSAutors == $index)",
        'ng-click':""
    }
);
//tbiEditorial
$("tbiEditorial>.cuerpoEntero>section").attr(
    {
        'ng-repeat':"editorial in listEditoMos track by $index",
        'ng-init':"mostElemento=false"
    }
);
$("tbiEditorial>.cuerpoEntero>section>div").attr(
    {
        'ng-click':"mostElemento=((mostElemento && (indxSEditor == $index)) ? false : true); setIndxSEditor($index) ;"
    }
);
$("tbiEditorial>.cuerpoEntero>section>div:nth-child(3)").attr(
    {
        'ng-click':""
    }
);
$("tbiEditorial>.cuerpoEntero>section>.elementComplete").attr(
    {
        'ng-if':"mostElemento && (indxSEditor == $index)",
        'ng-click':""
    }
);
//tbiGeneros
$("tbiGeneros>.cuerpoEntero>section").attr(
    {
        'ng-repeat':"genero in listGeneroMos track by $index",
        'ng-init':"mostElemento=false"
    }
);
$("tbiGeneros>.cuerpoEntero>section>div").attr(
    {
        'ng-click':"mostElemento=((mostElemento && (indxSGenero == $index)) ? false : true); setIndxSGenero($index) ;"
    }
);
$("tbiGeneros>.cuerpoEntero>section>div:nth-child(3)").attr(
    {
        'ng-click':""
    }
);
$("tbiGeneros>.cuerpoEntero>section>.elementComplete").attr(
    {
        'ng-if':"mostElemento && (indxSGenero == $index)",
        'ng-click':""
    }
);
app.controller('allController',function($scope,$http){
    $scope.indxSAutors=-1;
    $scope.indxSEditor=-1;
    $scope.indxSGenero=-1;

    
    $scope.listAutorMos=[
        {id:01,nombre:"Luisito",apellido:"Rodriguez"}
    ];
    $scope.listEditoMos=[
        {id:1,
            nombre:"Editoriales Illuminatus",
        },
        {id:2,
            nombre:"McGrawHill"
        }
    ];
    $scope.listGeneroMos=[

    ];

    $scope.setIndxSAutors = function(indx){
        $scope.indxSAutors = indx;
    }
    $scope.setIndxSEditor = function(indx){
        $scope.indxSEditor = indx;
    }
    $scope.setIndxSGenero = function(indx){
        $scope.indxSGenero = indx;
    }

});