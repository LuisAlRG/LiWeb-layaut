var app = angular.module('allApp',[]);
var marcador = null;

$("tablaInfo>div>#cuerpoEntero>section").attr(
    {
        'ng-repeat':"libros in listLibrosSelect track by $index",
        'ng-init':"mostElemento=false"
    }
);

$("tablaInfo>div>#cuerpoEntero>section>div").attr(
    {
        'ng-click':"mostElemento=((mostElemento && (indxSelecionado == $index)) ? false : true); setIndxSelecionado($index) ;"
    }
);

$("tablaInfo>div>#cuerpoEntero>section>div.cel5 , div.elementComplete").attr(
    {
        'ng-click':""
    }
);

$("div.elementComplete").attr(
    {
        'ng-if':"mostElemento && indxSelecionado == $index"
    }
);

$("div.elementComplete>section>div>ul>li").attr(
    {
        'ng-repeat':"autor in libros.autores"
    }
);

//desaparese la tabla de elementos y aparese el nota de pago
$("tablaInfo, tablaPago").attr(
    {
        'ng-if':"banderaCaso==0"
    }
);
$("notaDePago").attr(
    {
        'ng-if':"banderaCaso>0"
    }
);
$("botonesDeAccion>div>div>button").attr(
    { 
        'ng-show':"banderaCaso==0"
    }
);
$("botonesDeAccion>div>div>button:nth-child(1)").attr(
    {
        'ng-click':"banderaCaso=1"
    }
);
$("botonesDeAccion>div>div>button:nth-child(2)").attr(
    {
        'ng-click':"banderaCaso=2"
    }
);
$("botonesDeAccion>div>div>button:nth-child(3)").attr(
    {
        'ng-click':"banderaCaso=3"
    }
);

app.controller('allController',function($scope,$http){
    //inicialisar valores globales
    $scope.precioTotal = 0;

    $scope.indxSelecionado = 0;

    $scope.banderaCaso = 0;
    //inicializando valores
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
    for(let i=1;i<6;i++){
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
    $scope.listLibrosSelect = $scope.listLibros;



    //funciones de uso
    function totalPrecio() { 
        $scope.precioTotal = 0;
        $scope.listLibros.forEach(element => {
            $scope.precioTotal += element.precio;
        });
    }
    totalPrecio();
    //funciones de llamada
    $scope.setIndxSelecionado = function(elIndex){
        $scope.indxSelecionado = elIndex;
    }
    $scope.getPrecioConFotmato= function(precio){
        return (precio).toLocaleString('en-US', {style: 'currency', currency: 'USD',})
    }
});