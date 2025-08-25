"use client";

export default function GlobalStyles() {
  return (
    <style jsx global>{`
      :root {
        --primary-red: #ff0000;
        --secondary-black: #000000;
        --primary-hover: #cc0000;
        --secondary-hover: #333333;
      }
    `}</style>
  );
}
