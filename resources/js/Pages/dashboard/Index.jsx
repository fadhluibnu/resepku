import Layout from "../Partials/Layouts";
import { Head, usePage, Link } from "@inertiajs/react";
export default function Dashboard({ reseps }) {
    const { flash } = usePage().props
    return (
        <Layout>
            <Head title="Dashboard" />
            <div className="container px-md-3 px-lg-5">
                {
                    flash?.success &&
                    <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
                        {flash.success}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
                {
                    flash?.fail &&
                    <div className="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                        {flash.fail}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
                <h3 className='mt-3' style={{
                    color: '#547794'
                }}>Resep saya</h3>
                <div className="row mt-3">
                    {
                        reseps.length != 0 ?
                            reseps.map((item) =>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div class="card border border-0">
                                        <img src={`./storage/${item.image}`} class="card-img-top p-3 pb-0" alt={`${item.slug}`} />
                                        <div class="card-body">
                                            <Link href={`/dashboard/${item.slug}`} class="nav-link fs-4">{item.judul}</Link>
                                            <p class="card-text">{item.deskripsi.slice(0, 100)}...</p>
                                            <div className="row gx-3">
                                                <div className="col">
                                                    <Link href={`/dashboard/${item.slug}/edit`} class="btn btn-warning d-block w-100">Edit</Link>
                                                </div>
                                                <div className="col">
                                                    <Link href={`/dashboard/${item.slug}`} class="btn btn-danger d-block w-100" method="delete" as="button" type="button">Delete</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : <h6 >Anda belum menulis Resep</h6>
                    }
                </div>
            </div>
        </Layout>
    )
}