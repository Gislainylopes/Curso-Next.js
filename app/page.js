"use client";

import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Título padrão"}</h1>;
}

export default function HomePage() {
  const names = [
    "Ada Lovelace",
    "Grace Hopper",
    "Margaret Hamilton"
  ];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <main>
      <Header title="Develop. Preview. Ship." />

      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>
        Curtidas: {likes}
      </button>
    </main>
  );
}
