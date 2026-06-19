import Button from "../../../components/Button";

export default function CTA({ content }) {
  return (
    <section className="w-full max-w-[1200px] min-w-0 px-0 sm:px-4">
      <div className="blue relative overflow-hidden rounded-2xl py-20 text-center text-white shadow-xl">
        <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center gap-4">
          <span className="text-blue-100">{content.eyebrow}</span>
          <span className="instrument m-0 text-3xl leading-tight sm:text-4xl md:text-6xl md:leading-[1.05]">
            {content.title}
          </span>
          <p className="max-w-[620px] leading-7 text-blue-50">
            {content.text}
          </p>
          <div className="flex gap-2">
            <Button
              text={content.button.text}
              link={content.button.link}
              icon={true}
              variant="white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
