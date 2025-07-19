import React from 'react'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "fas fa-car",
      title: "Rental Lepas Kunci",
      description: "Ideal untuk perjalanan pribadi, keluarga, atau kebutuhan bisnis Anda dengan kenyamanan maksimal.",
      price: "300.000",
      features: ["Tanpa sopir", "Bebas kemana saja", "Fuel full to full", "Asuransi kendaraan"]
    },
    {
      id: 2,
      icon: "fas fa-user-tie",
      title: "Rental Dengan Sopir",
      description: "Sopir profesional, berpengalaman, ramah, dan siap memberikan pelayanan terbaik untuk perjalanan Anda.",
      price: "500.000",
      features: ["Sopir profesional", "Berpengalaman", "Ramah & sopan", "Tahu rute terbaik"]
    },
    {
      id: 3,
      icon: "fas fa-suitcase",
      title: "Paket Wisata",
      description: "Wisata nyaman ke berbagai destinasi dengan layanan terbaik dan kendaraan premium.",
      price: "800.000",
      features: ["Paket lengkap", "Destinasi wisata", "Guide lokal", "Makan siang included"]
    }
  ];

  
  const handlePaket = (id) => {
    const paket = services.find((item) => item.id === id);
    const message = `Hallo, saya ingin memesan "${paket.title}". seharga ${paket.price}.`
    window.location.href = `https://wa.me/6285875519055?text=${message}`
  }


  return (
    <div className="min-vh-100 py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-red-primary">Layanan Kami</h2>
            <p className="lead text-muted">Pilih layanan terbaik sesuai kebutuhan Anda</p>
          </div>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 border-red shadow-lg">
                <div className="card-body text-center p-4">
                  <div className="bg-red-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <i className={`${service.icon} text-red-primary fs-2`}></i>
                  </div>
                  <h3 className="card-title text-red-primary mb-3">{service.title}</h3>
                  <p className="card-text text-muted mb-3">{service.description}</p>
                  <h5 className="text-red-primary fw-bold mb-3">Mulai dari Rp {service.price}/hari</h5>
                  <ul className="list-unstyled text-start">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="fas fa-check-circle text-red-primary me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-red w-100 mt-3" onClick={() => handlePaket(service.id)}>Pilih Paket</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Services