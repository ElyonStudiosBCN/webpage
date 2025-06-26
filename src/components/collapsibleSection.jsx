import { useState } from "react";
import "./collapsibleSection.css";

export default function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-section">
      <button className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        {title} <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
}
