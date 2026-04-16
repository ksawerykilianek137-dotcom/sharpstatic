import { Hono } from "hono";

const contactRouter = new Hono<{ Bindings: { RESEND_API_KEY: string } }>();

contactRouter.post("/", async (c) => {
  const { name, businessName, websiteUrl, email, language } = await c.req.json();

  if (!name || !email) {
    return c.json({ error: "Name and email are required" }, 400);
  }

  const resendApiKey = c.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is missing");
    return c.json({ error: "Server configuration error" }, 500);
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "EdgesClaw Contact <onboarding@resend.dev>",
      to: "ksawery@edgesclaw.com",
      subject: language === "pl" 
        ? `Nowe zapytanie od ${businessName || name}`
        : `New Business Inquiry from ${businessName || name}`,
      html: `
        <h2>Nowe zapytanie z formularza kontaktowego</h2>
        <p><strong>Imię i nazwisko / Name:</strong> ${name}</p>
        <p><strong>Firma / Business:</strong> ${businessName || "N/A"}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Strona WWW / Website:</strong> ${websiteUrl || "N/A"}</p>
        <p><strong>Język / Language:</strong> ${language || "en"}</p>
      `,
    }),
  });

  if (response.ok) {
    return c.json({ success: true });
  } else {
    const errorData = await response.json();
    console.error("Resend API error:", errorData);
    return c.json({ error: "Failed to send email" }, 500);
  }
});

export default contactRouter;
