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

        $autor->nombre = "Roger S.";    
        $autor->apellido = "Pressman";
        $autor->nombre = "Ian";
        $autor->apellido = "Sommerville";
        $autor->nombre = "John"; 
        $autor->apellido = "Bedini";
        $autor->nombre = "Grady";
        $autor->apellido = "Booch";
        $autor->nombre = "Brend";
        $autor->apellido = "Bruegge";
        $autor->nombre = "Whatts";
        $autor->apellido = "Humphrey";
        $autor->nombre = "Ivar";
        $autor->apellido = "Jacobson";
        $autor->nombre = "James";
        $autor->apellido = "Rumbaugh";
        $autor->nombre = "Kenneth E.";
        $autor->apellido = "Kendall";
        $autor->nombre = "Julie E.";
        $autor->apellido = "Kendall";
        $autor->nombre = "Henrik";
        $autor->apellido = "Kniberg";
        $autor->nombre = "Carlos";
        $autor->apellido = "Fontela";        
        $autor->nombre = "Alfredo";
        $autor->apellido = "Weitzenfeld";        
        $autor->nombre = "James";
        $autor->apellido = "Senn";        
        $autor->nombre = "Mario G.";
        $autor->apellido = "Piattini Velthuis";


        //$libro->idEditorial = 5;
        //mejor diganme que cual editorial piense y ya cuando tengamos los dato lo relacionamos

        //este tambien requiere autor y genero (si quieren mas de uno se puede)

        $libro->save();
    }
}
