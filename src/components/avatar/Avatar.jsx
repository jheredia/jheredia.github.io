import React from "react";
import PropTypes from "prop-types";
import {
  AvatarUrl as defaultUrl,
  CircleFrame,
  SquareFrame,
  ThumbnailFrame,
  RoundedFrame
} from "constants/Constants";
import {} from "reactstrap";

export default function Avatar({
  alignment,
  altText,
  darkMode,
  frame,
  imageUrl
}) {
  return (
    <div>
      <img
        src={imageUrl}
        alt={altText}
        className={`img-fluid ${darkMode ? "dark" : ""} ${frame}`}
      />
    </div>
  );
}

Avatar.defaultProps = {
  alignment: "center",
  altText: "Avatar",
  darkMode: false,
  frame: RoundedFrame,
  imageUrl: defaultUrl
};

Avatar.propTypes = {
  altText: PropTypes.string,
  darkMode: PropTypes.bool,
  frame: PropTypes.oneOf([
    CircleFrame,
    RoundedFrame,
    SquareFrame,
    ThumbnailFrame
  ]),
  imageUrl: PropTypes.string.isRequired
};
