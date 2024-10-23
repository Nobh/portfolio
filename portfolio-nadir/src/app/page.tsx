import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-4">
          Bienvenue sur le portfolio de Nadir Oubah
        </h1>
        
        <p className="mt-3 text-2xl">
          Chef de projet digital / Développeur web full-stack
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="#about"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">À propos &rarr;</h3>
            <p className="mt-4 text-xl">
              Découvrez mon parcours et mes compétences en développement web et gestion de projet.
            </p>
          </a>

          <a
            href="#projects"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Projets &rarr;</h3>
            <p className="mt-4 text-xl">
              Explorez mes réalisations récentes en développement web et digital.
            </p>
          </a>

          <a
            href="#contact"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Contact &rarr;</h3>
            <p className="mt-4 text-xl">
              Intéressé par une collaboration ? N'hésitez pas à me contacter.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}