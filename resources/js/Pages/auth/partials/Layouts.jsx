export default function LayoutAuth({children}){
    return (
        <div className='container d-flex' style={{
            height: '100vh',
        }}>
            <div className="row align-items-center m-auto container-fluid">
                <div className="col-12 col-md-6">
                    <img src="./assets/image/draw2.webp" alt="" width={'100%'} />
                </div>
                <div className="col-12 col-md-6 p-md-5">
                    {children}
                </div>
            </div>
        </div>
    )
}