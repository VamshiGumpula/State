import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

interface SearchBarProps {
  setSearchKey: React.Dispatch<React.SetStateAction<string | null>>;
}

const SearchBar = ({ setSearchKey }: SearchBarProps) => {
  return (
    <TextField
      size="small"
      fullWidth
      type="text"
      
      placeholder="Search any candidate"
      sx={{ borderRadius: "50px",borderColor: "black", color: "backgroundGrey" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ fontSize: "30px" }} />
          </InputAdornment>
        ),
      }}
      onChange={(e) => setSearchKey(e.target.value)}
    />
  );
};

export default SearchBar;
