var app = angular.module('allApp',[]);
var marcador = null;

$("tablaInfo.elementoDisponible>div>#cuerpoEntero>section").attr(
    {
        'ng-repeat':"libros in listLibros track by $index",
        'ng-init':"mostElemento=false",
        'ng-show':"!libros.agotado"
    }
);

$("tablaInfo.elementoDisponible>div>#cuerpoEntero>section>.elementComplete").attr(
    {
        'ng-if':"mostElemento"
    }
);

$("tablaInfo.elementoSeleccionado>div>#cuerpoEntero>section").attr(
    {
        'ng-repeat':"libros in listLibrosSelect track by $index",
        'ng-init':"mostElemento=false"
    }
);

$("tablaInfo>div>div>section>div").attr(
    {'ng-click': "mostElemento=((mostElemento && (indxSelecionado == $index)) ? false : true); setIndxSelecionado($index) ;"}
);

$("tablaInfo>div>div>section>div.cel6").attr(
    {'ng-click': ""}
);

$("tablaInfo>div>div>section>div.elementComplete").attr(
    {'ng-if':"mostElemento && indxSelecionado == $index"}
);


app.controller('allController',function($scope,$http){
    //inicialisar valores globales
    
    let primerElemento = new Libro(1,2,//id libro id editorial
        "El Poopero",//titulo
        320,//precio
        5,//edicion
        5//cantidad
    );
    primerElemento.addListAutor = ["chayanne","Ilum Ticks","uno mas","otro mas", "Nunca acabara"];
    primerElemento.setEditorial = "Nulle Illuminatus";
    $scope.listLibros=[
        primerElemento
    ];
    for(let i=1;i<15;i++){
        let generarTitulo = "Programacion " + ((i%8==0)?"Estrcuturada":(i%6==0)?"Logica":(i%4==0)?"Para principiantes":(i%2==0)?"de C# y javascript":"para Proyectos");
        let precioGenerado = Math.random()* (5001 - 200) + 200;
        let objetoLibro = new Libro(i,i%8,
            generarTitulo,
            precioGenerado,
            i%9,
            10 + (i*(i%6))
        )
        objetoLibro.addListAutor = ["Luisito Rodriguez","Fransisco Imadero"];
        objetoLibro.setEditorial = (i%2==0)?"Sumerville":"Prentice Hall";
        $scope.listLibros.push(
            objetoLibro
        );
    }
    $scope.listLibrosSelect = []

    $scope.precioTotal = 0;

    $scope.indxSelecionado = 0;
    //funciones de llamada
    $scope.accionAderirSeleccion = function(index){
        if(!$scope.listLibros[index].agotado){
            $scope.listLibros[index].cantidad--;
            $scope.listLibrosSelect.push($scope.listLibros[index]);
        }
            
    }

    $scope.accionRemoverSeleccion = function(index){
        let elementSacado = $scope.listLibrosSelect[index];
        $scope.listLibrosSelect.splice(index,1);
        let indexListaTotal = $scope.listLibros.findIndex(libro=>libro.idLibro == elementSacado.idLibro);
        $scope.listLibros[ indexListaTotal ].cantidad++;
    }

    $scope.mostrarBtnVenta = function(){
        return $scope.listLibrosSelect.length > 0;
    }

    $scope.setIndxSelecionado = function(elIndex){
        $scope.indxSelecionado = elIndex;
    }

    $scope.AccionRealizarVenta = function(){
        let sentCliente=    $scope.cliente;

        let listaNoRepetido=[];
        let ultimoElemento= null;
        for(let i=0;i<$scope.listLibrosSelect.length;i++){
            let findIndex = listaNoRepetido.findIndex(libro=>libro.idLibro == $scope.listLibrosSelect[i].idLibro);
            if(findIndex != -1){
                listaNoRepetido[findIndex].cantidadSeleccionado++;
            }
            else{
                listaNoRepetido.push($scope.listLibrosSelect[i]);
                listaNoRepetido[listaNoRepetido.length-1].cantidadSeleccionado=1;
            }
        }
        $scope.librosSelct = listaNoRepetido.map(libro=> libro.idLibro).join(" ");
        $scope.librosCantidad = listaNoRepetido.map(libro=> libro.cantidadSeleccionado).join(" ");

        let sentLibrosSelct = $scope.librosSelct;
        let sentLibrosCantidad = $scope.librosCantidad;

        let sentItemsLog={
            cliente:sentCliente,
            librosSelect:sentLibrosSelct,
            librosCantidad:sentLibrosCantidad
        }

        console.log(sentItemsLog);

        let nombreid = "realizarCompra";
        document.getElementById(nombreid).submit();
    }
});