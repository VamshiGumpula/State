import { Chip } from "@mui/material";

interface ButtonChipProps {
  text: "CLEAR" | "CONSIDER" | "ENGAGE" | "ADVERSE ACTION" | "-";
  onClickHandler: () => void;
}

const ButtonChip = ({ text, onClickHandler }: ButtonChipProps) => {
  return (
    <Chip
      // color="success"
      label={text}
      onClick={() => {
        onClickHandler();
        // console.log("chip clicked");
      }}
      variant="outlined"
      sx={{
        fontWeight: "bold",
        border: 0,
        borderRadius: "3px",
        color:
          text === "CONSIDER" || text === "ADVERSE ACTION"
            ? "accentYellow.main"
            : "accentGreen.main",
        backgroundColor:
          text === "CONSIDER" || text === "ADVERSE ACTION"
            ? "accentYellow.light"
            : "accentGreen.light",
      }}
    />
  );
};

export default ButtonChip;
