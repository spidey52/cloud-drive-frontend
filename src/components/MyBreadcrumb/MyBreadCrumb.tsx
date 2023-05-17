import { NavigateNext } from "@mui/icons-material";
import { Box, Link, Typography, Breadcrumbs, Collapse } from "@mui/material";

type Props = {
 list: string[];
 handleClick: (el: string) => void;
};

const MyBreadCrumb = ({ list, handleClick }: Props) => {
 return (
  <Box sx={{}}>
   <Breadcrumbs
    separator={<NavigateNext fontSize='small' />}
    aria-label='breadcrumb'
    maxItems={2}
    sx={{
     ":hover": {
      cursor: "pointer",
     },
    }}
   >
    {list.map((el, index) => (
     <Link key={index} underline='hover' color='inherit' onClick={() => handleClick(el)}>
      {el}
     </Link>
    ))}
   </Breadcrumbs>
  </Box>
 );
};

export default MyBreadCrumb;
