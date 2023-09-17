import React from "react";
import {Typography, Card, CardContent, CardMedia, Link} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
  demoProfilePicture,
} from "../utils/constants";

let video_1 = {
  kind: "youtube#searchResult",
  id: {
    kind: "youtube#video",
    videoId: "XatXy6ZhKZw",
  },
  snippet: {
    publishedAt: "2017-09-17T00:00:00Z",
    channelId: "UCBVjMGOIkavEAhyqpxJ73Dw",
    title: "Maroon 5 - Cold ft. Future (Official Music Video)",
    description: "",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/XatXy6ZhKZw/default.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/XatXy6ZhKZw/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/XatXy6ZhKZw/hqdefault.jpg",
        width: 480,
        height: 360,
      },
    },
    channelTitle: "Maroon 5",
    liveBroadcastContent: "none",
    publishTime: "2017-09-17T00:00:00Z",
  },
};
const VideoCard = ({
  video: {
    id: {videoId},
    snippet,
  },
}) => {
  console.log("video", videoId, snippet);
  return (
    <Card
      sx={{
        width: {md: "320px", sm: "358px", xs: "100%"},
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          //   alt={snippet?.title}
          //   component='img'
          sx={{
            width: {
              xs: "100%",
              sm: "358px",
              md: "320px",
            },
            height: 180,
          }}
        />
      </Link>
      <CardContent sx={{backgroundColor: "#1e1e1e", height: "106px"}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant='subtitle1'
            fontWeight='bold'
            color='#FFF'
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant='subtitle2'
            fontWeight='bold'
            color='#gray'
          >
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}

            <CheckCircle sx={{fontSize: 12, color: "gray", ml: "5px"}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
