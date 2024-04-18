import { Typography, Box, TextField } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export default function Profile() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Card sx={{ maxWidth: 345, margin: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="src\assets\profile\Profile.jpg"
              alt="photo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Андреев Владимир Юрьевич
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, margin: "20px" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Компетенции:
              </Typography>
              <Typography>Python(Фреймворк: aiogram3, discord.py)</Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, margin: "20px" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                компетенции, которые бы хотел изучить:
              </Typography>
              <Typography>React, Nodejs, TYPESCRIPT</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
}
