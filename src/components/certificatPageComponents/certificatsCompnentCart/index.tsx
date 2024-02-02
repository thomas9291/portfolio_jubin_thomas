import React from "react";
import Image from "next/image";
import { certificats } from "../../../../project.model";

export const CertificatsComponentCart: React.FC<certificats> = (
  props: certificats
) => {
  const imageStyle: any = {
    border: "3px solid black",
    borderRadius: "1rem",
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <Image
        style={imageStyle}
        src={props.imagePath}
        height={500}
        width={500}
        alt="certificates from author"
        priority
      />
    </>
  );
};
