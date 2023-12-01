import Image from "next/image";
import React from "react";
import nextImg from "@/assets/next.png";

const AlbumPage = () => {
  return (
    <div>
      <h2>Image using link</h2>
      <Image
        src="https://cdn.sanity.io/images/3do82whm/next/4b1f008289a88f4438a1c983fb32cf1a636d9d0e-1000x667.png?w=720&h=480&fit=clip&auto=format"
        alt="Next js"
        width={500}
        height={500}
      />
      <h2>Import image from local</h2>
      <Image src={nextImg} alt="Next js" width={500} height={500} />
      <h2>using image tag</h2>
      <img
        src="https://cdn.sanity.io/images/3do82whm/next/4b1f008289a88f4438a1c983fb32cf1a636d9d0e-1000x667.png?w=720&h=480&fit=clip&auto=format"
        alt="Next js"
      />
    </div>
  );
};

export default AlbumPage;
