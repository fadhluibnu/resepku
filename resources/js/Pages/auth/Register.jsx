import { useState } from 'react'
import { router } from '@inertiajs/react'
import { Head } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
import LayoutAuth from './partials/Layouts'

export default function Register(){
    return (
        <LayoutAuth>
            <Head title='Register' />
            <h1 className='mb-5 fw-bolder' style={{
                color: '#141632'
            }}>Register</h1>
            <h4 className='fw-semibold' style={{
                color: '#141632'
            }}>Hey, Hallo 👋</h4>
            <p className='text-secondary'>Temukan dan berbagi resep makanan</p>
            <form>
                <div class="mb-3">
                    <label for="username" class="form-label fw-medium" style={{
                        color: '#141632'
                    }}>Username</label>
                    <input type="text" class="form-control p-2" id="username" />
                </div>
                <div class="mb-3">
                    <label for="nama" class="form-label fw-medium" style={{
                        color: '#141632'
                    }}>Nama</label>
                    <input type="text" class="form-control p-2" id="nama" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label fw-medium" style={{
                        color: '#141632'
                    }}>Email</label>
                    <input type="email" class="form-control p-2" id="email" />
                </div>
                <div class="mb-3">
                    <label for="passwordx" class="form-label fw-medium" style={{
                        color: '#141632'
                    }}>Password</label>
                    <input type="password" class="form-control p-2" id="passwordx" />
                </div>
                <p className='text-secondary'>Sudah memiliki akun ? <Link href='/login' className='text-decoration-none fw-medium'>Daftar</Link></p>
                <button type="submit" class="btn order border-0 w-100 text-white text-center fw-medium p-3" style={{
                    backgroundImage: "linear-gradient(to right, #2782f7, #5926ff, #6d43f5)"
                }}>Login</button>
            </form>
        </LayoutAuth>
    )
}