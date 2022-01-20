import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import bg from './../../img/bg-login-hero.svg';


export const GridStyled = styled(Grid)(`
  min-height: 100vh;
`);

export const Hero = styled(Grid)(`
  background-image: url(${bg});
  position: relative;
  overflow:hidden; 
  padding: 2rem;
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100%;
`);

export const LoginContainer = styled(Grid)(
  ({ theme }) => `
  background-color: ${theme.palette.common.neutral_white_medium};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
);

export const Image = styled('img')`
  width: 50%;
  transition: 0.3s all ease-in-out;
`;

export const ImageContainer = styled('div')`
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  &:hover img {
    transform: scale(1.05);
  }
`;

export const LogoContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;
`;

export const Logo = styled('img')`
  width: 25%;
`;

export const Text = styled(Typography)(
  ({ theme }) =>
    ` 
  color: ${theme.palette.common.main};
  margin-top: 2rem;
  letter-spacing: .01rem;
  
`
);

export const SecondaryHeading = styled(Typography)(
  ({ theme }) =>
    ` color: ${theme.palette.common.neutral_gray_dark};
    margin-bottom: 2rem;
`
);

export const BoxStyled = styled(Box)(
  ({ theme }) =>
    `
width: 20rem; 
`
);

export const InputStyled = styled(TextField)(
  ({ theme }) =>
    `
display: block;
margin-bottom: 1rem;
`
);

export const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginTop: '2rem',
  color: theme.palette.common.main,
  fontWeight: 600,
  letterSpacing: '0.1rem',
  width: '8rem',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.neutral_white,
  },
}));

export const Footer = styled(Grid)(`
margin-top: auto;
text-align: center;
`);

export const SocialBox = styled('div')(`
display: flex;
flex-direction: row;
gap: 1rem;
`)
export const FooterText = styled('span')(`
font-size: .9rem;
font-weight: 600;
`);