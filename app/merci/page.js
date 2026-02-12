export const metadata = {
  title: "Merci - Votre guide est en route",
  description:
    "Page de remerciement après inscription au guide pour lancer un cabinet médical au Maroc.",
};

export default function MerciPage() {
  return (
    <main>
      <div className="stars" />
      <div className="horizon-glow" />

      <div className="thanks-container">
        <div className="thanks-check-icon">✓</div>

        <h1 className="thanks-title">Merci !</h1>

        <div className="thanks-highlight-box">
          <p>
            Votre inscription est confirmée. Vous pouvez accéder à votre e-book via le{" "}
            <strong>lien envoyé dans votre boîte mail</strong> dès maintenant.
          </p>
        </div>

        <p className="thanks-text">
          Restons connectés pour plus de conseils sur le secteur médical au Maroc :
        </p>

        <div className="thanks-social-links">
          <a href="#" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>

        <div className="thanks-contact-email">
          Une question ou un problème ? <br />
          Contactez-nous à :{" "}
          <a href="mailto:support@votredomaine.com">support@votredomaine.com</a>
        </div>
      </div>
    </main>
  );
}

