import React, { useContext, useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

<Navbar fixed="bottom" />

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#0991FF',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 48,
    padding: 0,
    marginTop: "60px",
    color: 'white',
    paddingTop: "8px"
  },
  title: {
    fontSize: "20pt",
    fontWeight: "bold",
    fontStyle: "italic",
  }

}));

export default function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation position="sticky" className={classes.root}>
      <Grid justify="center" alignItems="center" container>
        <Grid item>
          <Typography className={classes.title}>Kick-Tout 2020 <CopyrightIcon /></Typography>
        </Grid>
      </Grid>
    </BottomNavigation>
  );
}