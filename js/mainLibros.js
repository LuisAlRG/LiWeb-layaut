var app = angular.module('allApp',[]);
var marcador = null;

    $("#parteIzquierdo").attr(
        {
            'ng-init':"showForm = false"
        }
    );

    $("#parteIzquierdo>accionesInputs").attr(
        {
            'ng-if':"showForm"
        }
    );

    $("#btnConsultar").attr(
        {
            'ng-click':"showForm=true"
        }
    );



    $("tablaInfo>div>div>section").attr(
        {
            'ng-repeat':"libros in listLibros track by $index",
            'ng-init':"mostElemento = false;"
        }
    );

    $("tablaInfo>div>div>section>div").attr(
        {'ng-click': "mostElemento=((mostElemento && (indxSelecionado == $index)) ? false : true); setIndxSelecionado($index) ;"}
    );

    $("tablaInfo>div>div>section>div.elementComplete").attr(
        {'ng-if':"mostElemento && indxSelecionado == $index"}
    );

    app.controller('allController',function($scope,$http){
        //inicializaciones
        $scope.listLibros=[
            {id:0,
            titulo:"El Poopero",
            autores:["chayanne","Ilum Ticks","uno mas","otro mas", "Nunca acabara"],
            editorial:"Nulle Illuminatus",
            cantidad:5, 
            acabo:false,
            precio:320
            }
        ];

        for(let i=1;i<15;i++){
            let generarTitulo = "Programacion " + ((i%8==0)?"Estrcuturada":(i%6==0)?"Logica":(i%4==0)?"Para principiantes":(i%2==0)?"de C# y javascript":"para Proyectos");
            let precioGenerado = Math.random()* (5001 - 200) + 200;
            $scope.listLibros.push({
                id:i,
                titulo:generarTitulo,
                autores:["Luisito Rodriguez","Fransisco Imadero"],
                editorial:(i%2==0)?"Sumerville":"Prentice Hall",
                cantidad:10 + (i*(i%6)), 
                acabo:false,
                precio:precioGenerado
            });
        }
    
        $scope.listVentaMostrado=[];

        $scope.indxSelecionado = 0;

        //funciones
        $scope.formatoFecha = function( laFecha ){
            let cdena = venta.fecha.getDate() +"/"+ venta.fecha.getMonth() +"/"+ venta.fecha.getFullYear() ;
            return cdena;
        }

        $scope.setIndxSelecionado = function(elIndex){
            $scope.indxSelecionado = elIndex;
        }

        $scope.cambiarSelectedIndex = function(elIndex){
            return $scope.indxSelecionado == elIndex;
        }
    });