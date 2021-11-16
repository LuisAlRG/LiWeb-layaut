

var app = angular.module('allApp',[]);
var marcador = null;

$("tablaInfo>div>#cuerpoEntero>section").attr(
    {
        'ng-repeat':"autor in listAutores track by $index",
        'ng-init':"mostElemento=false; mostOpcionesAdm = false;"
    }
);

$("tablaInfo>div>div>section>div").attr(
    {'ng-click': "mostElemento=((mostElemento && (indxSelecionado == $index)) ? false : true); setIndxSelecionado($index) ;"}
);

$("tablaInfo>div>div>section>div.cel4").attr(
    {'ng-click': ""}
);
$("div.cel4>svg").attr(
    {'ng-click':"mostOpcionesAdm= ((mostOpcionesAdm && (indxSelecionadoOp == $index)) ? false : true); setIndxSelecionadoOp($index) "}
);

$("tablaInfo>div>div>section>div.elementComplete").attr(
    {'ng-if':"mostElemento && indxSelecionado == $index"}
);

$("tablaInfo>div>div>section>div.opcionesAdm").attr(
    {'ng-if':"mostOpcionesAdm && indxSelecionadoOp == $index"}
);

$("div.opcionesAdm>section>div:nth-child(1)>svg").attr(
    {'ng-click':"OnModificarAutor(autor)"}
)

app.controller('allController',function($scope,$http){
    //inicialisar valores globales
    $scope.listAutores = [
        new Autor(0,"Herman","Cortes")
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
        $scope.listAutores.push(
            new Autor(
                i,
                generarNombre1+" "+generarNombre2,
                generarApellido1+" "+generarApellido2
            )
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

    $scope.OnModificarAutor = function(autor){
        let claseElemento = ".element"+autor.idAutor
        console.log(claseElemento);
        console.log(autor);

        let columna1='<div class="cel1"> <input type="number" name="claveM" id="claveM" value='+autor.idAutor+' disabled> </div>',
        columna2='<div class="cel2"> <input type="text" name="nombreAutorM" id="nombreAutorM" value="'+autor.nombre+'"></div>',
        columna3='<div class="cel3"> <input type="text" name="apellidoAutorM" id="apellidoAutorM" value="'+autor.apellido+'"> </div>',
        columna4='<div class="cel4"> '+
        '<svg  viewBox="-10 -10 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">'+
            '<circle class="fondoG" cx="50" cy="50" r="45" fill="#008000"/>'+
            '<g class="cruzNegraG">'+
                '<rect x="44" y="20" width="15" height="65" fill="black" fill-opacity="0.4"/>'+
                '<rect x="85" y="45" width="15" height="65" transform="rotate(90 85 45)" fill="black" fill-opacity="0.4"/>'+
            '</g>'+
            '<g class="cruzBlancaG">'+
                '<rect x="42" y="17" width="15" height="65" fill="white"/>'+
                '<rect x="83" y="42" width="15" height="65" transform="rotate(90 83 42)" fill="white"/>'+
            '</g>'+
        '</svg>'+
        '</div>'
        //$(claseElemento).remove();
        $(claseElemento).empty();
        $(claseElemento).append(
            columna1+
            columna2+
            columna3+
            columna4
        );
        $(claseElemento).ready(function(){
             $("svg").click(function(){
                let clave =     $("#claveM").val(),
                nombre =        $("#nombreAutorM").val(),
                apellido =      $("#apellidoAutorM").val()
                console.log([clave,nombre,apellido])
            });
        });
    }
});