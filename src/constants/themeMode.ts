export const themeMode = {
  light: "light",
  dark: "dark",
} as const;

export type ThemeMode = (typeof themeMode)[keyof typeof themeMode];
