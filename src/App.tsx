import GlobalStyles from "~/styles/global";
import { ThemeProvider } from "~/context/ThemeProvider";
import { useThemeMode } from "~/context/useThemeMode";

const ThemeToggle = () => {
  const { mode, toggle } = useThemeMode();
  return (
    <button onClick={toggle}>
      Switch to {mode === "light" ? "dark" : "light"} mode
    </button>
  );
};

export const AppContent = () => {
  return (
    <>
      <GlobalStyles />
      <h1>Hello DevTasks</h1>
      <ThemeToggle />
    </>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
