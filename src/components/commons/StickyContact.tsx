export default function StickyContact() {
  return (
    <div className="fixed bottom-5 right-7 z-50">
      <div className="flex flex-col justify-center items-center gap-6 my-8">
        <a
          className="sticky-contact-icon flex flex-col justify-center items-center border-2 border-orange5 w-14 h-14 rounded-full bg-white shadow-lg transition-all hover:bg-orange5"
          href="mailto:truongbe2906@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconMail className="w-8 h-8" />
        </a>
        <a
          className="sticky-contact-icon flex flex-col justify-center items-center border-2 border-orange5 w-14 h-14 rounded-full bg-white shadow-lg transition-all hover:bg-orange5"
          href="https://www.linkedin.com/in/truongbelammai/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconLinkedin className="w-8 h-8" />
        </a>
        <a
          className="sticky-contact-icon-cv flex flex-col justify-center items-center border-2 border-orange5 w-14 h-14 rounded-full bg-white shadow-lg transition-all hover:bg-orange5"
          href="/assets/files/Frontend Developer - Be Lam Mai Truong.pdf"
          download={true}
        >
          <IconCV className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}

const IconMail = (props: { className: string }) => {
  return (
    <svg
      width="1100"
      height="800"
      viewBox="0 0 1100 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g clipPath="url(#clip0_207_71)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M950 0C1032.85 0 1100 67.1575 1100 150V650C1100 732.845 1032.85 800 950 800H150C67.1575 800 0 732.845 0 650V150C0 67.1575 67.1575 0 150 0H950ZM912.645 100H187.359L519.02 361.835C537.185 376.18 562.815 376.18 580.985 361.835L912.645 100ZM100 158.44V650C100 677.615 122.386 700 150 700H950C977.615 700 1000 677.615 1000 650V158.441L642.945 440.325C588.45 483.35 511.55 483.35 457.055 440.325L100 158.44Z"
          fill="#ff7900"
        />
      </g>
      <defs>
        <clipPath id="clip0_207_71">
          <rect width="1100" height="800" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const IconLinkedin = (props: { className: string }) => {
  return (
    <svg
      width="800"
      height="800"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g clipPath="url(#clip0_208_77)">
        <path
          d="M205.916 251.666C235.601 251.666 259.666 227.601 259.666 197.916C259.666 168.231 235.601 144.166 205.916 144.166C176.231 144.166 152.166 168.231 152.166 197.916C152.166 227.601 176.231 251.666 205.916 251.666Z"
          fill="#FF7900"
        />
        <path
          d="M152.166 323.333C152.166 303.543 168.209 287.5 187.999 287.5H223.833C243.623 287.5 259.666 303.543 259.666 323.333V610C259.666 629.791 243.623 645.833 223.833 645.833H187.999C168.209 645.833 152.166 629.791 152.166 610V323.333Z"
          fill="#FF7900"
        />
        <path
          d="M367.167 645.833H403.001C422.791 645.833 438.834 629.791 438.834 610V448.75C438.834 395 546.334 359.167 546.334 430.833V610.014C546.334 629.805 562.377 645.833 582.167 645.833H618.001C637.791 645.833 653.834 629.791 653.834 610V395C653.834 323.333 600.084 287.5 528.417 287.5C456.751 287.5 438.834 341.25 438.834 341.25V323.333C438.834 303.543 422.791 287.5 403.001 287.5H367.167C347.377 287.5 331.334 303.543 331.334 323.333V610C331.334 629.791 347.377 645.833 367.167 645.833Z"
          fill="#FF7900"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M689.667 0.833984C749.039 0.833984 797.167 48.9635 797.167 108.334V681.667C797.167 741.039 749.039 789.167 689.667 789.167H116.334C56.9635 789.167 8.83398 741.039 8.83398 681.667V108.334C8.83398 48.9635 56.9635 0.833984 116.334 0.833984H689.667ZM689.667 72.5006C709.458 72.5006 725.501 88.5439 725.501 108.334V681.667C725.501 701.458 709.458 717.501 689.667 717.501H116.334C96.5439 717.501 80.5006 701.458 80.5006 681.667V108.334C80.5006 88.5439 96.5439 72.5006 116.334 72.5006H689.667Z"
          fill="#FF7900"
        />
      </g>
      <defs>
        <clipPath id="clip0_208_77">
          <rect width="800" height="800" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const IconCV = (props: { className: string }) => {
  return (
    <svg
      width="800"
      height="800"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g clipPath="url(#clip0_207_70)">
        <path
          d="M445.834 262.501L537.501 537.501L629.167 262.501M308.334 537.501C265.623 537.501 244.267 537.501 227.421 530.525C204.961 521.221 187.115 503.373 177.812 480.915C170.834 464.066 170.834 442.713 170.834 400.001C170.834 357.289 170.834 335.935 177.812 319.086C187.115 296.627 204.961 278.782 227.421 269.478C244.267 262.501 265.623 262.501 308.334 262.501M180.001 766.667H620.001C671.338 766.667 697.01 766.667 716.617 756.676C733.864 747.889 747.889 733.864 756.676 716.617C766.667 697.01 766.667 671.338 766.667 620.001V180.001C766.667 128.663 766.667 102.993 756.676 83.3849C747.889 66.1364 733.864 52.1133 716.617 43.3252C697.01 33.334 671.338 33.334 620.001 33.334H180.001C128.663 33.334 102.993 33.334 83.3849 43.3252C66.1364 52.1133 52.1133 66.1364 43.3252 83.3849C33.334 102.993 33.334 128.662 33.334 180.001V620.001C33.334 671.338 33.334 697.01 43.3252 716.617C52.1133 733.864 66.1364 747.889 83.3849 756.676C102.993 766.667 128.662 766.667 180.001 766.667Z"
          stroke="#ff7900"
          strokeWidth="66.6667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_207_70">
          <rect width="800" height="800" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
