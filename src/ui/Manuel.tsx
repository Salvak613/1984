import styles from "./Manuel.module.scss";
import React, { useState } from "react";

const manuelTexts = [
  {
    label: "Intro",
    content: (
      <div>
        <strong>Bienvenue dans le manuel du travailleur.</strong>
        <br />
        Camarade Travailleur, Vous avez été sélectionné pour occuper le poste
        stratégique de Contrôleur Frontalier au service de l'État. Votre mission
        est cruciale pour la sécurité d'Océania : identifier et empêcher
        l'infiltration d'éléments subversifs.
        <br />
        <strong>VOS RESPONSABILITÉS :</strong>
        <br />
        <ul>
          <li>Examiner minutieusement chaque document présenté</li>
          <li>Vérifier la cohérence des informations déclarées</li>
          <li>Détecter les faux papiers et les tentatives d'infiltration</li>
          <li>
            Maintenir la sécurité de nos frontières contre les ennemis du Parti
          </li>
        </ul>
        ATTENTION :<br />
        Tout manquement à vos devoirs sera considéré comme un acte de trahison.
        La vigilance est votre arme, la suspicion votre guide. "Celui qui
        contrôle le présent contrôle le passé. Celui qui contrôle le passé
        contrôle l'avenir."
      </div>
    ),
  },
  {
    label: "Rang social",
    content: (
      <div>
        <strong>RANGS SOCIAUX</strong>
        <br />
        Le Parti a établi une hiérarchie claire pour organiser la société. Ce
        citoyen appartient à l'une de ces catégories :
        <br />
        <strong>PARTI INTÉRIEUR</strong>
        <br />
        Statut : Élite dirigeante
        <br />
        Professions typiques : Hauts fonctionnaires des Ministères, Directeurs
        régionaux
        <br />
        Privilèges : Accès aux zones restreintes, rations de luxe
        <br />
        Signes distinctifs : Uniformes de qualité supérieure, badges dorés
        <br />
        <strong>PARTI EXTÉRIEUR</strong>
        <br />
        Statut : Classe moyenne du Parti
        <br />
        Professions typiques : Fonctionnaires, Techniciens, Secrétaires de
        cellule
        <br />
        Privilèges : Rations correctes, logements décents
        <br />
        Signes distinctifs : Pin's du Parti, uniformes standard
        <br />
        <strong>PROLÉTAIRES</strong>
        <br />
        Statut : Masse laborieuse
        <br />
        Professions typiques : Ouvriers, Artisans, Agriculteurs
        <br />
        Privilèges : Rations de base, surveillance allégée
        <br />
        Signes distinctifs : Vêtements de travail, pas d'insignes du Parti
        <br />
        ⚠️ ATTENTION : Vérifiez que l'apparence et les documents correspondent
        au rang social déclaré !
      </div>
    ),
  },
  {
    label: "Slogans du parti",
    content: (
      <div>
        SLOGANS DU PARTI
        <br />
        Ces slogans sacrés doivent être connus par cœur par tout citoyen loyal.
        Testez régulièrement les voyageurs :
        <br />
        <strong>LES TROIS PILIERS DE LA VÉRITÉ :</strong>
        <br />
        "LA GUERRE, C'EST LA PAIX"
        <br />
        Récité principalement par les membres du Parti Intérieur et Extérieur
        <br />
        Symbolise la nécessité du conflit perpétuel pour maintenir l'unité
        <br />
        "LA LIBERTÉ, C'EST L'ESCLAVAGE"
        <br />
        Couramment utilisé par les fonctionnaires et techniciens Rappelle que la
        vraie liberté vient de la soumission totale au Parti
        <br />
        "L'IGNORANCE, C'EST LA FORCE"
        <br />
        Principalement récité par les Prolétaires Enseigne que moins on sait,
        plus on est fort dans sa foi
        <br />
        <strong>SIGNES D'ALARME :</strong>
        <ul>
          <li>Hésitation lors de la récitation</li>
          <li>Mauvaise prononciation ou accent suspect</li>
          <li>Slogans récités dans le mauvais ordre</li>
          <li>Confusion entre les slogans selon le rang social</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Passeport",
    content: (
      <div>
        <strong>PASSEPORTS</strong>
        <br />
        Chaque citoyen doit posséder un passeport valide correspondant à son
        origine. Examinez attentivement :
        <br />
        <strong>FORMAT DES NUMÉROS :</strong>
        <br />
        Océania : OC-XXXXXX (6 chiffres) <br />
        Eurasia : EU-XXXXXX (6 chiffres) <br />
        Estasia : ES-XXXXXX (6 chiffres) <br />
        <strong>ÉLÉMENTS À VÉRIFIER :</strong>
        <br />
        ✅ Photo d'identité : Correspond-elle au porteur ?
        <br />✅ Âge cohérent : Photo et âge déclaré correspondent-ils ?
        <br />✅ Date d'expiration : Le passeport est-il encore valide ?
        <br />✅ Cachets d'entrée : Cohérents avec l'itinéraire déclaré ?
        <br />✅ Numéro unique : Vérifiez qu'il n'existe pas déjà dans vos
        registres
      </div>
    ),
  },
  {
    label: "Les partis du pays et les régions du monde",
    content: (
      <div>
        <strong>PARTIS DU PAYS ET RÉGIONS DU MONDE</strong>
        <br />
        OCÉANIA 🏛️
        <br />
        Statut : Notre glorieuse patrie
        <br />
        Dirigeant : Big Brother (que son nom soit béni)
        <br />
        Ministères : Vérité, Paix, Amour, Abondance
        <br />
        Citoyens typiques : Disciplinés, loyaux, récitent les slogans avec
        ferveur
        <br />
        EURASIA ⚔️
        <br />
        Statut : Ennemi/Allié (selon la situation politique du jour)
        <br />
        Caractéristiques : Citoyens souvent plus grands, accent marqué
        <br />
        Méfiance : Risque d'espionnage élevé
        <br />
        Signes suspects : Confusion sur les alliances actuelles
        <br />
        ESTASIA 🏭
        <br />
        Statut : Ennemi/Allié (selon la situation politique du jour)
        <br />
        Caractéristiques : Population industrielle, discipline militaire
        <br />
        Méfiance : Infiltration possible par des agents
        <br />
        Signes suspects : Connaissances techniques suspectes
        <br />
        <strong>SITUATION POLITIQUE ACTUELLE :</strong>
        <br />
        [Cette section change quotidiennement selon les directives du Ministère
        de la Vérité]
        <br />
        AUJOURD'HUI, NOUS SOMMES :
        <br />
        ✅ En paix avec :
        <br />
        ⚔️ En guerre contre :
        <br />
        <strong>RÈGLES IMPORTANTES :</strong>
        <br /> Les citoyens doivent connaître les alliances actuelles
        <br /> Toute confusion sur "qui est l'ennemi" est suspecte
        <br />
        Les voyageurs des nations ennemies nécessitent une autorisation spéciale
        <br />
        Vérifiez les visas selon les accords diplomatiques du jour
      </div>
    ),
  },
];

export default function Manuel() {
  const [selected, setSelected] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  if (!open) {
    return (
      <>
        <button
          className={`${styles.openButton} ${styles.button}`}
          type="button"
          onClick={() => setOpen(true)}
        >
          <span className={styles["button-inside"]}>OUVRIR LE MANUEL</span>
        </button>
      </>
    );
  }

  return (
    <div className={`${styles.manuelContainer} ${styles.manuelContainerEnter}`}>
      <button
        className={styles.closeButton}
        type="button"
        onClick={() => setOpen(false)}
        style={{ marginBottom: 16 }}
      >
        Fermer le manuel
      </button>
      <h1 className={styles.title}>Manuel du travailleur</h1>
      <h2>Contrôle Frontalier - Secteur 7</h2>
      <div className={styles.tabs}>
        {manuelTexts.map((item, idx) => (
          <button
            key={item.label}
            className={`${styles.tab} ${
              selected === idx ? styles.activeTab : ""
            }`}
            type="button"
            onClick={() => setSelected(idx)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={styles.textContent}>{manuelTexts[selected].content}</div>
    </div>
  );
}
