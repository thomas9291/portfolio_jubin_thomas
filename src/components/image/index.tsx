import { useEffect, useState } from "react";
import Image from "next/image";

const ImageProfile = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    // Appelez votre API endpoint pour récupérer l'image depuis S3
    fetch("/api/readS3Image")
      .then((response) => response.blob())
      .then((blob) => {
        const imageURL = URL.createObjectURL(blob);
        setImageSrc(imageURL);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Image src={imageSrc} alt="Image from S3" width={300} height={300} />
    </div>
  );
};

export default ImageProfile;
