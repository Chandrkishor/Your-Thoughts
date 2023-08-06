import { Grid } from "@mui/material";
import React from "react";
import MyHomePageCard from "../HomePageCard";

const myFeedArray = [
  {
    title: "How to Manipulate HTML and CSS Using JavaScript",
    subheader: "July 22, 2023",
    img: "https://images.unsplash.com/photo-1689363302902-2c58330d6494?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    likes: 10,
    disLike: 2,
  },
  {
    title: "How to Make a Delicious Paella Dish",
    subheader: "July 23, 2023",
    img: "https://images.unsplash.com/photo-1687462909401-d4fb622a1e89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    likes: 5,
    disLike: 1,
  },
  {
    title:
      "Exploring the Beautiful Mountain SceneryMountain Scenery Mountain  ",
    subheader: "July 24, 2023",
    img: "https://images.unsplash.com/photo-1635898004196-7d041668e6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    likes: 8,
    disLike: 0,
  },
  {
    title: "How to Manipulate HTML and CSS Using JavaScript",
    subheader: "July 22, 2023",
    // img: "https://images.unsplash.com/photo-1689363302902-2c58330d6494?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    likes: 10,
    disLike: 2,
  },
  {
    title: "How to Make a Delicious Paella Dish",
    subheader: "July 23, 2023",
    img: "https://images.unsplash.com/photo-1637068334885-d73f3076bd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1077&q=80",
    likes: 5,
    disLike: 1,
  },
  {
    title: "Exploring the Beautiful Mountain Scenery",
    subheader: "July 24, 2023",
    img: "https://images.unsplash.com/photo-1689768013635-80b4d4a83693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    likes: 8,
    disLike: 0,
  },
  {
    title: "How to Manipulate HTML and CSS Using JavaScript",
    subheader: "July 22, 2023",
    img: "https://images.unsplash.com/photo-1689363302902-2c58330d6494?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    likes: 10,
    disLike: 2,
  },
  {
    title: "How to Make a Delicious Paella Dish",
    subheader: "July 23, 2023",
    img: "https://images.unsplash.com/photo-1640702149643-d172d1463fe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    likes: 5,
    disLike: 1,
  },
  {
    title: "Exploring the Beautiful Mountain Scenery",
    subheader: "July 24, 2023",
    img: "https://images.unsplash.com/photo-1689768013635-80b4d4a83693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    likes: 8,
    disLike: 0,
  },
];

const MyFeed = () => {
  return (
    <Grid container spacing={2}>
      {myFeedArray?.map((post, index) => (
        <Grid item xs={12} sm={6} md={6} lg={4} key={`${post?.img + index}`}>
          <MyHomePageCard cardData={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyFeed;
