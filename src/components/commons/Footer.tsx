import Image from "next/image";

export default function Footer() {
  return (
    <div className="pt-16 pb-8 px-x bg-dark">
      <h3 className="font-primary text-4xl font-bold text-white text-center">
        Truong Be
      </h3>
      <div className="flex justify-center items-center gap-8 my-8">
        <div>
          <Image
            src={"/assets/images/icon-mail.svg"}
            alt="mail"
            width={40}
            height={40}
          />
        </div>
        <div>
          <Image
            src={"/assets/images/icon-linkedin.svg"}
            alt="linkedin"
            width={40}
            height={40}
          />
        </div>
        <div>
          <Image
            src={"/assets/images/icon-cv.svg"}
            alt="cl"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="font-primary text-lg font-normal text-white opacity-40 text-center">
        © 2025 Truong Be. All Rights Reserved
      </div>
    </div>
  );
}
