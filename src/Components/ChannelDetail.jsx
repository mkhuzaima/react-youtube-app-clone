import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";

import {Videos, ChannelCard} from "./";
import {fetchFromAPI} from "../utils/fetchDataFromAPI";

const ChannelDetail = (channel) => {
  const {id} = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  console.log(channelDetail, videos);
  console.log(id);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      console.log("data is : ", data);
      setChannelDetail(data?.items[0]);
    });
    fetchFromAPI(
      `search?channelId=${id}&part=snippet&type=video&oder=date`
    ).then((data) => {
      console.log("data2 is : ", data);
      setVideos(data?.items);
    });
  }, [id]);
  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            background: "linear-gradient(45deg, red, blue)",
            height: "300px",
          }}
        ></div>

        <ChannelCard
          marginTop='-110px'
          channelDetail={channelDetail}
        />
      </Box>

      <Box
        display='flex'
        p='2'
      >
        <Box sx={{mr: {sm: "100px"}}}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
