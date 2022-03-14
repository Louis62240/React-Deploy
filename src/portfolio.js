/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hanquiez Louis Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Hanquiez Louis Portfolio",
    type: "website",
    url: "http://louishanquiez.com/",
  },
};

//Home Page
const greeting = {
  title: "Hanquiez Louis",
  logo_name: "Hanquiez Louis",
  nickname: "Développeur Junior",
  subTitle:
    "Actuellement étudiant en BTS Service Informatique aux Organisations, je rentre à l'EPSI en bachelor Concepteur et développeur d'applications en Septembre.",
  resumeLink:
    "https://drive.google.com/file/d/1rkRdRH_vbBGX0efuhaqZtbhYVSXeq6g0/view?usp=sharing",
  portfolio_repository: "https://github.com/Louis62240",
  githubProfile: "https://github.com/Louis62240",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Louis62240",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:l.hanquiez22@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Programmation WEB",
      fileName: "FullStackImg",
      skills: [
        "⚡ Développer la partie front-end.",
        "⚡ Développer la  partie back-end",
        "⚡ Gérer la base de données",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MYSQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
  ],
};
const skills2 = {
  data: [
    {
      title: "Site Web pour Mairie de Saint Etienne au Mont",
      fileName: "FullStackImg",
      skills: [
        "⚡ Création de la partie admin :",
        "⚡ Ajouter , Modifier , Supprimer , Activer/Désactiver utilisateurs.",
        "⚡ Gestion d'une galerie.",
        "⚡ Gestion de la partie Equipe.",
        "⚡ Page adhésion avec envoi de mail.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MYSQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
    {
      title: "Site Web projet 2ème année",
      fileName: "FullStackImg",
      skills: [
        "⚡ Le site permet d'ajouter des dossiers médicaux pour les animaux de l'aquarium, on peut trier les dossiers et les rechercher avec des mots clés.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "MYSQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
    {
      title: "Application lourde projet 2ème année",
      fileName: "DesignImg",
      skills: [
        "⚡ Le site permet d'ajouter des produits et de lister les produits",
      ],
      softwareSkills: [
        {
          skillName: "JAVA",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#ff0000",
          },
        },
        {
          skillName: "MYSQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "BTS Services Informatique aux Organisations",
      subtitle: "Lycée Saint Joseph à Saint Martin Boulogne",
      logo_path: "logostjo.png",
      alt_name: "StJo",
      duration: "2020 - Present",
      descriptions: [
        "⚡ Gérer le patrimoine informatique",
        "⚡ Répondre aux incidents et aux demandes d'assistance et d'évolution",
        "⚡ Développer la présence en ligne d'une organisation",
        "⚡ Travailler en mode projet",
        "⚡ Mettre à disposition des utilisateurs un service informatique",
        "⚡ Organiser son développement professionnel",
      ],
      website_link: "https://www.st-jo.com/fr",
    },
    {
      title: "Bac Sciences et Technologies du Management et de la Gestion",
      subtitle: "Lycée Giraux Sannier à Saint Martin Boulogne",
      logo_path: "giraux_logo.png",
      alt_name: "StJo",
      duration: "2020 - Present",
      descriptions: ["⚡ Mention Bien"],
      website_link: "https://giraux-sannier.enthdf.fr/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Travail et stage",
  description:
    "J'ai effectué 2 stages dans une entreprise de services numériques pour faire du développement web autant front-end que back-end. J'effectue aussi de l'intérim à chaque vacances scolaires dans une usine.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Travail",
      experiences: [
        {
          title: "Novandie par CRIT INTERIM",
          company:
            "Société spécialisée dans le domaine de la fabrication et la commercialisation des produits laitiers ultra frais",
          company_url: "https://www.crit-job.com/",
          logo_path: "novandie_logo.png",
          duration: "Chaque vacances scolaires depuis Juillet 2020",
          location: "Vieil Moutier",
          description: "Intérimaire en tant que Manutentionnaire.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Stage",
      experiences: [
        {
          title: "Les Hault d'Ecault - HEP",
          company: "Services du numérique",
          company_url: "http://www.hep.fr/",
          logo_path: "hep_logo.png",
          duration: "Mai 2021- Juin 2021",
          location: "Boulogne sur mer",
          description: "Programmation HTML/CSS, PHP, JS, MYSQL.. ",
          color: "#0879bf",
        },
        {
          title: "Les Hault d'Ecault - HEP",
          company: "Services du numérique",
          company_url: "http://www.hep.fr/",
          logo_path: "hep_logo.png",
          duration: "Mai 2021- Juin 2021",
          location: "Boulogne sur mer",
          description: "Programmation HTML/CSS, PHP, JS, MYSQL..",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projets",
  description:
    "Voici les différents projets que j'ai pu faire lors de mes stages, de mes formations ou de mon temps personnel.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "A propos de moi",
    profile_image_path: "photoprofil.jpg",
    description:
      "Je m'appelle Louis Hanquiez, je suis né le 22 avril 2002, je suis actuellement étudiant en BTS Services Informatiques aux Organisations. Passionnée des nouvelles technologies et du développement, je souhaite continuer mes études, c'est pour cela que je me suis engagé à l'EPSI, je suis actuellement à la recherche d'une alternance. ",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  skills2,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
