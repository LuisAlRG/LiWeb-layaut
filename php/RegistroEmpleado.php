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
		$empleado = new Libro();


        //Administrador
        $empleado->nombre = "Kenji";
        $empleado->apellido = "Gonzalez Hoshino";
        $empleado->nombreUsuario = "Kenji 195";
        $empleado->password = "passwordchido";
        //$empleado->gerente = true;
        //$empleado->contratado = true;

        //Funcionario
        $empleado->nombre = "Daniel Roman";
        $empleado->apellido = "Nuñez Aguirre";
        $empleado->nombreUsuario = "DA";
        $empleado->password = "meGustaPizza";
        //$empleado->contratado = true;

        //Administrador
        $empleado->nombre = "Luis Alfonso";
        $empleado->apellido = "Rodriguez Gonzalez";
        $empleado->nombreUsuario = "Luis Alf";
        $empleado->password = "EsoDijoElla";
        //$empleado->gerente = false;
        //$empleado->contratado = true;

        //Funcionario
        $empleado->nombre = "Jose Luis";
        $empleado->apellido = "Sanchez Sanchez";
        $empleado->nombreUsuario = "Sanchezo";
        $empleado->password = "atupaehcniPjajajajaJ";
        //$empleado->contratado = true;

        //Funcionario
        $empleado->nombre = "Brian";
        $empleado->apellido = "Miranda Aguirre";
        $empleado->nombreUsuario = "El Brayan";
        $empleado->password = "recursando";
        //$empleado->contratado = false;

        //Funcionario
        $empleado->nombre = "Barney";
        $empleado->apellido = "Dinosaurio";
        $empleado->nombreUsuario = "Amigo fiel";
        $empleado->password = "toysolito";
        //$empleado->contratado = false;

        //Funcionario
        $empleado->nombre = "Thomas";
        $empleado->apellido = "Tren";
        $empleado->nombreUsuario = "Dank Engine";
        $empleado->password = "weliketoparty2000";
        //$empleado->contratado = false;


        
        //$libro->idEditorial = 5;
        //mejor diganme que cual editorial piense y ya cuando tengamos los dato lo relacionamos

        //este tambien requiere autor y genero (si quieren mas de uno se puede)

        $libro->save();
    }
}
