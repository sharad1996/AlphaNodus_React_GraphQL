import React from "react";

function Pill({ title }: { title: String }) {
  return <span className="pill-container">{title}</span>;
}

export default Pill;
