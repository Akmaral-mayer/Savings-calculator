import React from "react";
import Icon from "react-eva-icons";

export function EvaIcon({
  name,
  size = "large",
  fill = "currentColor",
  className,
  style,
  ...props
}) {
  const IconEl = <Icon name={name} size={size} fill={fill} {...props} />;
  return className || style ? (
    <i className={className} style={style}>
      {IconEl}
    </i>
  ) : (
    IconEl
  );
}
