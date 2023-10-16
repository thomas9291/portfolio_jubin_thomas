import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./profileImage.module.css";

const ImageProfile = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    // Appelez votre API endpoint pour récupérer l'image depuis S3
    fetch("/api/readS3Image/profileImage")
      .then((response) => response.blob())
      .then((blob) => {
        const imageURL = URL.createObjectURL(blob);
        setImageSrc(imageURL);
      })
      .catch((error) => console.error(error));
  }, []);

  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid #fff",
  };

  return (
    <div className={classes.img}>
      <Image
        src={imageSrc}
        alt="Image from S3"
        width={250}
        height={250}
        priority
        style={imageStyle}
      />
    </div>
  );
};

export default ImageProfile;
