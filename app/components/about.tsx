export default function AboutSection() {
  return (
    <section className="bg-primary-green relative z-3 flex w-full flex-col justify-center px-[var(--spacing-page-mobile)] py-6 text-white md:min-h-screen md:px-[var(--spacing-page)] 2xl:px-[var(--spacing-page-xl)]">
      <div>
        <h2 className="text-primary-pink mt-0 mb-10 pb-5">About me</h2>

        <div className="space-y-6">
          <div>
            <h4 className="text-primary-pink mb-2">From Europe to Aarhus</h4>
            <p>
              After spending the last ten years living and working in three
              different countries around Europe, I’ve now found my home in
              Aarhus with my Danish boyfriend. Moving abroad taught me a lot
              about communication, adapting to different cultures, and working
              closely with people from all over the world.
            </p>
          </div>

          <div>
            <h4 className="text-primary-pink mb-2">
              Genuinely enjoy learning and problem solving
            </h4>
            <p>
              I'm 34, and would call myself a lifetime learner. I have a degree
              in clothing design and business, and I enjoy developing new skills
              and trying new things in general. I have also tried figure
              skating, boxing and wakeboarding among other things - with very
              mixed results.
            </p>
          </div>

          <div>
            <h4 className="text-primary-pink mb-4">
              Back to a childhood hobby
            </h4>
            <p>
              After studying and working in many fields, I found my childhood
              hobby again in frontend development. I was scribbling HTML and CSS
              in a notebook when I was around ten years old, and making websites
              in Geocities. I wish I had those pages to add to my portfolio!
            </p>
          </div>

          <div>
            <h4 className="text-primary-pink mb-4">
              Creativity, teamwork - and kittens
            </h4>
            <p className="text-light-pink text-sm font-normal">
              Creativity and helping others are a central part of my life - I'm
              the happiest when I can see that my work has a positive impact. Be
              it a script that finally cooperates, working together with a
              colleague to find a good solution to a problem, or volunteering
              with animals (though I would probably pay money to hang out with
              kittens).
            </p>
          </div>

          <div>
            <h4 className="text-primary-pink mb-4">Bad jokes and dad jokes</h4>
            <p>
              Dad jokes and bad jokes in general are close to my heart, and I
              think I must have heard all the Apple “Hey Siri” jokes known to
              man, and I don't even mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
