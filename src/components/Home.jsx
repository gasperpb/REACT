import React from 'react';
import './Home.css';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.webp';
import photo3 from '../images/photo3.webp';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Bem-vindo à Academia Fit</h1>
                    <p className="hero-description">Mantenha sua forma com nossos treinos personalizados</p>
                    <button className="hero-button">Saiba mais</button>
                </div>
            </section>
            <section className="features">
                <div className="feature">
                    <img src={photo1} alt="Feature 1" />
                    <h2 className="feature-title">Treinos personalizados</h2>
                    <p className="feature-description">Crie um treino de acordo com seus objetivos</p>
                </div>
                <div className="feature">
                    <img src={photo2} alt="Feature 2" />
                    <h2 className="feature-title">Instrutores qualificados</h2>
                    <p className="feature-description">Nossos instrutores são certificados e experientes</p>
                </div>
                <div className="feature">
                    <img src={photo3} alt="Feature 3" />
                    <h2 className="feature-title">Equipamentos modernos</h2>
                    <p className="feature-description">Tenha acesso aos melhores equipamentos do mercado</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
