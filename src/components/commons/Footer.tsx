import Image from "next/image";

export default function Footer() {
  return (
    <div className="pt-16 pb-8 px-x bg-dark">
      <h3 className="font-primary text-4xl font-bold text-white text-center">
        Truong Be
      </h3>
      <div className="flex justify-center items-center gap-8 my-8">
        <a
          href="mailto:truongbe2906@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src={"/assets/images/icon-mail.svg"}
            alt="mail"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/truongbelammai/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src={"/assets/images/icon-linkedin.svg"}
            alt="linkedin"
            width={40}
            height={40}
          />
        </a>
        <a
          href="/assets/files/Frontend Developer - Be Lam Mai Truong.pdf"
          download={true}
        >
          <Image
            src={"/assets/images/icon-cv.svg"}
            alt="cv"
            width={40}
            height={40}
          />
        </a>
      </div>
      <div className="font-primary text-lg font-normal text-white opacity-40 text-center">
        © 2025 Truong Be. All Rights Reserved
      </div>
    </div>
  );
}
