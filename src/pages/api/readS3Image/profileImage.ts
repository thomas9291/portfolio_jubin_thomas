import type { NextApiRequest, NextApiResponse } from "next";
import s3 from "../../../../lib/s3Auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bucketName = "portfolio-thomas-jubin";
  const objectKey = "foto-graduation3.jpg";

  const params = { Bucket: bucketName, Key: objectKey };

  s3.getObject(params, (err, data) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .end("Erreur lors de la récupération du fichier depuis S3.");
    } else {
      const imageBuffer = data.Body;
      res.setHeader("Content-Type", "image/jpeg");
      res.end(imageBuffer);
    }
  });
}
