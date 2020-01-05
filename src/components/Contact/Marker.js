import React from 'react';
import './Marker.css';
import {UncontrolledTooltip} from 'reactstrap'

const Marker = (props) => {
    const { color } = props;

    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        id="UncontrolledTooltipExample"
      > 
      <span ></span>
      <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
        220 E University BLVD, Apt # 101
      </UncontrolledTooltip>
      </div>
    );
  };

  export default Marker;