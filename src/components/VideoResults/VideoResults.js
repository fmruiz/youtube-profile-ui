/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { VideoResult } from "../VideoResult/VideoResult";
import { ResultContainer } from "./styles";
// actions
import { getVideoResultsAction } from "../../redux/actions/videoResultsActions";

export const VideoResults = () => {
  // dispatch
  const dispatch = useDispatch();
  const getResults = () => dispatch(getVideoResultsAction());

  useEffect(() => {
    // get video results from API
    getResults();
  }, []);

  return (
    <ResultContainer>
      <VideoResult
        videoTitle={"Boris Brejcha - Dark Planet (Original Mix)"}
        viewsQuantity={"2.4M views"}
        publicationDate={"7 years ago"}
        textDescription={
          "This show was organized on the occasion of the Grand Palais's exhibition The Moon. This exhibition is the opportunity to study, ..."
        }
      />
    </ResultContainer>
  );
};
