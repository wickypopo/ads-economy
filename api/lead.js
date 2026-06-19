export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, website, email, phone, budget } = req.body;

    if (!name || !email || !budget) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({
        error: "Invalid email",
      });
    }

    const payload = new FormData();

    payload.append("name", name);
    payload.append("website", website ?? "");
    payload.append("email", email);
    payload.append("phone", phone ?? "");
    payload.append("budget", budget);
    payload.append("source", "Ads Matrix Website");

    const response = await fetch(process.env.ZAPIER_LEAD_WEBHOOK_URL, {
      method: "POST",
      body: payload,
    });

    const text = await response.text();

    return res.status(response.ok ? 200 : response.status).json({
      success: response.ok,
      zapierStatus: response.status,
      zapierResponse: text,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
}
