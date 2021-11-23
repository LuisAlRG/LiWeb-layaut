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
		$libro = new Libro();



        $genero->nombre = "Aventura";
        $genero->nombre = "Ciencia Ficcion";
        $genero->nombre = "Fantasia";
        $genero->nombre = "Gotica";
        $genero->nombre = "Policiaca";
        $genero->nombre = "Romance";
        $genero->nombre = "Paranormal";
        $genero->nombre = "Terror";
        $genero->nombre = "Humor";
        $genero->nombre = "Poesia";
        $genero->nombre = "Mitologia";
        $genero->nombre = "Documental";


        
        //$libro->idEditorial = 5;
        //mejor diganme que cual editorial piense y ya cuando tengamos los dato lo relacionamos

        //este tambien requiere autor y genero (si quieren mas de uno se puede)

        $libro->save();
    }
}
