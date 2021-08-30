import React from "react";
import { MenuItem } from "../MenuItem/MenuItem";
import {
  SubscriptionsBody,
  SubscriptionsContainer,
} from "./styles";

export const Subscriptions = ({ photo, channelName }) => (
  <SubscriptionsContainer>
    <SubscriptionsBody>
      <MenuItem img={photo} text={channelName}/>
    </SubscriptionsBody>
  </SubscriptionsContainer>
);
