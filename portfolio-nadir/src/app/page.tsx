import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Code, Briefcase, Rocket, Star } from "lucide-react"

const skills = [
  { category: "Front-End", items: ["HTML/CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS", "VueJS", "GatsbyJS"] },
  { category: "Back-End", items: ["PHP", "Laravel", "Node.js", "NestJS", "REST API", "GraphQL"] },
  { category: "CMS", items: ["WordPress", "Magento", "Drupal", "Shopify"] },
  { category: "Database", items: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Airtable"] },
  { category: "DevOps & Tools", items: ["Git", "Docker", "Unix", "Windows"] },
  { category: "Other", items: ["SEO", "SEA", "Performance Monitoring", "Cyber Security", "Payment Systems"] },
  { category: "Languages", items: ["French (Native)", "English (Fluent)", "German (Intermediate)", "Arabic (Advanced)"] },
]

const projects = [
  { 
    title: "Projet 1", 
    description: "Application web moderne", 
    image: "/project1.jpg" 
  },
  { 
    title: "Projet 2", 
    description: "Plateforme e-commerce", 
    image: "/project2.jpg" 
  },
  { 
    title: "Projet 3", 
    description: "Dashboard interactif", 
    image: "/project3.jpg" 
  },
]

const experiences = [
  {
    title: "Digital Project Manager",
    company: "Cofel Industries",
    location: "Boulogne Billancourt (Paris Area)",
    period: "Depuis Janvier 2024",
    description: "Gestion de projets digitaux, développement back-end avec Magento 2 et WordPress, front-end avec HTML/CSS et JavaScript. Optimisation SEO et gestion de base de données.",
    skills: ["Magento 2", "WordPress", "PHP", "REST API", "HTML/CSS", "JavaScript", "SQL", "PostgreSQL", "Agile", "SEO", "Tag Manager"]
  },
  {
    title: "Full Stack Web Developer",
    company: "Improba / Ateliom",
    location: "Paris",
    period: "2022-2023",
    description: "Développement full stack avec PHP (Laravel 5), NestJS, WordPress, VueJS, et ReactJS. Gestion de bases de données et développement de plugins WordPress.",
    skills: ["PHP", "Laravel", "NestJS", "WordPress", "VueJS", "ReactJS", "TypeScript", "SQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Project Manager & Front-End Developer",
    company: "Ingenius",
    location: "Paris",
    period: "2021-2022",
    description: "Intégration de pages, développement WordPress, assurance qualité et support client. Utilisation de méthodologies Agile et optimisation SEO.",
    skills: ["HTML", "CSS", "JavaScript", "GatsbyJS", "WordPress", "Agile", "SEO"]
  },
  {
    title: "Alternance Webmaster Editorial",
    company: "Malakoff Humanis",
    location: "Malakoff (Paris Area)",
    period: "2018-2019",
    description: "Gestion de contenu pour divers sites web du groupe, optimisation de contenu et de médias, tests et corrections.",
    skills: ["Drupal", "Content Management", "Media Optimization", "Testing"]
  }
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 flex items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Nadir Oubah</h1>
          <h2 className="text-2xl text-muted-foreground mb-4">Développeur Web Full Stack 🚀</h2>
          <p className="max-w-2xl mb-6">
            Passionné par la création d'applications web modernes et performantes. 
            Spécialisé en React, Node.js, et technologies cloud. ✨
          </p>
          <Button asChild>
            <Link href="#projects"><Rocket className="mr-2 h-4 w-4" /> Voir mes projets</Link>
          </Button>
        </div>
        <div className="ml-8">
          <Image
            src="/nadir.jpg"
            alt="Nadir Oubah"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      </section>

      <section id="projects" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center"><Code className="mr-2" /> Projets récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">En savoir plus</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="experience" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center"><Briefcase className="mr-2" /> Expérience professionnelle</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.company} | {exp.location} | {exp.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="skills">
        <h2 className="text-2xl font-semibold mb-4 flex items-center"><Star className="mr-2" /> Compétences</h2>
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">Toutes</TabsTrigger>
            {skills.map((category) => (
              <TabsTrigger key={category.category} value={category.category}>{category.category}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.flatMap((category) => category.items).map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm py-1 px-2">{skill}</Badge>
              ))}
            </div>
          </TabsContent>
          {skills.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.items.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-1 px-2">{skill}</Badge>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  )
}
