"use client";
import MyHomePageCard from "@/components/HomePageCard";
import { Grid } from "@mui/material";
const homepageArray = [
  {
    title: "How to Manipulate HTML and CSS Using JavaScript",
    subheader: "July 22, 2023", // Replace with the actual date
    img: "https://images.unsplash.com/photo-1689363302902-2c58330d6494?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", // Replace with the actual image URL
    likes: 10,
    disLike: 2,
  },
  {
    title: "How to Make a Delicious Paella Dish",
    subheader: "July 23, 2023", // Replace with the actual date
    img: "https://images.unsplash.com/photo-1687462909401-d4fb622a1e89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", // Replace with the actual image URL
    likes: 5,
    disLike: 1,
  },
  {
    title: "Exploring the Beautiful Mountain Scenery",
    subheader: "July 24, 2023", // Replace with the actual date
    img: "https://images.unsplash.com/photo-1689768013635-80b4d4a83693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80", // Replace with the actual image URL
    likes: 8,
    disLike: 0,
  },
  // Add more card data objects as needed
];

export default function Home() {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {homepageArray?.map((post) => (
        <Grid item xs={12} sm={6} md={3} lg={4} key={post?.img}>
          <MyHomePageCard cardData={post} />
        </Grid>
      ))}
    </Grid>
  );
}
