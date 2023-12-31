import { Head, useForm } from "@inertiajs/react"
import Layout from "../Partials/Layouts"
import { useEffect, useState } from "react"
export default function Create({ user }) {
    // input bahan
    const [idxInpBahan, setIdxInpBahan] = useState([])
    const [valueInpBahan, setValueInpBahan] = useState([])
    const [jmlhInputBahan, setJmlhInputBahan] = useState(1)

    // input langkah langkah
    const [idxInpLangkah, setIdxInpLangkah] = useState([])
    const [valueInpLangkah, setValueInpLangkah] = useState([])
    const [jmlhInputLangkah, setJmlhInputLangkah] = useState(1)

    const { data, setData, post, progress, processing, errors } = useForm({
        user_id: '',
        judul: '',
        slug: '',
        deskripsi: '',
        bahan: '',
        langkah: '',
        image: null,
        like: 0,
    })
    console.log(errors)

    useEffect(() => {
        setData('slug', data.judul.split(' ').join('-').toLowerCase())
    }, [data.judul]);

    useEffect(() => {
        for (let i = 0; i <= jmlhInputBahan; i++) {
            idxInpBahan.push(i)
            valueInpBahan.push('')
        }
        for (let i = 0; i <= jmlhInputLangkah; i++) {
            idxInpLangkah.push(i)
            valueInpLangkah.push('')
        }
        setData('user_id', user.id)
    }, [])

    const updateStateBahan = (value, index) => {
        valueInpBahan[index] = value
        let bahan = ''
        for (let i = 0; i < valueInpBahan.length; i++) {
            const text = valueInpBahan[i];
            bahan += `${i + 1}. ${text}\n`
        }
        setData('bahan', bahan)
    }

    const updateStateLangkah = (value, index) => {
        valueInpLangkah[index] = value
        let langkah = ''
        for (let i = 0; i < valueInpLangkah.length; i++) {
            const text = valueInpLangkah[i];
            langkah += `${i + 1}. ${text}\n`
        }
        setData('langkah', langkah)
    }

    const addInputBahan = () => {
        setJmlhInputBahan((c) => c + 1)
        idxInpBahan.push(jmlhInputBahan + 1)
        valueInpBahan.push('')
    }

    const addInputLangkah = () => {
        setJmlhInputLangkah((c) => c + 1)
        idxInpLangkah.push(jmlhInputLangkah + 1)
        valueInpLangkah.push('')
    }
    function submit(e) {
        e.preventDefault()
        post('/dashboard')
    }
    return (
        <Layout>
            <Head title="Tulis Resepmu" />
            <div className="container mt-3">
                <form className="px-5" onSubmit={submit}>
                    <h3 className='mb-4' style={{
                        color: '#547794'
                    }}>Tulis Resepmu...</h3>
                    <div class="mb-3">
                        <label for="judul" class="form-label fw-medium" style={{
                            color: '#141632'
                        }}>Judul</label>
                        <input type="text" value={data.judul} onChange={e => setData('judul', e.target.value)} className={`form-control p-2 ${errors.judul && 'is-invalid'}`} id="judul" required />
                        {errors.judul && <div className='invalid-feedback'>{errors.judul}</div>}
                    </div>
                    <div class="mb-3">
                        <label for="slug" class="form-label fw-medium" style={{
                            color: '#141632'
                        }}>Slug</label>
                        <input type="text" value={data.slug} onChange={e => setData('slug', e.target.value)} className={`form-control p-2 ${errors.slug && 'is-invalid'}`} id="slug" required />
                        {errors.slug && <div className='invalid-feedback'>{errors.slug}</div>}
                    </div>
                    <div class="mb-3">
                        <label for="deskripsi" class="form-label fw-medium" style={{
                            color: '#141632'
                        }}>Deskripsi</label>
                        <textarea value={data.deskripsi} onChange={e => setData('deskripsi', e.target.value)} className={`form-control p-2 ${errors.deskripsi && 'is-invalid'}`} id="deskripsi" required rows="3"></textarea>
                        {errors.deskripsi && <div className='invalid-feedback'>{errors.deskripsi}</div>}
                    </div>
                    <div class="mb-3">
                        <label for="bahan" class="form-label fw-semibold" style={{
                            color: '#547794'
                        }}>Bahan - bahan</label>
                        {
                            idxInpBahan.map((idx) => <input type="text" onChange={(e) => updateStateBahan(e.target.value, idx)} className="form-control mb-2 p-2" id="bahan" />)
                        }
                        <p className="nav-link text-dark" onClick={() => addInputBahan()} style={{ cursor: 'pointer' }}>+ Item Bahan</p>
                        <textarea value={data.bahan} className={`form-control p-2 ${errors.bahan && 'is-invalid'}`} id="bahan" required rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="langkah" class="form-label fw-semibold" style={{
                            color: '#547794'
                        }}>Langkah - Langkah</label>
                        {
                            idxInpLangkah.map((idx) => <input type="text" onChange={(e) => updateStateLangkah(e.target.value, idx)} className="form-control mb-2 p-2" id="bahan" />)
                        }
                        <p className="nav-link text-dark" onClick={() => addInputLangkah()} style={{ cursor: 'pointer' }}>+ Item Langkah</p>
                        <textarea value={data.langkah} className={`form-control p-2 ${errors.langkah && 'is-invalid'}`} id="langkah" required rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label fw-medium" style={{
                            color: '#141632'
                        }}>Upload Foto Masakan</label>
                        <div class="input-group mb-3">
                            <input type="file" name="image" onChange={(e) => setData('image', e.target.files[0])} class="form-control" id="image" />
                        </div>
                        {errors.image && <div className='invalid-feedback'>{errors.image}</div>}
                    </div>
                    <button type="submit" class="btn order border-0 w-100 text-white text-center fw-medium p-3" style={{
                        backgroundColor: '#547794'
                    }} disabled={processing}>Terbitkan Resep</button>
                </form>
            </div>
        </Layout>
    )
}