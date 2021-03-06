// @flow

import React, { type Node } from "react";

type Props = {|
  children: Node,
  onDeselect?: () => void,
  onSelect?: () => void,
  margin?: string,
  padding?: string,
  selected?: boolean,
|};

function SDListItem(props: Props): Node {
  const {
    children,
    padding = "8px",
    margin,
    onDeselect,
    onSelect,
    selected,
  } = props;

  const classNames = ["sd-list-item"];
  if (selected) {
    classNames.push("sd-selected-list-item");
  }

  const style = {
    padding,
    margin,
  };

  return (
    <div
      className={classNames.join(" ")}
      onClick={() => {
        if (selected) {
          onDeselect && onDeselect();
        } else {
          onSelect && onSelect();
        }
      }}
      style={style}
    >
      {children}
    </div>
  );
}

export default SDListItem;
