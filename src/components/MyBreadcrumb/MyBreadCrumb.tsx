import { NavigateNext } from "@mui/icons-material";
import { Box, Link, Typography, Breadcrumbs, Collapse } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removeAllBreadcrumb, removeBreadcrumb } from "../../store/slices/breadcrumb.slice";

type Props = {
 list: string[];
 handleClick: (el: string) => void;
};

const MyBreadCrumb = (props: Props) => {
 const { breadcrumbs } = useAppSelector((state) => state.breadcrumb);
 const dispatch = useAppDispatch();

 const handleClick = (id: string) => {
  dispatch(removeBreadcrumb(id));
 };

 const handleHomeClick = () => {
  dispatch(removeAllBreadcrumb());
 };

 return (
  <Box
   sx={{
    py: 2,
   }}
  >
   <Breadcrumbs
    separator={<NavigateNext fontSize='small' />}
    aria-label='breadcrumb'
    sx={{
     ":hover": {
      cursor: "pointer",
     },
    }}
   >
    <Link
     key={1}
     underline='hover'
     color='inherit'
     onClick={() => handleHomeClick()}
     sx={{
      fontSize: "1.2rem",
      fontWeight: "bold",
     }}
    >
     Home
    </Link>

    {breadcrumbs.map((el, index) => (
     <Link
      key={index}
      underline='hover'
      color='inherit'
      onClick={() => handleClick(el._id)}
      sx={{
       fontSize: "1.2rem",
       fontWeight: "500",
      }}
     >
      {el.name}
     </Link>
    ))}
   </Breadcrumbs>
  </Box>
 );
};

export default MyBreadCrumb;
