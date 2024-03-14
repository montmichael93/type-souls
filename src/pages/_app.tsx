import { type AppType } from "next/dist/shared/lib/utils";
import { Toaster } from "react-hot-toast";

import "none/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
