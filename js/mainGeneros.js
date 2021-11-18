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

$("tablaInfo>div>div>section>div.cel3").attr(
    {'ng-click': ""}
);
$("div.cel3>svg").attr(
    {'ng-click':"mostOpcionesAdm= ((mostOpcionesAdm && (indxSelecionadoOp == $index)) ? false : true); setIndxSelecionadoOp($index)"}
);

$("tablaInfo>div>div>section>div.elementComplete").attr(
    {'ng-if':"mostElemento && indxSelecionado == $index"}
);

$("tablaInfo>div>div>section>div.opcionesAdm").attr(
    {'ng-if':"mostOpcionesAdm && indxSelecionadoOp == $index"}
);

$("div.opcionesAdm>section>div:nth-child(1)>svg").attr(
    {'ng-click':"OnModificarGenero(genero,$index)"}
)
app.controller('allController',function($scope,$http){
    //inicialisar valores globales
    $scope.listGenero = [
        new Genero(0,"Novela"),
        new Genero(1,"Romanse"),
        new Genero(2,"Ciencia Fixion"),
        new Genero(3,"Historico"),
        new Genero(4,"De epoca"),
        new Genero(5,"Terror"),
        new Genero(6,"Manga")
    ]
    for(let i=0;i<8;i++){
        
        $scope.listGenero.push(
            new Genero(i+7,"Genero no."+(i-1))
        );
    }

    $scope.indxSelecionado = 0;
    $scope.indxSelecionadoOp = 0;
    //funciones de llamada


    $scope.setIndxSelecionado = function(elIndex){
        $scope.indxSelecionado = elIndex;
    }
    $scope.setIndxSelecionadoOp = function(elIndex){
        $scope.indxSelecionadoOp = elIndex;
    }

    $scope.OnModificarGenero = function(genero,thisindex){
        console.log(genero);
        let claseElemento = ".element"+genero.idGenero;
        console.log(claseElemento);
        $scope.indxSelecionadoOp = -1;
        $scope.indxSelecionado = -1;
        let
        columna1='<div class="cel1 Quitable">'+'<input type="number" name="claveM" id="claveM" value='+genero.idGenero+' disabled>'+'</div>',
        columna2='<div class="cel2 Quitable">'+'<input type="text" name="nombreGenerosM" id="nombreGenerosM" value="'+genero.nombre+'">'+'</div>',
        columna3='<div class="cel3 Quitable">'+
        '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" ng-click="">'+
        '<rect id="Rectangle 1" width="100" height="100" fill="white"/>'+
        '<circle id="fondo" cx="50" cy="50" r="45" fill="#008000"/>'+
        '<g id="Sombra">'+
        '<path id="Vector 1" d="M87.25 39.75L41.25 86.25L13.75 58.25L24.25 47.75L41.25 64.25L76.75 28.75L87.25 39.75Z" fill="black" fill-opacity="0.4"/>'+
        '</g>'+
        '<g id="ElementoClave">'+
        '<rect id="Rectangle 2" x="75.9325" y="23.9706" width="15" height="65" transform="rotate(45 75.9325 23.9706)" fill="white"/>'+
        '<rect id="Rectangle 3" x="51.1838" y="69.9325" width="15" height="39" transform="rotate(135 51.1838 69.9325)" fill="white"/>'+
        '</g>'+
        '</svg>'+
        '</div>';
        $(claseElemento + ">div").toggleClass("putItInvisible");
        $(claseElemento).append(
            columna1+
            columna2+
            columna3
        );
        $(claseElemento+">div.Quitable svg").click(function(){
            let
            clave =         parseInt($("#claveM").val()),
            nombre =        $("#nombreGenerosM").val();
            /*$http.get('modificarAutor',{}).then(
                function(response){
                    let datoRespuesta = response.data;
                    if(datoRespuesta){
                    }
                },
                function(response){
                    $scope.mensId = "Error de conexion al tratar de modificar";
                }
            );*/
            console.log([clave,nombre]);
            $(".Quitable").remove();
            $scope.listGenero[thisindex].idEditorial=clave;
            $scope.listGenero[thisindex].nombre=nombre;
            $(claseElemento + ">div").toggleClass("putItInvisible");
            $scope.$apply();
        });
    }
});