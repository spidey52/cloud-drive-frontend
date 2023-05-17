import { Typography } from "@mui/material";
import React from "react";

type Props = React.PropsWithChildren<{}> & {
 title: string;
};

const Title = (props: Props) => {
 return (
  <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
   {props.title}
  </Typography>
 );
};

export default Title;
