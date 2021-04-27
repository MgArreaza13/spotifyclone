import { Grid, Slider } from "@material-ui/core";
import {
  PlayCircleOutline,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
} from "@material-ui/icons";
import React from "react";
import {
  FooterContainer,
  FooterLeft,
  FooterCenter,
  FooterRight,
  SongInfo,
  AlbungLogo
} from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <FooterLeft>
        <AlbungLogo src="https://img.discogs.com/bxiThI04gNLDMZbnDw5e7NLEBlI=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2240835-1291034542.jpeg.jpg" alt=""/>
        <SongInfo>
          <h4>Yeah</h4>
          <p>usher!</p>
        </SongInfo>
      </FooterLeft>
      <FooterCenter>
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline className="footer__icon" fontSize="large" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </FooterCenter>
      <FooterRight>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </FooterRight>
    </FooterContainer>
  );
}

export default Footer;
