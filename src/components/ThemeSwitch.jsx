import { VisuallyHidden, useSwitch } from "@nextui-org/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeSwitch = (props) => {
  const { Component, slots, getBaseProps, getInputProps, getWrapperProps } =
    useSwitch(props);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    try {
      let localTheme = localStorage.getItem("theme");
      const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (localTheme === "system" || !localTheme) {
        if (systemTheme) {
          localTheme = "dark";
        } else {
          localTheme = "light";
        }
      }

      setTheme(localTheme);
    } catch (err) {
      console.error(err);
    }
  }, [setTheme]);

  return (
    <Component
      {...getBaseProps()}
      data-selected={theme === "dark" ? false : true}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: [
            "w-8 h-8",
            "flex items-center justify-center",
            "rounded-lg bg-default-100 hover:bg-default-200",
          ],
        })}
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </div>
    </Component>
  );
};

export default ThemeSwitch;
