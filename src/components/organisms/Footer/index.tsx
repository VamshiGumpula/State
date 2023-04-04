import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Pagination, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      paddingX={2}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography>10 out 84 pages</Typography>
        <Button
          variant="outlined"
          color="inherit"
          endIcon={<KeyboardArrowDownIcon />}
        >
          10 per page
        </Button>
      </Stack>
      <Pagination count={3} shape="rounded" color="primary" />
    </Stack>
  );
};

export default Footer;
