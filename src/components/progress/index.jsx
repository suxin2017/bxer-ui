import React from "react";
import PropTypes from "prop-types";
import "./index.sass";

function Progress({ percent }) {
  return (
    <div className="bxer-progress">
      <div className="bxer-progress__bg">
        <div
          className="bxer-progress__box"
          style={{
            width: `${percent % 100}%`,
          }}
        ></div>
      </div>
      <span className="bxer-progress__text">{percent}%</span>
    </div>
  );
}

Progress.propTypes = {
  /**
   * 进度
   * 进度大于100时候取余数处理
   */
  percent: PropTypes.number,
};

export default Progress;
