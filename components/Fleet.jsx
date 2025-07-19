import React from 'react'

const Fleet = () => {
  const carBrands = [
    "Pajero", "McLaren", "Porsche", "BMW", "Civic", "Fortuner", 
    "Mazda", "Alphard", "Ferrari", "Bentley", "Lexus", "Audi", "Rolls Royce"
  ]

  const rentalPackages = [
    { icon: "fas fa-calendar-day", name: "Sewa Harian" },
    { icon: "fas fa-calendar-week", name: "Sewa Mingguan" },
    { icon: "fas fa-calendar-alt", name: "Sewa Bulanan" }
  ]

  return (
    <div className="min-vh-100 py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-red-primary">Armada Kami</h2>
            <p className="lead text-muted">Kami menyediakan berbagai jenis kendaraan premium untuk kebutuhan Anda</p>
          </div>
        </div>
        {/* Armada Header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card bg-red-light p-4">
              <div className="d-flex flex-wrap gap-2">
                {carBrands.map((brand, index) => (
                  <span key={index} className="badge badge-red">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Armada Content */}
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card bg-red-primary text-white h-100">
              <div className="card-body">
                <h3 className="card-title border-bottom border-light pb-2 mb-3">Paket Sewa</h3>
                <ul className="list-unstyled">
                  {rentalPackages.map((pkg, index) => (
                    <li key={index} className="mb-2">
                      <i className={`${pkg.icon} me-2`}></i>
                      {pkg.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-red-light h-100">
              <div className="card-body text-center">
                <img src="/img/porsche.png" alt="Mobil Premium" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-3">
              <div className="card border-red">
                <div className="card-body">
                  <h5 className="card-title text-red-primary">
                    <i className="fas fa-tag me-2"></i>
                    Harga Mulai
                  </h5>
                  <p className="card-text fw-bold fs-4">Rp 500.000</p>
                </div>
              </div>
              <div className="card border-red">
                <div className="card-body">
                  <h5 className="card-title text-red-primary">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    Alamat
                  </h5>
                  <p className="card-text">Binagriya, Pekalongan, Jawa Tengah</p>
                </div>
              </div>
              <div className="card bg-red-primary text-white">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-phone-alt me-2"></i>
                    Booking
                  </h5>
                  <p className="card-text fw-bold fs-5">085875519055</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fleet