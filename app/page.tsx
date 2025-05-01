import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <main className="max-w-6xl mx-auto">
      <header className="mx-auto px-4 sm:px-8 py-6">
        <img src="/images/logo.svg" alt='logo'/>
      </header>
      <section className="mx-auto px-4 sm:px-8 h-screen lg:-mt-25 lg:grid grid-cols-[1fr_400px] items-center">
        <div className="">
          <h1 className="text-4xl md:text-7xl font-bold">
            Job <span className="text-primary">Tracking</span> App
          </h1>
          <p className="leading-loose  md:max-w-md mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque, culpa cumque cupiditate deleniti
            distinctio, eius eum molestiae officiis quidem reprehenderit repudiandae, saepe sequi soluta tempora.
            Aliquid beatae commodi ea eius harum itaque laborum neque praesentium quae qui quisquam, repudiandae sed
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <img className="hidden lg:inline-block" src="/images/main.svg"/>
      </section>
    </main>
  );
}
