import React, {
  createContext,
  useContext,
  useEffect,
} from "react";

const ThemeContext = createContext(null);

const themeColors = {
  light: {
    background: "#ffffff",
    surface: "#f8fafc",
    primary: "#4f46e5",
    textMain: "#0f172a",
    textSecondary: "#475569",
    border: "#e2e8f0",
  },
  dark: {
    background: "#020617",
    surface: "#0f172a",
    primary: "#818cf8",
    textMain: "#f8fafc",
    textSecondary: "#94a3b8",
    border: "#1e293b",
  },
};


const ThemeProvider = ({ children }) => {
  const isDarkMode = false;
  const theme = themeColors.light;

  useEffect(() => {
    try {
      localStorage.removeItem("portfolio-theme");
    } catch {
      // Ignore if localStorage is unavailable
    }
  }, []);

  const toggleTheme = () => {};

  return (
    <ThemeContext.Provider
      value={{ theme, isDarkMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};


const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within ThemeProvider"
    );
  }

  return context;
};

export { ThemeProvider };
export default useTheme;
