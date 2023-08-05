"use client";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Image from "next/image";
import profilePic from "../app/assets/profilePic.png";
import { Box, Skeleton } from "@mui/material";

export default function MyHomePageCard({ cardData }) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "600px",
        height: "400px",
        p: 1,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}>
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
        // sx={{
        //   overflow: "hidden",
        //   textOverflow: "ellipsis",
        //   whiteSpace: "nowrap",
        //   // lineHeight: "1.2",
        // }}
      />

      <CardMedia component="div">
        {cardData?.img ? (
          <Image
            src={cardData?.img}
            alt="Picture of the user"
            loading="lazy"
            width={150}
            height={150}
            sizes="100vw"
            style={{
              width: "100%",
              height: "230px",
              objectFit: "cover",
            }}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            animation="wave"
            style={{
              width: "100%",
              height: "230px",
            }}
          />
        )}
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
