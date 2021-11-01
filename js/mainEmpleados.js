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
        {id:0,
            nombre:"Luis Alfonso",
            apellido:"Rodrigez Gonzalez",
            rol: "Gerente",
            contratado:true
        },
        {id:1,
            nombre:"Kenji",
            apellido:"Gonzalez Hoshino",
            rol: "Administrador",
            contratado:true
        },
        {id:2,
            nombre:"Jose Luis",
            apellido:"Sanchez Sanchez",
            rol: "Funcionario",
            contratado:false
        },
        {id:3,
            nombre:"Daniel Roman",
            apellido:"Nuñes Rodriguez",
            rol: "Funcionario",
            contratado:true
        }
    ]
    for(let i=4;i<10;i++){
        
        $scope.listEmpleado.push(
            {id:i,
                nombre:"Nombre falso el "+(i-3)+"º",
                apellido:"Appelido False",
                rol: "Funcionario",
                contratado:true
            }
        );
    }

    $scope.indxSelecionado = 0;
    //funciones de llamada


    $scope.setIndxSelecionado = function(elIndex){
        $scope.indxSelecionado = elIndex;
    }
});