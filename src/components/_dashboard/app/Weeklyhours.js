import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  margin: "5px 0 5px 0",
  width: "45%",
  padding: theme.spacing(4, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter,
}));

// ----------------------------------------------------------------------

export default function Weeklyhours({ Total }) {
  return (
    <RootStyle>
      <Typography variant="h3">{Total} Hr</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }} />
      WEEK
    </RootStyle>
  );
}
