"use client";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

interface NextThemeImgProps {
  init?: string;
  dark?: string;
  light?: string;
  defaultSrc?: string;
}

const useNextThemeImg = ({
  init = "",
  dark = "",
  light = "",
  defaultSrc = "",
}: NextThemeImgProps): string => {
  const {resolvedTheme} = useTheme();
  const [state, setState] = useState<string>(init);

  useEffect(() => {
    switch (resolvedTheme) {
      case "dark":
        setState(dark);
        break;
      case "light":
        setState(light);
        break;
      default:
        setState(defaultSrc);
        break;
    }
  }, [dark, defaultSrc, light, resolvedTheme]);

  return state;
};

export default useNextThemeImg;
