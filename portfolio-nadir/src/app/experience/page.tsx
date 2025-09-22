import { Card, CardHeader, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Engineer",
    company: "Airbus Defence and Space",
    period: "Jan 2025 – Aujourd'hui",
    tasks: [
      "Refactorisé le back-end en Java et renforcé la couverture de tests pour fiabiliser les API internes",
      "Développé des fonctionnalités Angular 19 pour améliorer l'UX",
      "Déployé les services sur le cluster interne (Docker, Kubernetes)",
      "Structuré la CI/CD (Jenkins/GitHub Actions) et rédigé la documentation des flux",
      "Assuré le suivi des projets via Jira"
    ]
  },
  {
    title: "Fondateur & CEO",
    company: "Ngency",
    period: "Fév 2022 – Déc 2024",
    tasks: [
      "Prospecté, cadré et clos des projets web/SaaS",
      "Piloté la relation client de bout en bout",
      "Développé des sites & apps (Next.js, WordPress, HTML/CSS/JS) avec paiements & SEO",
      "Coordonné design & développement en mettant en place des processus standardisés"
    ]
  },
  {
    title: "Chef de Projet Technique",
    company: "Cofel Industries",
    period: "Jan 2024 – Juin 2024",
    tasks: [
      "Mené la refonte de cofel.fr (Magento 2/WordPress/PHP) orientée UX, performances & SEO",
      "Coordonné migrations & déploiements",
      "Administré les bases de données SQL/PostgreSQL",
      "Piloté les prestataires externes (Trello/Jira)",
      "Conduit les phases de QA/tests et suivi des KPI",
      "Instrumenté Google Tag Manager/Analytics pour SEO/SEA"
    ]
  },
  {
    title: "Développeur Web Full Stack",
    company: "Improba / Ateliom",
    period: "Sep 2022 – Sep 2023",
    tasks: [
      "Développé des plugins WordPress et interfaces front (React/Vue/HTML/CSS/JS)",
      "Amélioré l'UX & l'accessibilité des applications",
      "Conçu des API et back-ends (Node.js, Laravel 5)",
      "Architecturé des schémas de bases de données (SQL/PostgreSQL/MongoDB)"
    ]
  },
  {
    title: "Chef de Projet & Développeur Front-End",
    company: "Ingenius",
    period: "Avr 2021 – Sep 2022",
    tasks: [
      "Intégré des composants/pages (React, HTML/CSS/JS, Next.js)",
      "Mené des projets WordPress de A à Z",
      "Assuré la QA, le recettage et le support client",
      "Optimisé les performances & SEO (médias, bundle, métadonnées)"
    ]
  }
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expériences professionnelles</h1>
      <div className="grid gap-4">
        {experiences.map((experience, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-primary">{experience.title}</h4>
                  <p className="text-sm text-muted-foreground">{experience.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">{experience.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                {experience.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}