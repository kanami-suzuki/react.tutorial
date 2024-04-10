import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
// 同じフォルダ内のAppというファイルを呼び出している

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    {/* App.jsを呼び出している */}
  </StrictMode>,
);
