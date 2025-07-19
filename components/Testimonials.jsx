const Testimonials = () => {
  const testimonials = [
    {
      name: "Ani",
      image: "../img/person1.jpg",
      text: "Pengalaman saya dengan Velocity Rent sangat luar biasa! Mobil bersih dan nyaman, serta sopir yang ramah dan profesional."
    },
    {
      name: "Budi",
      image: "../img/person2.jpg",
      text: "Sopir ramah, harga sesuai kualitas. Sangat puas dengan pelayanannya!"
    }
  ]

  return (
    <div className="py-5" style={{height: "630px"}}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-red-primary">Testimoni</h2>
            <p className="lead text-muted">Kepuasan Pelanggan Menjadi Kunci Utama Kami!</p>
          </div>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <img 
                    src={testimonial.image} 
                    alt={`Pelanggan ${index + 1}`} 
                    className="rounded-circle mb-3" 
                    width="80" 
                    height="80" 
                  />
                  <p className="card-text fst-italic">"{testimonial.text}"</p>
                  <h5 className="card-title text-red-primary">- {testimonial.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials