import React from 'react';
import {Composition} from 'remotion';
import {YardMasterProRaisedBedShort} from './YardMasterProShort';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="YardMasterProRaisedBedShort"
        component={YardMasterProRaisedBedShort}
        durationInFrames={1800}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
