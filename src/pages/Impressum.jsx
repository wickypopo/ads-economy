import Markdown from "react-markdown";

export default function Impressum() {
  const content = `
# Impressum

www.adseconomy.com

**Inhaber:** Nels Bonifer

Ads Economy Inh. N. Bonifer  
Ballindamm 3  
20095 Hamburg

## Kontakt

**Service Mail:**  
service@adseconomy.com

**Nels Bonifer:**  
n.bonifer@adseconomy.com

**USt-Id:** DE336921869

Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden:  
https://ec.europa.eu/consumers/odr/

Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.`;
  return (
    <section className="w-full max-w-[1200px] min-h-screen flex flex-col gap-4 pb-10">
      <Markdown>{content}</Markdown>
    </section>
  );
}
