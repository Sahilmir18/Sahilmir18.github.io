import { handleInput } from './handlers/inputHandler.js';

export function init() {
  console.log("Terminal initialized");

  const terminalInput = document.getElementById("terminal-input");
  const terminal = document.querySelector(".terminal");

  if (!terminalInput) return;

  terminalInput.addEventListener("keydown", handleInput);

  const focusTerminalInput = () => {
    terminalInput.focus();
  };

  if (terminal) {
    terminal.addEventListener("pointerdown", focusTerminalInput);
  }

  terminalInput.addEventListener("focus", () => {
    setTimeout(() => {
      terminalInput.scrollIntoView({
        block: "nearest",
        behavior: "smooth"
      });
    }, 100);
  });
}
