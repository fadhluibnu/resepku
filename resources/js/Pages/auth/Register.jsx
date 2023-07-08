import { useState } from 'react'
import { router, Head, Link, useForm } from '@inertiajs/react'
import usePage from '@inertiajs/react'
import LayoutAuth from './partials/Layouts'

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        name: '',
        email: '',
        password: '',
    })

    const { flash } = usePage().props
    console.log(flash)

    function submit(e) {
        e.preventDefault()
        post('/register')
    }
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
            {/* {
                session.fail && (
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        {session.fail}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                )
            } */}
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="username" class="form-label fw-medium" style={{
                        color: '#141632'
                    }}>Username</label>
                    <input type="text" value={data.username} onChange={e => setData('username', e.target.value)} className={`form-control p-2 ${errors.username && 'is-invalid'}`} id="username" required/>
                    {errors.username && <div className='invalid-feedback'>{errors.username}</div>}
                </div>
                <div class="mb-3">
                    <label for="nama" class="form-label fw-medium" style={{
                        color: '#141632'
                    }}>Nama</label>
                    <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className={`form-control p-2 ${errors.name && 'is-invalid'}`} id="nama" required/>
                    {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label fw-medium" style={{
                        color: '#141632'
                    }}>Email</label>
                    <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} className={`form-control p-2 ${errors.email && 'is-invalid'}`} id="email" required/>
                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </div>
                <div class="mb-3">
                    <label for="passwordx" class="form-label fw-medium" style={{
                        color: '#141632'
                    }}>Password</label>
                    <input type="password" value={data.password} onChange={e => setData('password', e.target.value)} className={`form-control p-2 ${errors.password && 'is-invalid'}`} id="passwordx" required/>
                    {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
                </div>
                <p className='text-secondary'>Sudah memiliki akun ? <Link href='/login' className='text-decoration-none fw-medium'>Login</Link></p>
                <button type="submit" class="btn order border-0 w-100 text-white text-center fw-medium p-3" style={{
                    backgroundImage: "linear-gradient(to right, #2782f7, #5926ff, #6d43f5)"
                }} disabled={processing}>Daftar</button>
            </form>
        </LayoutAuth>
    )
}