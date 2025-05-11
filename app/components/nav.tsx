import Button from "./button";

const CVUrl =
  "https://res.cloudinary.com/dxzq1qavb/image/upload/v1746964703/siirilietu-cv_uc6ezy.pdf";

export default function Nav() {
  return (
    <div className="bg-primary-green fixed top-2 right-[var(--spacing-page-mobile)] z-50 rounded-full px-2 py-2 md:right-[var(--spacing-page)] 2xl:right-[var(--spacing-page-xl)]">
      <nav className="flex justify-end gap-4">
        <Button link="#contact" label="Contact" />
        <Button link={CVUrl} label="CV" />
      </nav>
    </div>
  );
}
