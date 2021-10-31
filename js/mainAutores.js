var app = angular.module('allApp',[]);
var marcador = null;

$("tablaInfo>div>#cuerpoEntero>section").attr(
    {
        'ng-repeat':"autor in listAutores track by $index",
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
    $scope.listAutores = [
        {id:0,
            nombre:"Hernan",
            apellido:"cortes"
        }
    ]
    for(let i=1;i<15;i++){
        let numeroAletorio = parseInt(Math.random() * 100);
        let generarNombre1= ((numeroAletorio%8==0)?"Luis":(numeroAletorio%6==0)?"Fernando":(numeroAletorio%4==0)?"Memo":(numeroAletorio%2==0)?"Pedro":"Jose");
        numeroAletorio = parseInt(Math.random() * 100);
        let generarNombre2= ((numeroAletorio%8==0)?"de la Casa":(numeroAletorio%6==0)?"Carmino":(numeroAletorio%4==0)?"Gillermo":(numeroAletorio%2==0)?"Kristino":"");
        numeroAletorio = parseInt(Math.random() * 100);
        let generarApellido1= ((numeroAletorio%8==0)?"Rodriguez":(numeroAletorio%6==0)?"Gonzalez":(numeroAletorio%4==0)?"Manriquez":(numeroAletorio%2==0)?"Berzunsa":"");
        numeroAletorio = parseInt(Math.random() * 100);
        let generarApellido2= ((numeroAletorio%8==0)?"Gonzalez":(numeroAletorio%6==0)?"Aguilar":(numeroAletorio%4==0)?"Zapata":(numeroAletorio%2==0)?"":"Jonstar");
        $scope.listAutores.push({
            id:i,
            nombre:generarNombre1+" "+generarNombre2,
            apellido:generarApellido1+" "+generarApellido2
        });
    }

    $scope.indxSelecionado = 0;
    //funciones de llamada


    $scope.setIndxSelecionado = function(elIndex){
        $scope.indxSelecionado = elIndex;
    }
});