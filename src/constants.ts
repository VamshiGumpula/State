export const TABLEHEADNAME = "NAME";
export const TABLEHEADADUJIDICATION = "ADJUDICATION";
export const TABLEHEADSTATUS = "STATUS";
export const TABLEHEADLOCATION = "LOCATION";
export const TABLEHEADDATE = "DATE";

export type CandidateInformation = {
  id: number;
  name: string;
  adjudication: "-" | "ENGAGE" | "ADVERSE ACTION";
  status: "CLEAR" | "CONSIDER";
  location: string;
  date: string;
};

export const candidateInfo: CandidateInformation[] = [
  {
    id: 0,
    name: "John Smith",
    adjudication: "-",
    status: "CLEAR",
    location: "Barrouallie",
    date: "2/22/2022",
  },
  {
    id: 1,
    name: "Serene",
    adjudication: "-",
    status: "CLEAR",
    location: "Vanersborg",
    date: "3/13/2022",
  },
  {
    id: 2,
    name: "Walsh",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sukamanah",
    date: "7/2/2022",
  },
  {
    id: 3,
    name: "Maurizia",
    adjudication: "-",
    status: "CLEAR",
    location: "Sukamanah",
    date: "2/20/2022",
  },
  {
    id: 4,
    name: "Kendre",
    adjudication: "ENGAGE",
    status: "CLEAR",
    location: "Beutong Ateuh",
    date: "5/19/2022",
  },
  {
    id: 5,
    name: "Erastus",
    adjudication: "-",
    status: "CLEAR",
    location: "Hoviyn Am",
    date: "12/1/2021",
  },
  {
    id: 6,
    name: "Jereme",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sharingol",
    date: "7/26/2022",
  },
  {
    id: 7,
    name: "John Smith",
    adjudication: "-",
    status: "CONSIDER",
    location: "Lianyun",
    date: "5/28/2022",
  },
  {
    id: 8,
    name: "Cari",
    adjudication: "-",
    status: "CLEAR",
    location: "Taboao da Serra",
    date: "5/23/2022",
  },
  {
    id: 9,
    name: "Kimble",
    adjudication: "-",
    status: "CONSIDER",
    location: "Veseli nad Moravou",
    date: "8/24/2022",
  },
];
