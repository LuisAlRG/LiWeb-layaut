<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
//use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use App\Models\Libro;
use App\Models\Editorial;
use Illuminate\Support\Facades\Schema;

class LibroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	Schema::disableForeignKeyConstraints();
        DB::table('llaveForanea')->truncate();
        DB::table('idEditorial')->truncate();
		Schema::enableForeignKeyConstraints();
		// $libro = new Libro();

        // $libro->titulo = "Libro Chido";
        // $libro->precio = 2500;
        // $libro->edicion = 2;
        // $libro->cantidad = 10;

        //$libro->idEditorial = 5;
        //mejor diganme que cual editorial piense y ya cuando tengamos los dato lo relacionamos

        //este tambien requiere autor y genero (si quieren mas de uno se puede)

        // $libro->save();
        // agregar otro libro
        $libro = new Libro();

        $libro->titulo = "Calculo Multiples variables";
        $libro->precio = 5000;
        $libro->edicion = 7;
        $libro->cantidad = 25;

        $libro->save();
        // agregar otro
        $libro = new Libro();

        $libro->titulo = "Sistemas embedidos";
        $libro->precio = 1750;
        $libro->edicion = 4;
        $libro->cantidad = 20;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Calculo infinitesimal";
        $libro->precio = 4000;
        $libro->edicion = 6;
        $libro->cantidad = 43;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Deutsch Na Klar";
        $libro->precio = 2750;
        $libro->edicion = 7;
        $libro->cantidad = 18;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Ecuaciones diferenciales";
        $libro->precio = 2350;
        $libro->edicion = 2;
        $libro->cantidad = 15;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Programacion Arduino";
        $libro->precio = 5750;
        $libro->edicion = 9;
        $libro->cantidad = 20;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Programaci??n Raspberry Pi";
        $libro->precio = 1730;
        $libro->edicion = 7;
        $libro->cantidad = 35;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Vision Computacional";
        $libro->precio = 5431;
        $libro->edicion = 2;
        $libro->cantidad = 17;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Redes Bayesianas";
        $libro->precio = 5412;
        $libro->edicion = 6;
        $libro->cantidad = 19;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Teor??a de Grafos";
        $libro->precio = 3781;
        $libro->edicion = 2;
        $libro->cantidad = 21;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "English for Everyone, Phrasal Verbs";
        $libro->precio = 2134;
        $libro->edicion = 3;
        $libro->cantidad = 5;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Inteligencia Artificial";
        $libro->precio = 6000;
        $libro->edicion = 1;
        $libro->cantidad = 10;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Ecuaciones de Maxwell";
        $libro->precio = 5000;
        $libro->edicion = 4;
        $libro->cantidad = 45;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Electromagnetismo";
        $libro->precio = 3215;
        $libro->edicion = 2;
        $libro->cantidad = 23;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "English Idioms in Use";
        $libro->precio = 2500;
        $libro->edicion = 11;
        $libro->cantidad = 32;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "IELTS Academic 14";
        $libro->precio = 1250;
        $libro->edicion = 7;
        $libro->cantidad = 5;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Filme y Cinem??tica";
        $libro->precio = 2341;
        $libro->edicion = 2;
        $libro->cantidad = 10;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Arquitectura";
        $libro->precio = 2350;
        $libro->edicion = 2;
        $libro->cantidad = 10;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Artes graficas";
        $libro->precio = 2341;
        $libro->edicion = 4;
        $libro->cantidad = 10;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Fotograf??a";
        $libro->precio = 2730;
        $libro->edicion = 5;
        $libro->cantidad = 12;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Arte Contemporanea";
        $libro->precio = 4312;
        $libro->edicion = 1;
        $libro->cantidad = 5;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Qu??mica org??nica";
        $libro->precio = 3215;
        $libro->edicion = 3;
        $libro->cantidad = 10;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Algoritmos y Estructura de datos";
        $libro->precio = 5000;
        $libro->edicion = 12;
        $libro->cantidad = 15;

        $libro->save();
        $libro = new Libro();

        $libro->titulo = "Psicolog??a";
        $libro->precio = 5730;
        $libro->edicion = 1;
        $libro->cantidad = 19;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Antropolog??a";
        $libro->precio = 799;
        $libro->edicion = 5;
        $libro->cantidad = 21;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Mec??nica";
        $libro->precio = 3129;
        $libro->edicion = 7;
        $libro->cantidad = 20;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Bioingenier??a";
        $libro->precio = 2544;
        $libro->edicion = 8;
        $libro->cantidad = 43;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Telecomunicaciones";
        $libro->precio = 2999;
        $libro->edicion = 3;
        $libro->cantidad = 12;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Criptograf??a";
        $libro->precio = 999;
        $libro->edicion = 10;
        $libro->cantidad = 7;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Base de datos";
        $libro->precio = 2999;
        $libro->edicion = 7;
        $libro->cantidad = 12;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Desarrollo web";
        $libro->precio = 5432;
        $libro->edicion = 1;
        $libro->cantidad = 10;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Programaci??n en Haskell";
        $libro->precio = 1199;
        $libro->edicion = 4;
        $libro->cantidad = 19;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Wolfram Mathematica, Manual";
        $libro->precio = 4999;
        $libro->edicion = 8;
        $libro->cantidad = 21;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Cibern??tica";
        $libro->precio = 2131;
        $libro->edicion = 10;
        $libro->cantidad = 20;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Zoolog??a";
        $libro->precio = 2100;
        $libro->edicion = 3;
        $libro->cantidad = 15;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Pre-Calculo";
        $libro->precio = 3999;
        $libro->edicion = 9;
        $libro->cantidad = 20;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "??lgebra Lineal";
        $libro->precio = 1999;
        $libro->edicion = 5;
        $libro->cantidad = 14;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "??nalisis Complejo";
        $libro->precio = 5999;
        $libro->edicion = 10;
        $libro->cantidad = 9;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Ecuaciones Diferenciables Parciales";
        $libro->precio = 1299;
        $libro->edicion = 3;
        $libro->cantidad = 7;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Teor??a de los n??meros";
        $libro->precio = 4999;
        $libro->edicion = 10;
        $libro->cantidad = 8;

        $libro->save();

        $libro = new Libro();

        $libro->titulo = "Topolog??a";
        $libro->precio = 1250;
        $libro->edicion = 7;
        $libro->cantidad = 20;

        $libro->save();
    }
    }
    }
    }
    }
    }
}
