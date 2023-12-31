<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resep extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'judul',
        'slug',
        'deskripsi',
        'bahan',
        'langkah',
        'image',
        'like',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
