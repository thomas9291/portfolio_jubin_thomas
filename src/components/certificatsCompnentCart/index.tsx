import React from "react";
import Image from "next/image";

interface Props {
  imagePath: string;
  id: string;
}

export const CertificatsComponentCart = (props: Props) => {
  const imageStyle: any = {
    border: "3px solid black",
    borderRadius: "1rem",
    margin: "1rem",
  };
  return (
    <Image
      id={props.id}
      style={imageStyle}
      src={props.imagePath}
      height={450}
      width={450}
      alt="certificats from author"
    />
  );
};
