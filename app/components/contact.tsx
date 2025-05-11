import { Link } from "react-router";
import Icon from "./icon";

export default function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="bg-primary-pink relative z-3 flex h-screen w-full flex-col items-center justify-center gap-6 px-[var(--spacing-page-mobile)] text-center md:px-[var(--spacing-page)] 2xl:px-[var(--spacing-page-xl)]"
      >
        <div>
          <h2>Am I the colleague you're looking for?</h2>
          <p className="font-bold">
            I'm always happy to grab a coffee and talk about it!
          </p>
        </div>
        <div className="flex w-full flex-row justify-evenly md:w-1/2">
          <div className="flex w-1/4 flex-col items-center px-2">
            <Link to="mailto:siiri.lietu@gmail.com">
              <Icon
                name="email"
                className="fill-primary-pink bg-primary-green h-16 w-16 rounded p-2 md:h-24 md:w-24"
                hideLabel={true}
              />
            </Link>
            <p className="mt-2 text-[8pt]! md:text-sm!">
              siiri.lietu@gmail.com
            </p>
          </div>
          <div className="flex w-1/4 flex-col items-center px-2">
            <Icon
              name="phone"
              className="fill-primary-pink bg-primary-green h-16 w-16 rounded p-2 md:h-24 md:w-24"
              hideLabel={true}
            />
            <p className="mt-2 text-[8pt]! md:text-sm!">42464737</p>
          </div>
          <div className="flex w-1/4 flex-col items-center px-2">
            <Link to="https://www.linkedin.com/in/siiri-lietu-b3375387/">
              <Icon
                name="linkedin"
                className="fill-primary-green bg-primary-green h-16 w-16 rounded p-2 md:h-24 md:w-24"
                hideLabel={true}
              />
            </Link>
            <p className="mt-2 text-[8pt]! md:text-sm!">LinkedIn</p>
          </div>
          <div className="flex w-1/4 flex-col items-center px-2">
            <Link to="https://github.com/siiriellisylvia">
              <Icon
                name="github"
                className="fill-primary-pink bg-primary-green h-16 w-16 rounded p-2 md:h-24 md:w-24"
                hideLabel={true}
              />
            </Link>
            <p className="mt-2 text-[8pt]! md:text-sm!">Github</p>
          </div>
        </div>
      </section>
    </>
  );
}
