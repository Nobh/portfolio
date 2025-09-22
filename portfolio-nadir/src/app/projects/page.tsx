import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const projects = [
  {
    title: "DailyBlogPost",
    description: "SaaS d'automatisation de blogs SEO. Conçu et développé un SaaS multi-tenant pour automatiser la création et la publication d'articles SEO.",
    image: "/dailyblogpost.png",
    url: "https://dailyblogpost.app",
    technologies: ["Next.js", "TypeScript", "NeonDB", "n8n", "Tailwind CSS"],
  },
  {
    title: "Service Promocodes",
    description: "API de gestion et validation de codes promotionnels avec restrictions dynamiques complexes. Système de règles avec opérateurs logiques (@or, @and) et intégration API météo.",
    image: "/promocode.jpg",
    url: "#",
    technologies: ["TypeScript", "Fastify", "Node.js", "API REST", "OpenWeatherMap"],
  },
  {
    title: "FocusLeveling",
    description: "SaaS de productivité avec gamification. Sessions de focus chronométrées, système de niveaux, leaderboards et récompenses pour améliorer la concentration et la motivation.",
    image: "/focusleveling.png",
    url: "https://focusleveling.com",
    technologies: ["Next.js", "TypeScript", "Drizzle ORM", "NeonDB", "Stripe", "NextAuth"],
  },
  {
    title: "Vizzonary",
    description: "E-commerce de vêtements customisés inspirés de la culture Hip-hop des années 80-90 et de la Black Excellence. Une plateforme qui rend hommage à la musique, aux films et à la culture pop à travers des créations uniques.",
    image: "/vizzonary.webp",
    url: "https://www.vizzonary.com/",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "CSS"],
  },
  {
    title: "Nutrifit Thaïs",
    description: "Site vitrine pour une coach en nutrition proposant des programmes personnalisés. Interface moderne et responsive mettant en avant les services de coaching et de nutrition.",
    image: "/nutrifit.webp",
    url: "https://www.nutrifit-thais.fr/",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "MySQL"],
  },
  {
    title: "Cabinet Cavaillé Avocat",
    description: "Site professionnel pour un cabinet d'avocat, présentant ses domaines d'expertise et services. Interface élégante et professionnelle avec système de prise de rendez-vous.",
    image: "/cavaille.webp",
    url: "https://www.cavaille-avocat.com/",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "MySQL"],
  },
  {
    title: "Infinity Cosmetics",
    description: "Plateforme e-commerce pour une société de dermatologie esthétique. Site multilingue avec catalogue produits et espace professionnel.",
    image: "/infinity.webp",
    url: "https://infinity-cosmetics.eu/fr",
    technologies: ["Next.js", "Sanity", "TypeScript", "Tailwind CSS", "React"],
  },
  {
    title: "Prestige Phone",
    description: "Site vitrine et e-commerce pour un magasin de réparation téléphonique. Interface moderne avec système de réservation et suivi des réparations.",
    image: "/prestige.webp",
    url: "https://prestige-phone.fr/",
    technologies: ["Next.js", "Sanity", "TypeScript", "Tailwind CSS", "React"],
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-muted">
      <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-primary/80">Mes Projets</h1>
          <p className="text-xl text-muted-foreground mt-4">
            Voici quelques-unes de mes réalisations où j&#39;ai transformé du code en solutions fonctionnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block hover:opacity-80"
                >
                  <Badge className="bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground">Voir le projet</Badge>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}