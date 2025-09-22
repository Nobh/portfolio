import { Card, CardHeader, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Engineer",
    company: "Airbus Defence and Space",
    period: "Jan 2025 – Aujourd'hui",
    description: "Refactorisé le back-end en Java et renforcé la couverture de tests pour fiabiliser les API internes. Développé des fonctionnalités Angular 19 pour améliorer l'UX. Déployé les services sur le cluster interne (Docker, Kubernetes). Structuré la CI/CD (Jenkins/GitHub Actions) ; rédigé la doc des flux et assuré le suivi Jira."
  },
  {
    title: "Fondateur & CEO",
    company: "Ngency",
    period: "Fév 2022 – Déc 2024",
    description: "Prospecté, cadré et clos des projets web/SaaS ; piloté la relation client de bout en bout. Développé des sites & apps (Next.js, WordPress, HTML/CSS/JS) avec paiements & SEO. Coordonné design & dev en mettant en place des processus standardisés."
  },
  {
    title: "Chef de Projet Technique",
    company: "Cofel Industries",
    period: "Jan 2024 – Juin 2024",
    description: "Mené la refonte de cofel.fr (Magento 2/WordPress/PHP ; front HTML/CSS/JS) orientée UX, performances & SEO. Coordonné migrations & déploiements ; administré SQL/PostgreSQL ; piloté prestataires (Trello/Jira). Conduit QA/tests ; suivi KPI ; instrumenté GTM/GA pour SEO/SEA."
  },
  {
    title: "Développeur Web Full Stack",
    company: "Improba / Ateliom",
    period: "Sep 2022 – Sep 2023",
    description: "Développé des plugins WordPress et interfaces front (React/Vue/HTML/CSS/JS) ; amélioré UX & accessibilité. Conçu des API et des back-ends (Node.js, Laravel 5) et des schémas SQL/PostgreSQL/MongoDB."
  },
  {
    title: "Chef de Projet & Développeur Front-End",
    company: "Ingenius",
    period: "Avr 2021 – Sep 2022",
    description: "Intégré des composants/pages (React, HTML/CSS/JS, Next.js) et mené des projets WordPress de A à Z. Assuré QA/recettage/support ; optimisé performances & SEO (médias, bundle, métadonnées)."
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