import { Box, Button, Icon, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "./LoginPage.module.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type Props = {};

const initialState: LoginForm = {
 username: "",
 password: "",
};

const LoginPage = (props: Props) => {
 const [viewPassword, setViewPassword] = React.useState(false);
 const [state, setState] = React.useState(initialState);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setState({
   ...state,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
 };

 const toggleViewPassword = () => setViewPassword((prev) => !prev);

 return (
  <Box className={styles.loginBox}>
   <Box className={styles.bannerBox}></Box>
   <Box className={styles.formBox}>
    <Typography variant='h4'>LOG IN</Typography>

    <TextField label='username' variant='outlined' value={state.username} onChange={handleChange} name='username' />
    <TextField
     InputProps={{
      endAdornment: <IconButton onClick={toggleViewPassword}>{viewPassword ? <Visibility /> : <VisibilityOff />}</IconButton>,
     }}
     label='password'
     variant='outlined'
     value={state.password}
     onChange={handleChange}
     name='password'
     type={viewPassword ? "text" : "password"}
    />

    <Button variant='contained'>Log In</Button>

    <Button variant='text'>forgot password?</Button>

    <Typography variant='body1' textAlign='center'>
     Don't have an account?
    </Typography>
    <Button variant='outlined'>Sign Up</Button>
   </Box>
  </Box>
 );
};

export default LoginPage;
