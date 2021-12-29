import React from "react";

const ImageList = (props) => {
  
  const pictures = props.images.map((pics) => (
    <img src={pics.urls.regular}  alt="Cars Pics not available" />
  ));
  return <div>{pictures}</div>;
};

export default ImageList;
