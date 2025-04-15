// src/styles/theme.ts

const common = {
  spacing: (factor: number) => `${factor * 8}px`,
};

export const lightTheme = {
  ...common,
  colors: {
    primary: "#6366F1",
    background: "#F9FAFB",
    text: "#111827",
    success: "#10B981",
    danger: "#EF4444",
  },
};

export const darkTheme = {
  ...common,
  colors: {
    primary: "#818CF8",
    background: "#1F2937",
    text: "#F9FAFB",
    success: "#34D399",
    danger: "#F87171",
  },
};

export type AppTheme = typeof lightTheme;
