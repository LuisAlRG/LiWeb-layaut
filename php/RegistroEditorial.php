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



        $editorial->nombre = "Fondo de Cultura Economica";
        $editorial->nombre = "Penguin Books";
        $editorial->nombre = "Plaza y Janes";
        $editorial->nombre = "McGill-Queens University Press";
        $editorial->nombre = "Ediciones UC";
        $editorial->nombre = "HarperCollins";
        $editorial->nombre = "Bloomsbury";
        $editorial->nombre = "ALBA";
        $editorial->nombre = "ALFAGUARA";
        $editorial->nombre = "Alianza Editorial";
        $editorial->nombre = "Impresiones Pooperas";


        
        //$libro->idEditorial = 5;
        //mejor diganme que cual editorial piense y ya cuando tengamos los dato lo relacionamos

        //este tambien requiere autor y genero (si quieren mas de uno se puede)

        $libro->save();
    }
}
