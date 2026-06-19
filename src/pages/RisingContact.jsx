import { useState } from "react";

export default function RisingContact() {
  const [canSubmit, setCanSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const formElement = e.currentTarget;

    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const website = form.get("website");
    const tel = form.get("tel");
    const budget = form.get("budget");
    console.log(name, email, website, tel, budget);
  }

  function handleInput(e) {
    const formElement = e.currentTarget;

    if (!formElement.checkValidity()) {
      setCanSubmit(false);
      console.log("Formular ist noch nicht gültig");
      return;
    } else {
      setCanSubmit(true);
      console.log("Formular ist gültig");
    }
  }

  return (
    <main className="w-full px-4 flex justify-center">
      <section className="w-full max-w-[1200px] min-h-[80vh] flex flex-col justify-center items-center gap-4">
        <span className="instrument text-4xl">Jetzt Bewerben</span>
        <form
          onSubmit={(e) => handleSubmit(e)}
          onInput={(e) => handleInput(e)}
          className="flex flex-col w-full max-w-[700px] gap-2 items-center text-slate-800"
        >
          <div className="w-full flex gap-2">
            <input
              type="text"
              placeholder="Name*"
              name="name"
              required
              className="bg-slate-100 outline-slate-100 outline-2 p-4 rounded focus:outline-blue-600 w-1/2"
            />
            <input
              type="text"
              placeholder="Website"
              name="website"
              className="bg-slate-100 outline-slate-100 outline-2 p-4 rounded focus:outline-blue-600 w-1/2"
            />
          </div>
          <input
            type="tel"
            placeholder="Telefon"
            name="tel"
            className="w-full bg-slate-100 outline-slate-100 outline-2 p-4 rounded focus:outline-blue-600"
          />
          <input
            type="email"
            placeholder="Email*"
            name="email"
            required
            className="w-full bg-slate-100 outline-slate-100 outline-2 p-4 rounded focus:outline-blue-600"
          />
          <label htmlFor="budget" className="w-full">
            Wie viel Werbebudget gibst du pro Monat aus?
          </label>

          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className="w-full bg-slate-100 outline-slate-100 outline-2 p-4 rounded
          focus:outline-blue-600"
          >
            <option value="" disabled>
              Auswählen
            </option>
            <option value="Ich schalte aktuell keine ads">
              Ich schalte aktuell keine ads
            </option>
            <option value="Weniger als 2.000 €/Monat">
              Weniger als 2.000 €/Monat
            </option>
            <option value="2.000 € - 10.000 €">2.000 € - 10.000 € </option>
            <option value="Mehr als 10.000 €/Monat">
              Mehr als 10.000 €/Monat
            </option>
          </select>
          <input
            type="submit"
            disabled={!canSubmit}
            className={
              canSubmit
                ? "bg-blue-600 rounded p-4 text-slate-100 w-full mt-2 font-medium"
                : "bg-slate-300 rounded p-4 text-slate-400 w-full mt-2 font-medium"
            }
          />
        </form>
      </section>
    </main>
  );
}
