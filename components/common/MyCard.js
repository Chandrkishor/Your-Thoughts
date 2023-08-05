"use client";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Image from "next/image";
import profilePic from "../../app/assets/profilePic.png";
import { Box } from "@mui/material";

export default function MYCard({ cardData }) {
  return (
    <Card sx={{ minWidth: "50vh", maxWidth: "90vw", p: 1 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <Image
              src={profilePic}
              alt="Picture of the user"
              width={50}
              height={50}
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={cardData?.title ?? "Chandrakishor Tiwari"}
        subheader={cardData?.subheader ?? "July 08, 2023"}
      />
      {/* {cardData?.img && (
        <CardMedia
          component="img"
          height="194"
          image={cardData?.img ?? ""}
          alt="Paella dish"
          // width="
        />
      )} */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {cardData?.description ?? "post description here."}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Box>
            <IconButton aria-label="add to favorites">
              <ThumbUpIcon />
            </IconButton>
            <span>{cardData?.likes ?? 0}</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}>
            <IconButton aria-label="add to favorites">
              <ThumbDownIcon />
            </IconButton>
            <span>{cardData?.disLike ?? 0}</span>
          </Box>
        </Box>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
