import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import {
  GridStyled,
  Hero,
  LoginContainer,
  Image,
  ImageContainer,
  LogoContainer,
  Logo,
  Text,
  SecondaryHeading,
  BoxStyled,
  InputStyled,
  ButtonStyled,
  Footer,
  FooterText,
} from '../../styles/pages/Login.styled';

import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

import heroImg from './../../img/hero-img.svg';
import logo from './../../img/logo-img.svg';

const Login = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickShowPassword = () => setIsVisible(!isVisible);

  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <GridStyled container>
      <Hero item sx={{ display: { xs: 'none', sm: 'flex' } }} sm={6}>
        <ImageContainer>
          <Image src={heroImg} />
        </ImageContainer>

        <Text align="center" variant="h1">
          Payroll {'&'} Leave Management System
        </Text>

        <Footer container direction="column" justifyContent="center">
          <Grid item >
            <FooterText>© 2021, PT. Pro Sigmaka Mandiri</FooterText>
          </Grid>
          <Grid container item direction="row" spacing={1} justifyContent="center">
            <Grid item >
              <Link href="https://prosigmaka.com" color="inherit"><LanguageIcon /></Link>
            </Grid>
            <Grid item >
              <Link href="https://instagram.com/prosigmaka" color="inherit"><InstagramIcon /></Link>         
            </Grid>
          </Grid>
          
        </Footer>
      </Hero>

      <LoginContainer item xs={12} sm={6}>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>

        <SecondaryHeading align="center" variant="h2">
          Login to your Account
        </SecondaryHeading>

        <BoxStyled>
          <InputStyled fullWidth label="Email" variant="filled" />

          <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={isVisible ? 'text' : 'password'}
              // value={values.password}
              // onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {isVisible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Box textAlign="center">
            <ButtonStyled variant="contained" size="large">
              Login
            </ButtonStyled>
          </Box>
        </BoxStyled>
      </LoginContainer>
    </GridStyled>
  );
};

export default Login;
