import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {Videos} from "./";

import {fetchFromAPI} from "../utils/fetchDataFromAPI";

const SearchFeed = () => {
  const {searchTerm} = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      console.log(data);
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        // className='copyright'
        variant='h4'
        fontWeight='bold'
        mb={2}
        sx={{
          color: "#fff",
        }}
      >
        Search Results for: <span style={{color: "#F31503"}}>{searchTerm}</span>{" "}
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
