import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Skills } from "@/components/Skills"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">À propos de moi</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Parcours professionnel 💼</h2>
        <p className="text-lg text-muted-foreground">
          Avec 4 années d'expérience dans le développement web, j'ai évolué d'un poste de Développeur Full Stack à Chef de Projet Digital Technique. Cette progression m'a permis d'acquérir une vision globale des projets digitaux, de la conception à la livraison.
        </p>
      </section>

      <section className="mb-8">
        <Skills />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Approche professionnelle</h2>
        <p className="text-lg text-muted-foreground">
          Je combine expertise technique et vision stratégique pour livrer des solutions digitales innovantes. Ma double compétence en développement et en gestion de projet me permet d'apporter une valeur ajoutée unique aux projets que je dirige.
        </p>
      </section>

      <div className="flex gap-4 mt-8">
        <Button asChild>
          <Link href="/experience">
            Voir mon expérience
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="mailto:oubah.nadir@gmail.com">
            Me contacter
            <Mail className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}