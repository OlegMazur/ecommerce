import React from "react";
import { imgUrlWraper } from "../../../services/helpers/img-helpers";
interface IProp {
  url: string | undefined;
  deviceClass: any;
}
function Img({ url, deviceClass }: IProp) {
  const imgUrl = imgUrlWraper(url);
  return <img src={imgUrl} alt="productimg" className={deviceClass} />;
}

export default Img;
