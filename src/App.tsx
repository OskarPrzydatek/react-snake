import React from "react";
import { globalStyle } from "./styles/globalStyle";

export default function App(): React.ReactElement {
  React.useEffect(() => {
    globalStyle();
  }, []);

  return <div>App</div>;
}
