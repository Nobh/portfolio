import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Skills } from "@/components/Skills"

const experiences = [
  {
    title: "Software Engineer",
    company: "Airbus Defence and Space",
    period: "Jan 2025 - Aujourd'hui",
    description: "Développement avec Java et Angular 19, déploiement sur cluster Kubernetes, CI/CD avec Jenkins/GitHub Actions."
  },
  {
    title: "Fondateur & CEO",
    company: "Ngency",
    period: "Fév 2022 - Déc 2024",
    description: "Direction d'une équipe dédiée aux solutions digitales, développement web sur-mesure avec Next.js et TypeScript."
  },
  {
    title: "Chef de Projet Technique",
    company: "Cofel Industries",
    period: "Jan 2024 - Juin 2024",
    description: "Refonte technique orientée UX/SEO, administration PostgreSQL, coordination d'équipes."
  }
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 md:w-7/10 space-y-4">
          <h1 className="text-5xl font-bold">Nadir Oubah</h1>
          <h2 className="text-2xl text-muted-foreground">
            Software Engineer 🚀
          </h2>
          <p className="text-lg text-muted-foreground">
            Software Engineer chez Airbus Defence and Space avec une expertise en TypeScript, React/Next.js et architectures cloud. Je me spécialise dans le développement d&#39;applications web robustes, de l&#39;architecture back-end aux interfaces utilisateur modernes. Passionné par la création de solutions techniques innovantes qui résolvent des problèmes complexes.
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
          {["TypeScript", "React", "Next.js", "Angular", "Node.js", "PostgreSQL", "Docker", "Kubernetes", "Java"].map((tech) => (
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