import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Skills } from "@/components/Skills"

const experiences = [
  {
    title: "CEO",
    company: "Ngency Paris",
    period: "Fév 2024 - Aujourd'hui",
    description: "Direction d'une équipe dédiée aux solutions digitales, développement web sur-mesure et stratégie de marque. Développement de projets web avec WordPress, NextJS et autres frameworks modernes."
  },
  {
    title: "Technical Project Manager",
    company: "Cofel Industries",
    period: "Jan 2024 - Juin 2024",
    description: "Gestion technique du développement back-end (Magento 2, WordPress, PHP) et front-end des différents sites du groupe. Gestion des migrations, déploiements et opérations de base de données."
  },
  {
    title: "Développeur Full Stack",
    company: "Improba / Ateliom",
    period: "Sep 2022 - Sep 2023",
    description: "Développement de plugins WordPress et solutions front-end (VueJS, ReactJS). Création de systèmes back-end et API avec PHP (Laravel 5) et NodeJS."
  }
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 md:w-7/10 space-y-4">
          <h1 className="text-5xl font-bold">Nadir Oubah</h1>
          <h2 className="text-2xl text-muted-foreground">
            Développeur Web Full Stack 🚀
          </h2>
          <p className="text-lg text-muted-foreground">
            En tant que Développeur Full Stack et Responsable de Projets IT, je m'épanouis en créant des expériences digitales impactantes. Je combine une expertise technique en développement front-end et back-end avec une approche créative de la résolution de problèmes. Que ce soit pour optimiser les interactions utilisateur ou gérer des projets IT complexes, je me concentre sur la livraison de solutions efficaces et innovantes qui font une réelle différence.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/projects">
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">En savoir plus</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block md:w-3/10 flex-shrink-0 items-center">
          <Image
            src="/nadir.jpg"
            alt="Nadir Oubah"
            width={200}
            height={200}
            className="rounded-full"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <h2 className="text-2xl font-bold">Technologies principales</h2>
        <div className="flex flex-wrap gap-2">
          {["WordPress", "React", "Next.js", "PHP", "Node.js", "PostgreSQL", "MySQL", "HTML/CSS", "JavaScript"].map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </div>

      <div className="mt-16">
          <Skills />
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <h2 className="text-2xl font-bold">Expériences récentes</h2>
        <div className="grid gap-4">
          {experiences.map((experience, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{experience.title}</h3>
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
          <Button variant="ghost" className="w-fit" asChild>
            <Link href="/experience">
              Voir toutes mes expériences
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}