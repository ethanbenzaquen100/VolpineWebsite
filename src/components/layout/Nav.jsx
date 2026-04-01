import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
    return (
        <>
            <section id="nav" className="container-fluid px-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h1 className="navbar-brand fs-2 mt-2 ms-5">Volpine</h1>
                    <ul className="navbar-nav d-flex justify-content-end align-items-center w-100">
                        <li className="nav-item">
                            <a className="nav-link ms-5 text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-2 text-white" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-2 text-white" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-2 text-white" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-2 me-5 text-white" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    )
}