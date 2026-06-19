import Button from "../../../components/Button";

export default function CTA() {
  return (
    <section className="w-full max-w-[1200px] min-w-0 px-0 sm:px-4">
      <div className="blue relative overflow-hidden rounded-2xl text-center text-white shadow-xl py-20">
        <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center gap-4">
          <span className="text-blue-100">
            Bereit für den nächsten Schritt?
          </span>
          <span className="instrument m-0 text-3xl leading-tight sm:text-4xl md:text-6xl md:leading-[1.05]">
            Sieh dir an, wie dein Account als AI Command Center aussieht.
          </span>
          <p className="max-w-[620px] leading-7 text-blue-50">
            Wir zeigen dir live, welche Analysen, To-dos und Automationen für
            deine aktuelle Wachstumsphase Sinn machen.
          </p>
          <div className="flex gap-2">
            <Button
              text="Tool Demo anfragen"
              link="/anfragen"
              icon={true}
              variant="white"
            />
            <Button
              text="Jetzt bewerben"
              link="/bewerben"
              variant="white-outline"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
