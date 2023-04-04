import { ThemeProvider } from "@mui/material";
import "./App.css";
import CandidateInformationPage from "./pages/CandidateInformationPage";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CandidateInformationPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
