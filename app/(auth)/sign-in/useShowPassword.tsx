"use client";

import { useState } from "react";

export default function useShowPassword() {
  const [isVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  return { isVisible, toggleVisibility };
}
