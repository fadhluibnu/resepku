# Installation

## Requirement

- PHP version >= 8
- Composer
- MySQL
- Node JS

## 1. Clone Project

Download atau clone repository ini dengan perintah dibawah

```bash
git clone https://github.com/fadhluibnu/resepku.git
```

## 2. Install Dependecies

Jalankan perintah `composer` dan `npm` dibawah

```bash
composer install
npm install
```

## 3. Rename File env

Renama file `.env.example` menjadi `.env`

## 4. Generate Key

Jalankan perintah artisan untuk melakukan generate key

```bash
php artisan key:generate
```

## 5. Buat dan Migrate Database

Buat database dengan nama `laravel_resepku` dan dilanjutkan dengan menjalankan perintah artisan untuk migrate database

```bash
php artisan migrate
```

## 6. Jalanakan Website

Jalankan perintah artisan untuk menjalankan laravel

```bash
php artisan serve
```

Selanjutnya buka terminal baru untuk menjankan server React Js

```bash
npm run build
npm run dev
```

Setelah semua diekskusi buka url dari hasil perintah `php artisan serve`

