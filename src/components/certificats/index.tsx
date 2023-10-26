import React, { useState, useEffect } from "react";
import { CertificatsComponentCart } from "@/components/certificatsCompnentCart";
import { certificatsArray } from "../../../lib/certificatArray";
import { certificatDetail } from "../../../project.model";
import classes from "./certificats.module.css";
import Link from "next/link";
import Loading from "../loading";

export const Certificats: React.FC = () => {
  const [isArray, setIsArray] = useState(false);
  const [isCertificatsArray, setIsCertificatsArray] = useState([] as any);
  useEffect(() => {
    setIsCertificatsArray(certificatsArray);
    setIsArray(true);
  }, []);
  if (isArray) {
    return (
      <div className={classes.container}>
        {isCertificatsArray.map((obj: certificatDetail) => {
          return (
            <div key={obj.certificatId} className="m-2">
              <Link href={`/certificats/${obj.certificatId!}`}>
                <CertificatsComponentCart imagePath={obj.imagePath!} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <>
      <Loading />
    </>
  );
};
