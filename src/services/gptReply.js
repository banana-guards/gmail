import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const generarRespuestaCorreo = async (contenido) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Responde este correo como un desarrollador profesional llamado Jose Luis Herrera.",
      },
      {
        role: "user",
        content: contenido,
      },
    ],
    temperature: 0.7,
  });

  return response.choices[0].message.content;
};
