import React from 'react'

const Hero = ({setCurrentPage}) => {
  return (
    <div className="bg-white d-flex align-items-center" style={{height: "620px"}}>
      <section className="text-red-primary text-center w-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="display-4 fw-bold mb-3">RENTAL MOBIL PREMIUM</h1>
              <p className="lead mb-4">Nikmati perjalanan nyaman dengan armada kendaraan berkualitas kami</p>
              <div className="row mt-5">
                <div className="col-md-4 mb-4">
                  <div className="card bg-white text-red-primary shadow">
                    <div className="card-body">
                      <i className="fas fa-car fs-1 mb-3"></i>
                      <h5 className="card-title">Armada Premium</h5>
                      <p className="card-text">Kendaraan berkualitas tinggi dan terawat</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card bg-white text-red-primary shadow">
                    <div className="card-body">
                      <i className="fas fa-shield-alt fs-1 mb-3"></i>
                      <h5 className="card-title">Aman & Terpercaya</h5>
                      <p className="card-text">Pelayanan terbaik dengan jaminan keamanan</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card bg-white text-red-primary shadow">
                    <div className="card-body">
                      <i className="fas fa-clock fs-1 mb-3"></i>
                      <h5 className="card-title">24/7 Service</h5>
                      <p className="card-text">Layanan customer service sepanjang waktu</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-danger btn-lg fw-bold text-white mt-4" onClick={() => setCurrentPage('layanan')}>
                Mulai Rental Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero