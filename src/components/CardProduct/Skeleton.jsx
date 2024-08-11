import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={589}
    viewBox="0 0 280 589"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="0" rx="5" ry="5" width="260" height="320" />
    <rect x="40" y="330" rx="5" ry="5" width="200" height="30" />
    <rect x="10" y="380" rx="5" ry="5" width="260" height="80" />
    <rect x="15" y="490" rx="5" ry="5" width="90" height="30" />
    <rect x="120" y="478" rx="24" ry="24" width="144" height="48" />
  </ContentLoader>
);

export default Skeleton;
