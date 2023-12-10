"use client";

import {Switch} from "@nextui-org/react";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {MdOutlineDarkMode} from "react-icons/md";
import {CiLight} from "react-icons/ci";
import {Tooltip} from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();
  const [isSelected, setIsSelected] = useState(theme ? true : false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Tooltip content={`Mode is ${theme}!`}>
      <div>
        <Switch
          isSelected={isSelected}
          onValueChange={() => {
            if (isSelected) {
              setTheme("light");
              setIsSelected(false);
            } else {
              setTheme("dark");
              setIsSelected(true);
            }
          }}
          size="sm"
          color="primary"
          startContent={<CiLight />}
          endContent={<MdOutlineDarkMode />}
        />
      </div>
    </Tooltip>
  );
}
