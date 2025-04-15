import { ThemeMode } from "constants/themeMode";
import { createContext } from "react";

interface ThemeContextType {
  mode: ThemeMode;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggle: () => {},
});
