"use client"

import {
  Briefcase,
  Code,
  Contact,
  FileText,
  Github,
  Home,
  Linkedin,
  Mail,
  User,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Nadir Oubah",
    title: "Développeur Web Full Stack",
    email: "oubah.nadir@gmail.com",
    avatar: "/nadir.jpg",
  },
  navMain: [
    {
      title: "Accueil",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "À propos",
      url: "#about",
      icon: User,
    },
    {
      title: "Projets",
      url: "#projects",
      icon: Code,
    },
    {
      title: "Expérience",
      url: "#experience",
      icon: Briefcase,
    },
    {
      title: "CV",
      url: "#resume",
      icon: FileText,
    },
    {
      title: "Contact",
      url: "#contact",
      icon: Contact,
    },
  ],
  socialLinks: [
    {
      title: "GitHub",
      url: "https://github.com/nobh",
      icon: Github,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/nadir-o-239437167/",
      icon: Linkedin,
    },
  ],
}

export default function PortfolioSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={data.user.avatar} alt={data.user.name} />
                    <AvatarFallback>NO</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{data.user.name}</span>
                    <span className="truncate text-xs">{data.user.title}</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title} isActive={item.isActive}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarGroup>
            <SidebarMenu>
              {data.socialLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="sm">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Contact</span>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel>Contact</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>{data.user.email}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Portfolio de {data.user.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <div className="aspect-video rounded-xl bg-muted/50 p-4">
              <h2 className="text-2xl font-bold mb-2">Projets récents</h2>
              <p>Afficher ici une liste ou une grille de vos projets récents.</p>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50 p-4">
              <h2 className="text-2xl font-bold mb-2">Compétences</h2>
              <p>Afficher ici vos principales compétences et technologies.</p>
            </div>
          </div>
          <div className="min-h-[50vh] flex-1 rounded-xl bg-muted/50 p-4 md:min-h-min">
            <h2 className="text-2xl font-bold mb-2">À propos de moi</h2>
            <p>Développeur web full-stack et chef de projet digital, je suis passionné par la création de solutions numériques innovantes. Fort de 3 années d’expérience dans des environnements variés, j’ai pu développer des compétences solides aussi bien en développement front-end qu’en back-end.

Diplômé d’un Master en IT de l'Université Gustave Eiffel, j’ai eu l’opportunité de travailler dans des entreprises de renom comme Cofel Industries et Malakoff Humanis, ainsi que de créer ma propre agence web, Ngency. Mon approche repose sur l'agilité, l'optimisation continue et un engagement envers la qualité du produit final.

En plus du développement, je m'intéresse aux nouvelles technologies comme la blockchain et l’intelligence artificielle, et je reste toujours curieux d'apprendre de nouvelles compétences pour rester à la pointe du secteur.</p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
