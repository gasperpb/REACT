import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Entre em contato</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Seu nome" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Seu e-mail" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Sua mensagem" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h2>Visite nossa academia</h2>
                        <ul className="contact-list">
                            <li>Endereço: Rua da Academia, 123 - São Paulo/SP</li>
                            <li>Telefone: (11) 5555-5555</li>
                        </ul>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7824320681216!2d-46.65472688502231!3d-23.54816656671556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58f7e83c035b%3A0x38f89d8fc49c2e3a!2sAcademia%20Fit%20Center!5e0!3m2!1sen!2sbr!4v1647967487941!5m2!1sen!2sbr" width="100%" height="300" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
