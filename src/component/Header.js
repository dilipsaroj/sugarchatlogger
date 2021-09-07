import React, { Component } from 'react';
import { withStyles, Avatar, Button, CssBaseline, FormControlLabel, Checkbox, Paper, Box, Grid, 
    Typography, TextField, AppBar, Toolbar, ButtonBase } from '@material-ui/core';


export class Header extends Component {

    
    render() {
        let time = new Date().toLocaleString();
        return (
            <Grid container flex-direction="row" justify="flex-start" alignItems="center" lg={12} md={12} sm={12} xs={12}
                    className="bottom_line"   >
                <Grid item lg={9} md={8} sm={7} xs={8} style={{ color: '#1c4f6b', paddingLeft: '10px' }}>
                    <h4 className="res_style" >Welcome user</h4>
                    <p style={{ fontSize: '12px' }}>time:{time}</p>
                </Grid>
            </Grid>

        )
    }
}

export default Header
