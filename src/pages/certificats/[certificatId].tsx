import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CertificateCartDetail } from "@/components/certificatPageComponents/certificateCartDetail";
import { certificatsArray } from "../../../lib/certificatArray";
import { certificatDetail } from "../../../project.model";
import Loading from "@/components/loading";

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
        <Loading />
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
