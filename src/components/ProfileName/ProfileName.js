import React, { useState } from "react";
import {
  Name,
  NumberOfSuscribers,
  ProfileContainer,
  Suscribe,
  Suscribed,
  SuscribersContainer,
} from "./styles";

export const ProfileName = () => {
  // suscribe state
  const [suscriber, isSuscriber] = useState(false);

  return (
    <ProfileContainer>
      <Name>Ibai</Name>
      <SuscribersContainer>
        {suscriber ? (
          <Suscribed onClick={() => isSuscriber(!suscriber)}>
            SUSCRIBED
          </Suscribed>
        ) : (
          <Suscribe onClick={() => isSuscriber(!suscriber)}>SUSCRIBE</Suscribe>
        )}
        <NumberOfSuscribers>6.37M Suscribers</NumberOfSuscribers>
      </SuscribersContainer>
    </ProfileContainer>
  );
};
