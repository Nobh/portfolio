import { Card, CardHeader, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "CEO",
    company: "Ngency Paris",
    period: "Fév 2024 – Oct 2024",
    description: "Dirigé une équipe dans la livraison de solutions digitales, y compris le développement web sur mesure, le branding stratégique et le marketing digital. Géré les relations avec les clients, de l'analyse des besoins à la livraison finale, en garantissant une haute satisfaction client. Développé des projets web en utilisant des technologies comme WordPress, HTML/CSS, JavaScript et d'autres frameworks (principalement NextJS)."
  },
  {
    title: "Chef de Projet Technique",
    company: "Cofel Industries",
    period: "Jan 2024 – Juin 2024",
    description: "Dirigé le développement back-end (Magento 2, WordPress, PHP) et la refonte front-end (WordPress : HTML/CSS & JavaScript) de cofel.fr, améliorant l'expérience utilisateur. Coordonné les migrations et déploiements et géré les opérations de base de données (SQL, PostgreSQL). Collaboré avec des prestataires externes, créé la documentation de projet et géré les tickets via Trello et Jira. Réalisé des contrôles qualité, des tests, suivi des KPI et mis en œuvre des balises SEA en utilisant Tag Manager et Google Analytics."
  },
  {
    title: "Développeur Web Full Stack",
    company: "Improba / Ateliom",
    period: "Sep 2022 – Sep 2023",
    description: "Développé des plugins WordPress et des solutions front-end en utilisant VueJS, ReactJS, HTML/CSS/JavaScript. Construit des systèmes back-end robustes et des API en utilisant PHP (Laravel 5), NodeJS, et géré des bases de données (SQL, PostgreSQL, MongoDB). Créé et maintenu la documentation et géré les tickets efficacement via ClickUp."
  },
  {
    title: "Chef de Projet & Développeur Front-End",
    company: "Ingenius",
    period: "Avr 2021 – Sep 2022",
    description: "Intégré des pages en utilisant HTML, CSS, JavaScript et GatsbyJS et géré des projets WordPress de A à Z. Assuré la satisfaction client grâce à des contrôles qualité, des tests de projet, de la documentation et un support continu. Optimisé les médias et les stratégies SEO, améliorant la visibilité du site et les performances sur les moteurs de recherche."
  },
  {
    title: "Webmaster",
    company: "Malakoff Humanis",
    period: "Août 2018 – Sep 2019",
    description: "Géré le contenu du site web et assuré une performance optimale et une expérience utilisateur de qualité."
  }
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Expériences professionnelles</h1>
      <div className="grid gap-4">
        {experiences.map((experience, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{experience.title}</h4>
                  <p className="text-sm text-muted-foreground">{experience.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">{experience.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{experience.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}