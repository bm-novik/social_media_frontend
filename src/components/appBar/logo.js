import Typography from "@mui/material/Typography";
import * as React from "react";

export const Logo = () => {
 return (
  <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: 'none', sm: 'block' } }}
  >
      The Wierd APP
  </Typography>
 );
};
