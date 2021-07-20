import React from "react";
import PropTypes from "prop-types";

const Badge = ({ count, s }) => {
  const size = s ? s : "min";
  const px = s && s.toLowerCase() === "max" ? 2 : 1;
  return (
    <span
      className={`${size} fa-stack fa-2x has-badge`}
      data-count={count <= 10 ? count : "10+"}
    >
      <i className={`fa fa-shopping-cart fa-stack-${px}x`} />
    </span>
  );
};

Badge.propTypes = {
  count: PropTypes.number.isRequired,
  s: PropTypes.string
};

export default Badge;