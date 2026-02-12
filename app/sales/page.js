export const metadata = {
  title: "Programme Cabinet Médical Maroc – Page de vente",
  description:
    "Programme complet pour lancer et remplir ton cabinet médical au Maroc avec un plan clair, des modèles prêts à l’emploi et un accompagnement structuré.",
};

export default function SalesPage() {
  return (
    <main>
      <div className="stars" />
      <div className="horizon-glow" />

      <section className="sales-hero">
        <p className="sales-label">Programme complet • Médecins au Maroc</p>
        <h1 className="sales-title">
          Transforme ton projet de cabinet en réalité rentable en moins de 6 mois.
        </h1>
        <p className="sales-subtitle">
          Un système clair, étape par étape, pour passer du premier brainstorm à un cabinet
          opérationnel avec tes premiers patients, sans te perdre dans l’administratif ni le
          marketing.
        </p>
        <div className="sales-cta-row">
          <a href="#pricing" className="sales-cta-primary">
            Découvrir le programme complet
          </a>
          <span className="sales-cta-note">Garantie satisfait ou remboursé 14 jours.</span>
        </div>
        <p className="sales-trust">
          Pensé pour les médecins généralistes et spécialistes qui veulent s’installer au Maroc
          avec un plan solide.
        </p>
      </section>

      <section className="sales-section sales-section-grid">
        <div>
          <h2 className="sales-section-title">Ce que tu obtiens dans le programme</h2>
          <p className="sales-section-text">
            Tu n’as pas besoin d’un autre contenu théorique. Tu as besoin d’un plan concret que tu
            peux suivre semaine après semaine. Le programme t’accompagne sur les 3 piliers
            essentiels : administratif, financier et patients.
          </p>
        </div>
        <div className="sales-feature-grid">
          <div className="sales-feature-card">
            <h3>1. Feu vert administratif</h3>
            <p>
              Checklist exhaustive des autorisations, modèles de dossiers, exemples de lettres,
              rétroplanning pour éviter les retards et refus de dernière minute.
            </p>
          </div>
          <div className="sales-feature-card">
            <h3>2. Plan financier réaliste</h3>
            <p>
              Modèles de budget, projections de trésorerie, scénarios de financement et structure
              de tarifs adaptée à ta spécialité et à ta ville.
            </p>
          </div>
          <div className="sales-feature-card">
            <h3>3. Patients dès les premières semaines</h3>
            <p>
              Système simple de marketing local, partenariats et communication digitale pour que ton
              agenda se remplisse progressivement sans “faire le commercial”.
            </p>
          </div>
        </div>
      </section>

      <section className="sales-section sales-highlight">
        <h2 className="sales-section-title">Pour qui est-ce fait ?</h2>
        <div className="sales-two-column">
          <ul className="sales-bullets">
            <li>Tu as déjà ton diplôme et tu réfléchis sérieusement à t’installer au Maroc.</li>
            <li>Tu veux éviter les erreurs coûteuses sur le choix de la localisation ou du statut.</li>
            <li>Tu préfères un plan structuré plutôt que d’empiler des conseils contradictoires.</li>
          </ul>
          <ul className="sales-bullets sales-bullets-muted">
            <li>Tu n’as pas envie de “t’improviser marketeur” ni de passer tes soirées sur Excel.</li>
            <li>Tu es prêt·e à suivre un plan et à passer à l’action semaine après semaine.</li>
          </ul>
        </div>
      </section>

      <section id="pricing" className="sales-section sales-pricing">
        <h2 className="sales-section-title">Investissement</h2>
        <p className="sales-section-text sales-pricing-intro">
          L’objectif : rentabiliser l’investissement dès tes premiers mois d’activité en évitant les
          erreurs qui font perdre du temps et de l’argent.
        </p>

        <div className="sales-pricing-card">
          <p className="sales-pricing-label">Accès complet au programme</p>
          <p className="sales-pricing-price">
            2 900 MAD <span className="sales-pricing-note">paiement unique</span>
          </p>

          <ul className="sales-bullets">
            <li>Accès à vie au contenu et aux mises à jour.</li>
            <li>Modèles de documents téléchargeables (Word, Excel, PDF).</li>
            <li>Feuilles de route semaine par semaine sur 12 semaines.</li>
            <li>Exemples de communication pour remplir ton agenda.</li>
          </ul>

          <a href="mailto:ghilloutmb@gmail.com?subject=Intérêt%20Programme%20Cabinet%20M%C3%A9dical%20Maroc" className="sales-cta-primary sales-cta-full">
            Réserver un appel de 20 minutes
          </a>
          <p className="sales-small">
            Tu veux vérifier si le programme est adapté à ta situation ? Envoie un email ou réserve
            un appel, aucune obligation d’achat.
          </p>
        </div>
      </section>

      <section className="sales-section sales-faq">
        <h2 className="sales-section-title">Questions fréquentes</h2>
        <div className="sales-faq-list">
          <div className="sales-faq-item">
            <h3>Combien de temps dois-je prévoir chaque semaine ?</h3>
            <p>
              En moyenne 2 à 3 heures par semaine pour avancer sur les vidéos et les actions
              concrètes (dossiers, démarches, contacts, etc.). Le programme est pensé pour s’intégrer
              dans ton planning actuel.
            </p>
          </div>
          <div className="sales-faq-item">
            <h3>Est-ce adapté si je n’ai aucune expérience en gestion ou marketing ?</h3>
            <p>
              Oui. Le programme est conçu pour des médecins, pas pour des managers. Chaque module
              se traduit en actions simples, sans jargon inutile.
            </p>
          </div>
          <div className="sales-faq-item">
            <h3>Que se passe-t-il après le paiement ?</h3>
            <p>
              Tu reçois un accès immédiat à l’espace en ligne avec tous les modules et modèles. Tu
              peux commencer dès maintenant et avancer à ton rythme.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

