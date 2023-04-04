import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import SearchBar from "../../atoms/SearchBar";

interface HeaderProps {
  setSearchKey: React.Dispatch<React.SetStateAction<string | null>>
}

const Header = ({ setSearchKey }: HeaderProps) => {
  return (
    <Stack
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      paddingX={2}
    >
      <Typography fontWeight="bold">Candidate Information</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <SearchBar setSearchKey={setSearchKey} />
        <Button
          size="small"
          variant="outlined"
          // color="backgroundGrey"
          sx={{
            paddingX: "30px",
            paddingY: "7.5px",
            color: "grey",
            borderRadius: "10px",
            border: "1px solid grey",
          }}
          startIcon={<FilterListIcon />}
        >
          Filter
        </Button>
        <IconButton
          sx={{
            paddingY: "7px",
            color: "grey",
            borderRadius: "10px",
            border: "1px solid grey",
          }}
          // variant="outlined"
        >
          <MoreVertIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Header;
