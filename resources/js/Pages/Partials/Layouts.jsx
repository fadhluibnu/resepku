import { Link } from '@inertiajs/react'
export default function Layout({ children }) {
    function logout(e) {
        e.preventDefault()
        post('/logout')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{
                backgroundColor: '#547794'
            }}>
                <div className="container">
                    <Link className="navbar-brand" href="/">Resepku</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-light" href="/dashboard/create">Tulis Resep</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" href="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/logout" className="nav-link text-light" method="post" as="button" type="button">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </>
    )
}