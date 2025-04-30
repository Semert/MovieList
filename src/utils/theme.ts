import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#7C3AED", // Vivid Purple
      light: "#9F67FF",
      dark: "#5B21B6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FF4D8D", // Vibrant Pink
      light: "#FF71A3",
      dark: "#E31B60",
      contrastText: "#ffffff",
    },
    error: {
      main: "#FF4842", // Bright Red
      light: "#FF6B6B",
      dark: "#B71D18",
    },
    warning: {
      main: "#FFB020", // Golden Yellow
      light: "#FFCB57",
      dark: "#B77A00",
    },
    info: {
      main: "#00B8D9", // Cyan
      light: "#61F3F3",
      dark: "#006C9C",
    },
    success: {
      main: "#36B37E", // Emerald Green
      light: "#86E8AB",
      dark: "#1B806A",
    },
    background: {
      default: "#F0F4FF", // Cool Light Blue
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827", // Near Black
      secondary: "#4B5563", // Cool Gray
    },
    divider: "rgba(124, 58, 237, 0.08)",
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: "2.5rem",
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.75rem",
      letterSpacing: "-0.01em",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      letterSpacing: "0.01em",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 24px",
          fontSize: "0.95rem",
          boxShadow: "0 4px 6px -1px rgba(124, 58, 237, 0.15)",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 12px -2px rgba(124, 58, 237, 0.25)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #9F67FF 0%, #7C3AED 100%)",
          },
        },
        outlined: {
          borderWidth: "2px",
          borderColor: "rgba(124, 58, 237, 0.5)",
          "&:hover": {
            borderWidth: "2px",
            borderColor: "#7C3AED",
            backgroundColor: "rgba(124, 58, 237, 0.08)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 6px -1px rgba(124, 58, 237, 0.1)",
          background: "linear-gradient(135deg, #FFFFFF 0%, #F8F7FF 100%)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(124, 58, 237, 0.08)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 20px -4px rgba(124, 58, 237, 0.2)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #F8F7FF 100%)",
        },
        elevation1: {
          boxShadow: "0 4px 6px -1px rgba(124, 58, 237, 0.1)",
        },
        elevation2: {
          boxShadow: "0 8px 12px -2px rgba(124, 58, 237, 0.15)",
        },
        elevation3: {
          boxShadow: "0 12px 16px -4px rgba(124, 58, 237, 0.2)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "translateY(-1px)",
          },
        },
        filled: {
          background:
            "linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(124, 58, 237, 0.2) 100%)",
          color: "#7C3AED",
          "&:hover": {
            background:
              "linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.25) 100%)",
          },
        },
        outlined: {
          borderColor: "rgba(124, 58, 237, 0.3)",
          color: "#7C3AED",
          "&:hover": {
            backgroundColor: "rgba(124, 58, 237, 0.08)",
          },
        },
      },
    },
  },
};
