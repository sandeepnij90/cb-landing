"use client";

import { useEffect, useState } from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const Navigation = () => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 960px)");
    const updateScreen = () => setIsDesktop(mediaQuery.matches);

    updateScreen();
    mediaQuery.addEventListener("change", updateScreen);

    return () => mediaQuery.removeEventListener("change", updateScreen);
  }, []);

  if (isDesktop === null) {
    return null;
  }

  return isDesktop ? <DesktopNavigation /> : <MobileNavigation />;
};
