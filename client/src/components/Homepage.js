import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DeviceInfo from './DeviceInfo';
import OnlineCount from './OnlineCount';
import { makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import OfflineCount from './OfflineCount';
import TotalCount from './TotalCount';
import ClickableTable from './ClickableTable';
const useStyles1 = makeStyles((theme) => ({
  box: {
    height: '130px',
    width: '100%',
    
  },
  mainBox: {
    marginTop: 5
  }
}));
export default function Homepage() {
    const classes = useStyles();
    const c = useStyles1();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return(
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={6} >
          <Grid item  xs={2} >
          <Box my={4} r ={5}>
              <Paper className={c.box} elevation={10}>
              <TotalCount />     
              </Paper>
              </Box>
          </Grid>
          <Grid item  xs={2} >
          <Box my={4}>
              <Paper className={c.box} elevation={10}>
              <OnlineCount />     
              </Paper>
              </Box>
          </Grid>
          <Grid item  xs={2} >
          <Box my={4}>
              <Paper className={c.box}elevation={10}>
              <OfflineCount />     
              </Paper>
              </Box>
          </Grid>
      </Grid>
          <Grid container spacing={3}>
        
            <Grid item xs={12} md={8} lg={9}>
                <DeviceInfo />
            </Grid>
            
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                   
              </Paper>
            </Grid>
          </Grid>
        </Container>
    )
}