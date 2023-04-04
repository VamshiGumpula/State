import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  CandidateInformation,
  TABLEHEADADUJIDICATION,
  TABLEHEADDATE,
  TABLEHEADLOCATION,
  TABLEHEADNAME,
  TABLEHEADSTATUS,
  candidateInfo,
} from "../../../constants";
import ButtonChip from "../../atoms/ButtonChip";

interface CandidateInformationTableProps {
  searchKey: string | null;
}

const CandidateInformationTable = ({
  searchKey,
}: CandidateInformationTableProps) => {
  const [candidateInfoArray, setCandidateInfoArray] =
    useState<CandidateInformation[]>(candidateInfo);
  // useEffect(() => {}, [candidateInfoArray]);

  useEffect(() => {
    console.log("updated");
    let filteredCandidateArray = candidateInfo.filter((candidate) => {
      if (
        candidate.name
          .toLowerCase()
          .includes(searchKey?.trim().toLowerCase() ?? "")
      )
        return candidate;
      return null;
    });
    if (searchKey === "") filteredCandidateArray = candidateInfo;

    setCandidateInfoArray(filteredCandidateArray);
  }, [searchKey]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: "backgroundGrey.main" }}>
          <TableRow>
            <TableCell>
              <Typography variant="Caption1">{TABLEHEADNAME}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="Caption1">
                {TABLEHEADADUJIDICATION}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="Caption1">{TABLEHEADSTATUS}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="Caption1">{TABLEHEADLOCATION}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="Caption1">{TABLEHEADDATE}</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {candidateInfoArray.map((row) => {
            // console.log(row);
            return (
              <TableRow key={`candidate${row.id}`}>
                <TableCell sx={{ color: "primary.main" }}>{row.name}</TableCell>
                <TableCell>
                  <ButtonChip
                    text={row.adjudication}
                    onClickHandler={() => {
                      if (row.adjudication === "-") row.adjudication = "ENGAGE";
                      else row.adjudication = "-";
                      setCandidateInfoArray([...candidateInfoArray]);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <ButtonChip
                    text={row.status}
                    onClickHandler={() => {
                      if (row.status === "CLEAR") row.status = "CONSIDER";
                      else row.status = "CLEAR";
                      setCandidateInfoArray([...candidateInfoArray]);
                    }}
                  />
                </TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CandidateInformationTable;
