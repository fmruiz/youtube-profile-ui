/* eslint-disable import/no-anonymous-default-export */
import {
  GET_VIDEO_RESULTS,
  GET_VIDEO_RESULTS_ERROR,
  GET_VIDEO_RESULTS_SUCCESS,
} from "../types";

const initialState = {
  videoResults: [],
  loading: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
