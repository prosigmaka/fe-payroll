import Container from '@mui/material/Container';
import MuiGrid from '@mui/material/Grid';
//import MuiBox from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
//Icon
import BalanceIcon from '@mui/icons-material/Balance';
import SakitIcon from '@mui/icons-material/Sick';
import IzinIcon from '@mui/icons-material/Mail';
import CutiIcon from '@mui/icons-material/HomeRepairService';

import LeaveHistoryList from './LeaveHistoryList';

import { styled } from '@mui/material/styles';

const smallerMixin = (theme) => ({
  [theme.breakpoints.up('xs')]: {
    marginTop: '2rem',
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '2rem',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  // width: '15rem',
  // lineHeight: '60px',
  position: 'relative',
  padding: '1rem 1rem 1rem 7rem',
  textAlign: 'left',
  ...smallerMixin(theme),
}));

const Grid = styled(MuiGrid, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({}));

const Box = styled(Paper)(({ theme, open }) => ({
  position: 'absolute',
  width: '5rem',
  height: '5rem',
  top: '-2rem',
  left: '1rem',
  borderRadius: '1rem',
}));

const IconContainer = styled("div")(({ theme }) => ({
    color: theme.palette.common.neutral_white
}));

const Value = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.neutral_gray_medium,
    fontSize: "3rem"
}));

const IconSize = {
  fontSize: "2rem"
}

const UserSummary = (props) => {
  return (
    <Container>
      <Grid container spacing={2} sx={{marginBottom: '2rem'}}>
        <Grid item sm={6} md={6} xs={12} lg={3}>
          <Item elevation={6}>
            <Box sx={{ backgroundImage: 'linear-gradient(to bottom right, #63BB69,#4DA349)' }} elevation={6}>
              <Grid container justifyContent="center" alignItems="center" height="100%" width="100%">
                <Grid item>
                  <IconContainer variant="h4" >
                    <BalanceIcon sx={IconSize}/>
                  </IconContainer>
                </Grid>
              </Grid>
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item textAlign="right">
                <Typography variant="h4">Balance Cuti</Typography>
                <Value variant="h4">0</Value>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item sm={6} md={6} xs={12} lg={3}>
          <Item elevation={6}>
            <Box sx={{ backgroundImage: 'linear-gradient(to bottom right, #57C1D6,#4EAEC2)' }} elevation={6}>
              <Grid container justifyContent="center" alignItems="center" height="100%" width="100%">
                <Grid item>
                  <IconContainer variant="h4" >
                    <CutiIcon sx={IconSize}/>
                  </IconContainer>
                </Grid>
              </Grid>
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item textAlign="right">
                <Typography variant="h4">Total Cuti</Typography>
                <Value variant="h4">0</Value>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item sm={6} md={6} xs={12} lg={3}>
          <Item elevation={6}>
            <Box sx={{ backgroundImage: 'linear-gradient(to bottom right, #A79AB2,#9d7cb8)' }} elevation={6}>
              <Grid container justifyContent="center" alignItems="center" height="100%" width="100%">
                <Grid item>
                  <IconContainer variant="h4" >
                    <IzinIcon sx={IconSize}/>
                  </IconContainer>
                </Grid>
              </Grid>
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item textAlign="right">
                <Typography variant="h4">Total Izin</Typography>
                <Value variant="h4">0</Value>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item sm={6} md={6} xs={12} lg={3}>
          <Item elevation={6}>
            <Box sx={{ backgroundImage: 'linear-gradient(to bottom right, #F2A439,#F08C36)' }} elevation={6}>
              <Grid container justifyContent="center" alignItems="center" height="100%" width="100%">
                <Grid item>
                  <IconContainer variant="h4" >
                    <SakitIcon sx={IconSize}/>
                  </IconContainer>
                </Grid>
              </Grid>
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item textAlign="right">
                <Typography variant="h4">Total Izin Sakit</Typography>
                <Value variant="h4">0</Value>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>

      <LeaveHistoryList/>
    </Container>
  );
};

export default UserSummary;
