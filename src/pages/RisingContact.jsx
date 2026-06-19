import { useState } from "react";

export default function RisingContact() {
  const [canSubmit, setCanSubmit] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [send, setSend] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formElement = e.currentTarget;

    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }

    if (submitting) return;

    setSubmitting(true);

    try {
      const form = new FormData(formElement);

      const payload = {
        name: form.get("name"),
        website: form.get("website"),
        email: form.get("email"),
        phone: form.get("phone"),
        budget: form.get("budget"),
      };

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error(result);
        return;
      }

      console.log("Lead sent:", result);
      setSend(true);
      formElement.reset();
      setCanSubmit(false);
    } catch (error) {
      console.error("Submit failed:", error);
    } finally {
      setSubmitting(false);
    }
  }

  function handleInput(e) {
    setCanSubmit(e.currentTarget.checkValidity());
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
            name="phone"
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
            disabled={!canSubmit || submitting}
            className={
              canSubmit && !submitting
                ? "bg-blue-600 rounded p-4 text-slate-100 w-full mt-2 font-medium cursor-pointer"
                : "bg-slate-300 rounded p-4 text-slate-400 w-full mt-2 font-medium cursor-not-allowed"
            }
          />
        </form>
      </section>
    </main>
  );
}
