import dynamic from "next/dynamic";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NoSSRWrapper = (props: any) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NoSSRWrapper), {
  ssr: false,
});
