import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

let model = null;

export async function initAI() {
  if (model) return model;

  model = await CreateMLCEngine({
    model_url: "https://huggingface.co/mlc-ai/phi-2-q4f16_1-MLC/resolve/main/",
    wasm_url: "https://esm.run/@mlc-ai/web-llm/dist/wasm/ggml-model.wasm",
  });

  return model;
}

export async function generateScript(prompt) {
  const engine = await initAI();
  const result = await engine.generate(prompt, {
    max_new_tokens: 200,
  });
  return result;
}
