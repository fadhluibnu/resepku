<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resep extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_user',
        'judul',
        'slug',
        'deskripsi',
        'bahan',
        'langkah',
        'image',
        'like',
    ];
}
