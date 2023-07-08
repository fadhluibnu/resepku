import { useState } from 'react'
import { router, Head, Link, useForm, usePage } from '@inertiajs/react'
import LayoutAuth from './partials/Layouts'

export default function Login({session}) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    })
    const { flash } = usePage().props
    // console.log(flash.success)
    function submit(e) {
        e.preventDefault()
        post('/login')
    }

    return (
        <LayoutAuth>
            <Head title='Login' />
            <h1 className='mb-5 fw-bolder' style={{
                color: '#141632'
            }}>Login</h1>
            <h4 className='fw-semibold' style={{
                color: '#141632'
            }}>Hey, Hallo 👋</h4>
            <p className='text-secondary'>Temukan dan berbagi resep makanan</p>
            {/* {
                session.success &&
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {session.success}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            } */}
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label fw-medium" style={{
                        color: '#141632'
                    }}>Email</label>
                    <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} className={`form-control p-2 ${errors.email && 'is-invalid'}`} id="exampleInputEmail1" />
                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label fw-medium" style={{
                        color: '#141632'
                    }}>Password</label>
                    <input type="password" value={data.password} onChange={e => setData('password', e.target.value)} className={`form-control p-2 ${errors.password && 'is-invalid'}`} id="exampleInputPassword1" />
                    {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
                </div>
                <p className='text-secondary'>Belum memiliki akun ? <Link href='/register' className='text-decoration-none fw-medium'>Daftar</Link></p>
                <button type="submit" disabled={processing} className="btn order border-0 w-100 text-white text-center fw-medium p-3" style={{
                    backgroundImage: "linear-gradient(to right, #2782f7, #5926ff, #6d43f5)"
                }}>Login</button>
            </form>
        </LayoutAuth>
    )
}