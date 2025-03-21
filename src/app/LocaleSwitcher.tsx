"use client";

import { setLocale } from "@/paraglide/runtime";

const LocaleSwitcher = () => {
  return (
    <div>
      <button onClick={() => setLocale("en")}>English</button>
      <button onClick={() => setLocale("es")}>Spanish</button>
      <button onClick={() => setLocale("ru")}>Russian</button>
    </div>
  );
};

export default LocaleSwitcher;
