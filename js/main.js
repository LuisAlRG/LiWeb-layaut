var app = angular.module('allApp',[]);
var marcador = null;
app.controller('allController',function($scope,$http){
    $scope.listElement=[
        {id:1,atributo:"un atributo"},
        {id:2,atributo:"otro atributo"},
        {id:3,atributo:"mas atributo"}
    ];
});