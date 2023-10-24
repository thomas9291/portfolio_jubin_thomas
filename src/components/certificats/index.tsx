import React from "react";
import { CertificatsComponentCart } from "@/components/certificatsCompnentCart";
import { certificatsArray } from "../../../lib/certificatArray";
export { certificatsArray } from "../../../lib/certificatArray";
import classes from "./certificats.module.css";
import Link from "next/link";

export const Certificats = () => {
  return (
    <div className={classes.container}>
      {certificatsArray.map((obj) => {
        return (
          <div key={obj.certificatId} className="m-2">
            <Link href={`/certificats/${obj.certificatId}`}>
              <CertificatsComponentCart
                imagePath={obj.imagePath}
                id={obj.certificatId}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
