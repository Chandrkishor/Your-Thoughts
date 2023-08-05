import { useEffect, useState } from "react";
import Data from "./dummyPost.json";
import MYCard from "@/components/common/MyCard";
import { Grid } from "@mui/material";
export default function UserPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(Data?.myPosts);
  }, [Data]);

  return (
    <Grid container spacing={2}>
      {posts.map((post, index) => (
        <Grid item key={index} xs={12}>
          <MYCard cardData={post} />
        </Grid>
      ))}
    </Grid>
  );
}
