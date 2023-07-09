import Layout from "./Partials/Layouts"
import { Head, Link } from "@inertiajs/react"
export default function Home({ reseps }) {

    return (
        <Layout>
            <Head title="Home" />
            <div className="container px-md-3 px-lg-5">
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
                                                <Link href="/like" className="btn btn-light text-dark" method="post" as="button" type="button">Suka</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : <h6 >Belum ada resep </h6>
                    }
                </div>
            </div>
        </Layout>
    )

}