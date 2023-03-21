import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Entre em contato</h2>
                        <ul className="contact-list">
                            <li>Email: contato@minhaacademia.com.br</li>
                            <li>Telefone: (11) 5555-5555</li>
                            <li>Endereço: Rua da Academia, 123 - São Paulo/SP</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h2>Siga-nos nas redes sociais</h2>
                        <ul className="social-list">
                            <li>
                                <a href="https://www.facebook.com/minhaacademia">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/minhaacademia">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/minhaacademia">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
