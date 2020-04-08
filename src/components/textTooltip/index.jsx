import React, { Children } from "react";
import PropTypes from "prop-types";
import Popover from "../popover";
import "./index.sass";

function TextTooltip({ children, length }) {
  return (
    <Popover
      className="bxer-text-tooltipe__popover"
      placement={"up"}
      trigger={"hover"}
      content={children}
    >
      <div className="bxer-text-tooltipe" style={{ width: `${length + 1}em` }}>
        {children}
      </div>
    </Popover>
  );
}

TextTooltip.propTypes = {
  /**
   * 显示的文字
   */
  children: PropTypes.string,
  /**
   * 显示的文字长度
   */
  length: PropTypes.number,
};

export default TextTooltip;
