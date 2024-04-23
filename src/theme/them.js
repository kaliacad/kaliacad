import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto", // Vous pouvez ajouter d'autres polices ici si nécessaire
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "2.5rem", // Taille du titre de niveau 1
      fontWeight: 700, // Poids de la police du titre de niveau 1
    },
    h2: {
      fontSize: "2rem", // Taille du titre de niveau 2
      fontWeight: 600, // Poids de la police du titre de niveau 2
    },
    h3: {
      fontSize: "1.75rem", // Taille du titre de niveau 3
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem", // Taille du titre de niveau 4
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.25rem", // Taille du titre de niveau 5
      fontWeight: 500,
    },
    h5: {
      fontSize: "1rem", // Taille du titre de niveau 5
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem", // Taille du texte principal
      fontWeight: 400, // Poids de la police du texte principal
    },
    body2: {
      fontSize: "0.875rem", // Taille du deuxième texte principal
      fontWeight: 400, // Poids de la police du deuxième texte principal
    },
  },
});

export default theme;
