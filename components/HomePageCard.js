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
import profilePic from "./profilePic.png";
import { Box } from "@mui/material";

export default function MyHomePageCard({ cardData }) {
  return (
    <Card sx={{ minWidth: "100%", p: 1 }}>
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
        title={cardData?.title ?? ""}
        subheader={cardData?.subheader ?? ""}
      />

      <CardMedia component="div">
        <Image
          src={cardData?.img}
          alt="Picture of the user"
          loading="lazy"
          width={200}
          height={200}
          sizes="100vw"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </CardMedia>
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
