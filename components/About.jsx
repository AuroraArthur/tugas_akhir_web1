import React from 'react'

const About = () => {
  const features = [
    {
      icon: "fas fa-dollar-sign",
      text: "Layanan kami memberikan harga terbaik untuk setiap jenis kendaraan dan layanan"
    },
    {
      icon: "fas fa-clock",
      text: "Fokus kami yaitu memastikan kenyamanan dan kebutuhan Anda terpenuhi kapan saja"
    },
    {
      icon: "fas fa-star",
      text: "Kepuasan pelanggan adalah prioritas utama kami"
    }
  ]

  return (
    <div className="py-5" style={{height: "630px"}}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-red-primary">Tentang Kami</h2>
            <p className="lead text-muted">Kami menyediakan layanan terbaik sesuai kebutuhan Anda</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src="../img/car-mercedes.png" alt="Mobil Mercedes" className="img-fluid rounded shadow" />
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {features.map((feature, index) => (
                <div key={index} className="col-12">
                  <div className="card border-red">
                    <div className="card-body d-flex align-items-center">
                      <i className={`${feature.icon} text-red-primary fs-3 me-3`}></i>
                      <p className="card-text mb-0">{feature.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About