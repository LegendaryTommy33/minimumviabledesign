'use client';

import { useState } from "react";

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const emailInput = form.querySelector('input[name="email"]');

    if (!emailInput?.value) return;

    setSubmitted(true);
  }

  return (
    <main>
      <div className="stars" />
      <div className="horizon-glow" />

      <div className="container">
        <div className="icon-wrapper">
          <img
            src="/Logo/medical-services_17626688.png"
            alt="Guide Cabinet Médical Maroc"
            className="logo-image"
          />
        </div>

        <h1>
          Ouvre ton cabinet médical rentable au Maroc en 3 mois, même si tu pars
          de zéro.
        </h1>

        <p className="subheader">
          Découvre le plan concret pour financer, légaliser et remplir ton cabinet
          sans te perdre dans l’administratif. Un guide actionnable avec checklists,
          modèles de dossiers et exemples de communication pour tes premiers patients.
        </p>

        <ul className="benefits-list">
          <li>
            Clarifie ton budget, ton statut juridique et les autorisations
            indispensables.
          </li>
          <li>
            Évite les erreurs administratives qui peuvent te faire perdre des mois.
          </li>
          <li>
            Attire tes premiers patients avec une stratégie marketing simple et
            adaptée au Maroc.
          </li>
        </ul>

        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Ton email pour recevoir le guide PDF"
              required
            />
            <button type="submit" disabled={submitted}>
              {submitted ? "Merci, vérifie ta boîte mail" : "Recevoir le guide maintenant"}
            </button>
          </form>
        </div>

        <p className="footer-text">
          {submitted
            ? "Merci ! Le guide arrive dans ta boîte mail dans quelques minutes."
            : "Ton email est utilisé uniquement pour t’envoyer le guide et quelques ressources utiles. Pas de spam, pas de partage."}
        </p>
      </div>
    </main>
  );
}

