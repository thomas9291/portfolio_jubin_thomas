import React from "react";
import { useRouter } from "next/router";
import { CertificateCartDetail } from "@/components/certificateCartDetail";
import { certificatsArray } from "../../../lib/certificatArray";

export default function DetailCertificat() {
  const router = useRouter();
  const { certificatId } = router.query;
  const certificateObj = certificatsArray.find(
    (obj) => obj.certificatId === certificatId
  );
  /* const regex: RegExp = /\n/;
  const htmlString = certificateObj?.description?.replace("<br/>", regex); */
  return (
    <div>
      <CertificateCartDetail
        title={certificateObj?.title}
        date={certificateObj?.date}
        description={certificateObj?.description}
        linkURL={certificateObj?.linkURL}
        imagePath={certificateObj?.imagePath}
      />
    </div>
  );
}
