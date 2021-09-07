import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link, history,Switch,NavLink } from 'react-router-dom';
import { withStyles, Avatar, Button, CssBaseline, FormControlLabel, Checkbox, Paper, Box, Grid, 
  Typography, TextField, AppBar, Toolbar, ButtonBase } from '@material-ui/core';
import Main from './Main'

export class Login extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  backHandle = (e)=>{
    alert('clicked')
    this.props.history.push('/Main')
  }
  render() {

    
    return (
      // <Router>
    <Grid container className="main_Style">
        <Grid item xs={false} lg={6} md={6} sm={0} className="login_img">
        </Grid>
        <Grid item  lg={6} md={6} sm={12} xs={12}  style={{ position: 'relative'}}>
          <div className="paper" >
          <Grid ><label className="common_label">user</label></Grid>
                  <Grid item xs={12}>

                    <TextField style={{ marginTop: '0' }}
                      type="email" variant="outlined" margin="normal" 
                     required fullWidth id="userName"
                      name="userName" autoComplete="off"
                    />
                  </Grid>
                  <Grid xs={6} style={{ textAlign: 'center' }} >
                      <Button
                        style={{ width: '60%' }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit"
                        onClick={(e) => this.backHandle(e)}
                      >
                        back
                      </Button>

                    </Grid>
          </div>
        </Grid>
    
    </Grid>
  

    )
  }
}

export default Login;
