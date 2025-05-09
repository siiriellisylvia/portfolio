import heroImage from "../../public/assets/portrait.png";
import Stars from "./stars";
import IconContainer from "./iconContainer";

export default function HeroSection() {
  return (
    <main className="relative top-0 min-h-screen w-full">
      {/* Portrait image - adjusted for bottom alignment and size */}
      <div className="absolute right-0 bottom-[55vh] z-10 h-[32vh] md:right-[2rem] md:bottom-0 md:h-[70vh] lg:right-[5rem] lg:h-[80vh]">
        <img
          src={heroImage}
          alt="Siiri Lietu"
          className="h-full w-full object-cover object-top"
        />
      </div>

      <section className="relative z-3 flex min-h-screen flex-col">
        <div className="bg-primary-green text-primary-pink relative flex h-[45vh] shrink-0 grow-0 flex-row justify-between md:min-h-[40vh] md:shrink md:grow">
          <Stars />
          <div className="mt-auto flex w-2/3 flex-col py-20 pl-[var(--spacing-page-mobile)] md:pl-[var(--spacing-page)]">
            <h2>Hi, nice to see you here!</h2>
            <h1>I'm Siiri,</h1>
          </div>
        </div>

        <div className="bg-primary-pink text-primary-green z-6 h-auto shrink-0 flex-grow px-[var(--spacing-page-mobile)] py-5 md:w-2/3 md:flex-grow-0 md:px-[var(--spacing-page)]">
          <h2>a frontend developer.</h2>
          <p>
            I'm a web development student looking for an internship for fall
            2025.
          </p>
          <p className="mt-6">
            This portfolio is made with React Router v7, TypeScript, Tailwind
            CSS and MongoDB. It's a constant work in progress, as it should be!
          </p>
          {/* Icon carousel that flows behind the portrait*/}
          <div className="mt-6">
            <IconContainer className="w-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
