import { Box, Stack } from "@mui/material";
import { useState } from "react";
import CandidateInformationTable from "../../components/organisms/CandidateInformationTable";
import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";

const CandidateInformationPage = () => {
  const [searchKey, setSearchKey] = useState<string | null>("");
  return (
    <Box padding={7}>
      <Stack spacing={3}>
        <Header setSearchKey={setSearchKey} />
        <CandidateInformationTable searchKey={searchKey} />
        <Footer />
      </Stack>
    </Box>
  );
};

export default CandidateInformationPage;
