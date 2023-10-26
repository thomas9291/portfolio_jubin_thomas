import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CertificateCartDetail } from "@/components/certificateCartDetail";
import { certificatsArray } from "../../../lib/certificatArray";
import { certificatDetail } from "../../../project.model";
import { ErrorComponent } from "@/components/errorComponent";

export default function DetailCertificat() {
  const router = useRouter();
  const [isArray, setIsArray] = useState(false);
  const [isCertificatsArray, setIsCertificatsArray] = useState([] as any);
  const { certificatId } = router.query;

  useEffect(() => {
    setIsCertificatsArray(certificatsArray as certificatDetail[]);
    setIsArray(true);
  }, []);

  const certificateObj = isCertificatsArray.find(
    (obj: certificatDetail) => obj.certificatId === certificatId
  );
  if (!isArray || !certificateObj) {
    return (
      <>
        <ErrorComponent />
      </>
    );
  }
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
