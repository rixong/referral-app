import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/style.css';
import { MdCheck, MdRadioButtonUnchecked} from 'react-icons/md';
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

const Milestone = (url, lowerThreshold, upperThreshold, referrals) => {
  const requiredReferrals = upperThreshold - lowerThreshold;
  const achievedReferrals = referrals - lowerThreshold;
  const percentage = (achievedReferrals / requiredReferrals) * 100;
  const text = ProgressBarText(upperThreshold, referrals, percentage)

  return (
    <div style={{paddingTop: "25px"}}>
      <div style={aspectRatio}>
        <div className="z-depth-4" style={{ ...colStyle, backgroundImage: `url("${url}")` }}>
          <div style={topRightCorner}>
            <CircularProgressbarWithChildren
              value={percentage}
              strokeWidth={10}
              styles={buildStyles({
                textColor: ACHIEVED_COLOR,
                pathColor: ACHIEVED_COLOR,
                textSize: "32px"
              })}
            >
              {text}
            </CircularProgressbarWithChildren>

          </div>
        </div>
      </div>
    </div>
  )

}

const Milestones = () => {
  return (
    <div>
      Milestones Component
    </div>
  )
}

export default Milestones;