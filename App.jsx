
import { useState } from "react";
import { generateScript } from "./ai.js";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    setOutput("Gerando script...");
    const result = await generateScript(prompt);
    setOutput(result);
  }

  return (
    <div style={{ padding: "20px", color: "white", background: "#111", minHeight: "100vh" }}>
      <h1>ScriptLab - Gerador de Scripts Roblox</h1>
      <textarea
        style={{ width: "100%", height: "120px" }}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Descreva o script..."
      />
      <br /><br />
      <button onClick={handleGenerate}>Gerar Script</button>
      <pre style={{ whiteSpace: "pre-wrap", marginTop: "20px", background: "#222", padding: "10px" }}>{output}</pre>
    </div>
  );
}
