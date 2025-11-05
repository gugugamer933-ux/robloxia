import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

let engine = null;

export async function initAI() {
  if (engine) return engine;

  engine = await CreateMLCEngine({
    model: "Llama-3.2-1B-Instruct-q4f16_1", // modelo pequeno e rápido
  });

  return engine;
}

export async function generateScript(prompt) {
  const ai = await initAI();
  const result = await ai.generate(prompt, {
    max_tokens: 200,
    temperature: 0.7,
  });

  return result.output_text;
}
