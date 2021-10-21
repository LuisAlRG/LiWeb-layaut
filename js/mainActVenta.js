var app = angular.module('allApp',[]);
var marcador = null;
app.controller('allController',function($scope,$http){
    //inicialisar valores globales
    $scope.listLibros = [
        {id:0,
            titulo:"El Poopero",
            autores:["chayanne","Ilum Ticks","uno mas","otro mas", "Nunca acabara"],
            editorial:"Nulle Illuminatus",
            cantidad:5, 
            acabo:false,
            precio:320
        }
    ]
    for(let i=1;i<15;i++){
        let generarTitulo = "Programacion " + ((i%8==0)?"Estrcuturada":(i%6==0)?"Logica":(i%4==0)?"Para principiantes":(i%2==0)?"de C# y javascript":"para Proyectos");
        let precioGenerado = Math.random()* (5001 - 200) + 200;
        $scope.listLibros.push({
            id:i,
            titulo:generarTitulo,
            autores:["Luisito Rodriguez","Fransisco Imadero"],
            editorial:(i%2==0)?"Sumerville":"Prentice Hall",
            cantidad:30, 
            acabo:false,
            precio:precioGenerado
        });
    }
    $scope.listLibrosSelect = []

    $scope.precioTotal = 0;


    //funciones de llamada
    $scope.accionAderirSeleccion = function(index){
        $scope.listLibros[index].cantidad--;
        if($scope.listLibros[index].cantidad<=0)
            $scope.listLibros[index].acabo=true;
        
        //if(!$scope.listLibrosSelect.includes($scope.listLibros[index]))
            $scope.listLibrosSelect.push($scope.listLibros[index]);
    }

    $scope.accionRemoverSeleccion = function(index){
        $scope.listLibrosSelect.splice(index,1);
    }

    $scope.mostrarBtnVenta = function(){
        return $scope.listLibrosSelect.length > 0;
    }
});