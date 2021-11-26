<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Universidade extends Model
{
    use HasFactory;
    protected $fillable = [
        'nome',
        'descricao',
        'dt_fundacao',
	'pais_id'
    ];

    protected $hidden = ['pais_id'];

}
