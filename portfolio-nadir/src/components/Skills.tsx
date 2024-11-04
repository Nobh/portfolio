import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const skills = [
  {
    category: "Développement Front-end 🌐",
    description: "Création d&apos;interfaces utilisateur modernes et réactives",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS", "JavaScript"],
  },
  {
    category: "Développement Back-end ⚙️",
    description: "Architecture et développement de solutions serveur robustes",
    skills: ["PHP", "Laravel", "Node.js", "API REST", "WordPress", "Express.js"],
  },
  {
    category: "Base de données & DevOps 🗄️",
    description: "Gestion de données et déploiement d&apos;applications",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "Git", "CI/CD"],
  },
  {
    category: "Gestion de Projet 📊",
    description: "Leadership technique et méthodologies agiles",
    skills: ["Agile", "Scrum", "Gestion d&apos;équipe", "Planning", "Documentation", "Communication"],
  },
]

export function Skills() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Compétences</h2>
        <p className="text-muted-foreground">
          Une vue d&apos;ensemble de mes compétences techniques et managériales
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((category) => (
          <Card key={category.category}>
            <CardHeader>
              <h3 className="font-semibold">{category.category}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}