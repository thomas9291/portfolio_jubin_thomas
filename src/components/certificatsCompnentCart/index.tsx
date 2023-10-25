import React from "react";
import Image from "next/image";
import { certificats } from "../../../project.model";

export const CertificatsComponentCart: React.FC<certificats> = (
  props: certificats
) => {
  const imageStyle: any = {
    border: "3px solid black",
    borderRadius: "1rem",
    margin: "1rem",
  };
  return (
    <>
      <Image
        style={imageStyle}
        src={props.imagePath}
        height={450}
        width={450}
        alt="certificats from author"
      />
    </>
  );
};
