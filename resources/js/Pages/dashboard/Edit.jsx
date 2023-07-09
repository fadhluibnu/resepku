import { useEffect, useState } from "react";
import Layout from "../Partials/Layouts";
import { Head, useForm } from "@inertiajs/react";
import { update } from "lodash";

export default function Edit({ resep }) {

    // bahan
    const [idxInpBahan, setIdxInpBahan] = useState([])
    const [valueInpBahan, setValueInpBahan] = useState([])
    const [jmlhInputBahan, setJmlhInputBahan] = useState()

    // input langkah langkah
    const [idxInpLangkah, setIdxInpLangkah] = useState([])
    const [valueInpLangkah, setValueInpLangkah] = useState([])
    const [jmlhInputLangkah, setJmlhInputLangkah] = useState()

    const [firstRender, setFirstRender] = useState(true);

    const { data, setData, post, progress, processing, errors } = useForm({
        id: resep.id,
        judul: resep.judul,
        slug: resep.slug,
        deskripsi: resep.deskripsi,
        bahan: resep.bahan,
        langkah: resep.langkah,
        image: null,
        like: resep.like,
    })
    useEffect(() =>{
        if (firstRender != true) {
            setData('slug', data.judul.split(' ').join('-').toLowerCase())
        }
        setFirstRender(false)
    }, [data.judul])
    useEffect(() => {
        let arrayValueBahan = resep.bahan.split(`\n`)
        setJmlhInputBahan(arrayValueBahan.length)

        let valueBahan = []
        let idxBahan = []
        for (let i = 0; i < arrayValueBahan.length; i++) {
            let text = arrayValueBahan[i];
            text = text.split(' ')
            text.shift()
            valueBahan.push(text.join(' '))
            idxBahan.push(i)
        }
        setIdxInpBahan(idxBahan)
        setValueInpBahan(valueBahan)

        let arrayValueLangkah = resep.langkah.split(`\n`)
        setJmlhInputLangkah(arrayValueLangkah.length)

        let valueLangkah = []
        let idxLangkah = []
        for (let i = 0; i < arrayValueLangkah.length; i++) {
            let text = arrayValueLangkah[i];
            text = text.split(' ')
            text.shift()
            valueLangkah.push(text.join(''))
            idxLangkah.push(i)
        }
        setIdxInpLangkah(idxLangkah)
        setValueInpLangkah(valueLangkah)
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
    const addInputBahan = () => {
        setJmlhInputBahan((c) => c + 1)
        idxInpBahan.push(jmlhInputBahan + 1)
        valueInpBahan.push('')
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
    const addInputLangkah = () => {
        setJmlhInputLangkah((c) => c + 1)
        idxInpLangkah.push(jmlhInputLangkah + 1)
        valueInpLangkah.push('')
    }
    function update(e) {
        e.preventDefault()
        post(`/dashboard/${resep.slug}`)
    }
    return (
        <Layout>
            <Head title={`${resep.judul} - Edit Resep`} />
            <div className="container mt-3">
                <form className="px-5" onSubmit={update}>
                    <h3 className='mb-4' style={{
                        color: '#547794'
                    }}>Edit Resepmu...</h3>
                    <div class="mb-3">
                        <label for="judul" class="form-label fw-medium" style={{
                            color: '#141632'
                        }}>Judul</label>
                        <input type="text" value={data.judul} onChange={(e) => {
                            setData('judul', e.target.value)
                        }} className={`form-control p-2 ${errors.judul && 'is-invalid'}`} id="judul" required />
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
                            idxInpBahan.map((idx) => <input type="text" value={valueInpBahan[idx]} onChange={(e) => updateStateBahan(e.target.value, idx)} className="form-control mb-2 p-2" id="bahan" />)
                        }
                        <p className="nav-link text-dark" onClick={() => addInputBahan()} style={{ cursor: 'pointer' }}>+ Item Bahan</p>
                    </div>
                    <div class="mb-3">
                        <label for="langkah" class="form-label fw-semibold" style={{
                            color: '#547794'
                        }}>Langkah - Langkah</label>
                        {
                            idxInpLangkah.map((idx) => <input type="text" value={valueInpLangkah[idx]} onChange={(e) => updateStateLangkah(e.target.value, idx)} className="form-control mb-2 p-2" id="bahan" />)
                        }
                        <p className="nav-link text-dark" onClick={() => addInputLangkah()} style={{ cursor: 'pointer' }}>+ Item Langkah</p>
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
                    }} disabled={processing}>Perbarui Resep</button>
                </form>
            </div>
        </Layout>
    )
}