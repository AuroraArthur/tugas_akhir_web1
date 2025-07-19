const Contact = () => {

  return (
    <div className="py-5" style={{height: "630px"}}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card shadow">
              <div className="card-body p-4">
                <h2 className="text-red-primary text-center mb-4">Hubungi Kami</h2>
                <form>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="name"
                      placeholder="Nama Lengkap" 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email"
                      placeholder="Email" 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <input 
                      type="tel" 
                      className="form-control" 
                      name="phone"
                      placeholder="Nomor Telepon"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea 
                      className="form-control" 
                      rows="5" 
                      name="message"
                      placeholder="Pesan Anda"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-red w-100 fw-bold">
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow">
              <div className="card-body p-4">
                <h2 className="text-red-primary mb-4">Kontak Kami</h2>
                <div className="mb-3">
                  <i className="fas fa-map-marker-alt text-red-primary me-2"></i>
                  <span>Binagriya, Pekalongan, Jawa Tengah</span>
                </div>
                <div className="mb-3">
                  <i className="fas fa-phone-alt text-red-primary me-2"></i>
                  <span>085875519055</span>
                </div>
                <div className="mb-4">
                  <i className="fas fa-envelope text-red-primary me-2"></i>
                  <span>info@velocityrent.com</span>
                </div>
                <h5 className="text-red-primary mb-3">Follow Us</h5>
                <div className="d-flex gap-2">
                    <a href="#" className="btn btn-red btn-sm">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="btn btn-red btn-sm">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="btn btn-red btn-sm">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="btn btn-red btn-sm">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact