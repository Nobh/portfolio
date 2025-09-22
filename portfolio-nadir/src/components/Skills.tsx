import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const skills = [
  {
    category: "Développement Front-end 🌐",
    description: "Création d'interfaces utilisateur modernes et réactives",
    skills: ["TypeScript", "React", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    category: "Développement Back-end ⚙️",
    description: "Architecture et développement de solutions serveur robustes",
    skills: ["Node.js", "Express/Fastify", "API REST", "GraphQL", "PHP", "Java", "Python"],
  },
  {
    category: "Base de données & DevOps 🗄️",
    description: "Gestion de données et déploiement d'applications",
    skills: ["PostgreSQL", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "MongoDB", "MySQL"],
  },
  {
    category: "Outils & Technologies 🛠️",
    description: "Écosystème de développement et automatisation",
    skills: ["Git", "Supabase", "NeonDB", "n8n", "Make", "Notion", "Figma", "WordPress"],
  },
]

export function Skills() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Compétences</h2>
        <p className="text-muted-foreground">
          Une vue d&#39;ensemble de mes compétences techniques et managériales
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