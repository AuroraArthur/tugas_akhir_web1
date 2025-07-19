import React from 'react'

const Header = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'armada', label: 'Armada' },
    { id: 'tentang', label: 'Tentang' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'kontak', label: 'Kontak' }
  ]

  const handleMenuClick = (pageId) => {
    setCurrentPage(pageId)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-red sticky-top shadow">
      <div className="container">
        <button 
          className="navbar-brand fw-bold text-red-primary btn btn-link text-decoration-none p-0 border-0"
          onClick={() => handleMenuClick('home')}
        >
          <i className="fas fa-car-side me-2"></i>
          VELOCITY RENT
        </button>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button 
                  className={`nav-link fw-semibold btn btn-link text-decoration-none border-0 ${
                    currentPage === item.id ? 'text-red-primary fw-bold' : 'text-dark'
                  }`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header