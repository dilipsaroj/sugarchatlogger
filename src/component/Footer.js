import React, { Component } from 'react';
import { withStyles, Avatar, Button, CssBaseline, FormControlLabel, Checkbox, Paper, Box, Grid, 
    Typography, TextField, AppBar, Toolbar, ButtonBase } from '@material-ui/core';

export class Footer extends Component {
    render() {
        return (
            <Grid xs={12} container component="main" >
            <Grid xs={12} className="footer_content">
                    <p className="foot_p">&copy; Right Reserve for everyone</p>
            </Grid>
        </Grid>
        )
    }
}

export default Footer
