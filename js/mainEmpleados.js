var app = angular.module('allApp',[]);
var marcador = null;

$("tablaInfo>div>#cuerpoEntero>section").attr(
    {
        'ng-repeat':"empleado in listEmpleado track by $index",
        'ng-init':"mostElemento=false"
    }
);



$("tablaInfo>div>div>section>div").attr(
    {'ng-click': "mostElemento=((mostElemento && (indxSelecionado == $index)) ? false : true); setIndxSelecionado($index) ;"}
);

$("tablaInfo>div>div>section>div.cel5").attr(
    {'ng-click': ""}
);

$("tablaInfo>div>div>section>div.elementComplete").attr(
    {'ng-if':"mostElemento && indxSelecionado == $index"}
);


app.controller('allController',function($scope,$http){
    //inicialisar valores globales
    $scope.listEmpleado = [
        new Empleado(
            0,0,
            "Luis Alfonso",
            "Rodrigez Gonzalez",
            "Luis Alfonso",
            true,
            true,
            "Gerente"
        ),
        new Empleado(1,1,
            "Kenji",
            "Gonzalez Hoshino",
            "Kenji",
            true,
            false,
            "Administrador"
        ),
        new Empleado(2,2,
            "Jose Luis",
            "Sanchez Sanchez",
            "Jose Luis",
            false,
            false,
            "Funcionario"
        ),
        new Empleado(3,3,
            "Daniel Roman",
            "Sanchez Sanchez",
            "Daniel Roman",
            true,
            false,
            "Funcionario"
        )
    ]
    for(let i=4;i<10;i++){
        
        $scope.listEmpleado.push(
            new Empleado(i,i,
                "Nombre falso el "+(i-3)+"º",
                "Appelido False",
                "Nombre falso el "+(i-3)+"º",
                true,
                false,
                "Funcionario"
            )
        );
    }

    $scope.indxSelecionado = 0;
    //funciones de llamada


    $scope.setIndxSelecionado = function(elIndex){
        $scope.indxSelecionado = elIndex;
    }
});