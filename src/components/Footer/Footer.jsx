import './Footer.css';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer-container">
                <div className="Footer-box col-md-4">
                    <h3 className="Footer-box-titulo">Contacto:</h3>
                    <p className="footer-contact">Dirección: 123 Calle Principal, Ciudad De Buenos Aires</p>
                    <p className="footer-contact">Email: VeterTatto@gmail.com</p>
                    <p className="footer-contact">Teléfono: 123-456-7890</p>
                </div>

                <div className="Footer-social col-md-4">
                    <h3 className="Footer-social-titulo">Redes Sociales:</h3>
                    <a href="#"><i className="bi bi-instagram Footer-iconos"></i></a>
                    <a href="#"><i className="bi bi-facebook Footer-iconos"></i></a>
                    <a href="#"><i className="bi bi-whatsapp Footer-iconos"></i></a>
                </div>

                <div className="col-md-4 Footer-copyright">
                    <p className="text-muted">&copy; 2024 VeterArt</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
