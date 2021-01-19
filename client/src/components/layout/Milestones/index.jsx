import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/style.css';
import { MdCheck} from 'react-icons/md';
import { ACHIEVED_COLOR, OPEN_COLOR, aspectRatio, colStyle, topRightCorner} from 'styles';

const milestoneList = [
  {
      imageLocation: "assets/1_kitten.jpg",
      lowerThreshold: 0,
      upperThreshold: 5
  },
  {
      imageLocation: "assets/2_kitten.jpg",
      lowerThreshold: 5,
      upperThreshold: 10
  },
  {
      imageLocation: "assets/3_kitten.jpg",
      lowerThreshold: 10,
      upperThreshold: 20
  }
];

const ProgressBarText = (upperThreshold, referrals, percent) => {
  const color = percent <= 0 ? OPEN_COLOR : ACHIEVED_COLOR;

  if(percent < 0){
    return (
      <span style={{color, fontSize: "12px"}}>
        {upperThreshold}
      </span>
    )
  } else if (percent <= 100){
    return (
      <span style={{color, fontSize: "12px"}}>
        {upperThreshold} <MdCheck style={{color}} />
      </span>
    )
  } else {
    return (
      <span style={{color, fontSize: "12px"}}>
        {referrals/upperThreshold}
      </span>
    )
  }
}

const Milestones = () => {
  return (
    <div>
      Milestones Component
    </div>
  )
}

export default Milestones;