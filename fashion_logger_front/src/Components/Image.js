import React from "react";

const Image = props => {
  return (
    <div id={props.topicId}>
      <img
        height="200"
        src={props.image.url}
        alt={props.image.title}
        id={props.id}
      />
    </div>
  );
};

export default Image;
