import React, { Component } from 'react';
import { withStyles, Avatar, Button, CssBaseline, FormControlLabel, Checkbox, Paper, Box, Grid, 
    Typography, TextField, AppBar, Toolbar, ButtonBase } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import EmojiEmotionsTwoToneIcon from '@material-ui/icons/EmojiEmotionsTwoTone';

export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            emoji:'',
            viewPanel:false,
            liked:"",
            cardData:[
                {name:"Jeet Khandewal",des:"This cars se best car",toggle:false,likeCount:0,emoCount:0},
                {name:"Darshan K",des:"My dog is best",toggle:false,likeCount:0,emoCount:0},
                {name:"Dilip K",des:"Rider Provider",toggle:false,likeCount:0,emoCount:0},
                {name:"Random User",des:"This cars se best car",toggle:false,likeCount:0,emoCount:0}
        ]}
      }


      handleLike = (Index)=>{
        let count = 0
        let UpdatedCardData = this.state.cardData;

        UpdatedCardData.map((data, index)=>{
            if (Index == count)
            {
                    data.likeCount =  data.likeCount + 1  ; 
            }
            count = count + 1;
        });

        this.setState({
            cardData : UpdatedCardData,
        });
        }

      emoHandle = (Index) =>{
          console.log("clicked")
        let count = 0
        let UpdatedCardData = this.state.cardData;

        UpdatedCardData.map((data, index)=>{
            if (Index == count)
            {
                    data.emoCount =  data.emoCount + 1  ; 
            }
            count = count + 1;
        });

        this.setState({
            cardData : UpdatedCardData,
        });
      }
 
     handleComment = (Index)=>{
        let count = 0
        let UpdatedCardData = this.state.cardData;

        UpdatedCardData.map((data, index)=>{
            if (Index == count)
            {
                if (data.toggle)
                {
                    data.toggle = false;
                }
                else
                {
                    data.toggle = true;
                }
            }
            count = count + 1;
        });

        this.setState({
            cardData : UpdatedCardData
        }, ()=>{console.log(this.state)});

      }
    submitHandle = (e,index) =>{
            e.preventDefault();
            console.log("Data Submitted")
    }
    render() {
   
        return (
            <Grid container component="main" >

                <Grid container className="bg_img" >
                <Grid xs={12} container className=" content_gap" flex-direction="row" >
                {this.state.cardData.map((data, index)=>{
                    return(
                        <Card key={index} item lg={3} md={3} sm={4} xs={12} variant="outlined" className="card_common_pin " >
                            <Grid item xs={12} className="table_mar">
                                <h6 className="h6_style">{data.name}</h6>
                                    <Grid xs={12} className="branch_style" >
                                        <Grid className="chatImage"></Grid>
                                    </Grid>
                                <h6 className="des_style">{data.des}</h6>   
                                <Grid container xs={12} className="branch_style" style={{position:'relative'}}>
                                    <Grid item lg={6} md={6} sm={6} xs={6} flex-direction="row" >
                                        <ThumbUpAltIcon  onClick={()=>this.handleLike(index)}/>
                                        <EmojiEmotionsIcon onClick={()=>this.emoHandle(index)}/>
                                        <CommentIcon onClick={()=>this.handleComment(index)}/>
                                   </Grid>
                                   <label className="counter_style">{data.likeCount}</label>
                                   <label className="emo_style">{data.emoCount}</label>
                                   {data.toggle ? 
                                       <Grid container lg={12} md={12} sm={12} xs={12} flex-direction="row">
                                       <Grid item lg={9} md={9} sm={9} xs={12}>
                                           <TextField style={{ marginTop: '0' }}
                                                    type="email" variant="outlined" margin="normal" 
                                                    required fullWidth id="userName"
                                                    name="userName" autoComplete="off"
                                           />
                                        </Grid>   
                                        <Grid item lg={3} md={3} sm={3} xs={6} >
                                        <Button
                                                style={{ width: '40%' }}
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className="newStyle_btn "
                                                onClick={(e) => this.submitHandle(e,index)}
                                            >
                                                submit
                                            </Button>
                                        </Grid> 
                                       </Grid>
                                   : null}
                                </Grid>
                            </Grid>    
                        </Card>
                        )
                    })
                }
                </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Main
