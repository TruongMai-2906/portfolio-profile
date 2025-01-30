interface HeaderPropsType {
  onHeaderClick: (text: string) => void;
}

export default function Header({ onHeaderClick }: HeaderPropsType) {
  return (
    <div className="w-full h-16 shadow fixed top-0 left-0 bg-white z-50">
      <div className="px-x py-4 flex gap-40 h-full">
        <div className="w-32 h-full bg-orange5"></div>
        <div className="flex gap-20">
          <div
            className="font-primary text-xl font-bold cursor-pointer"
            onClick={() => onHeaderClick("banner")}
          >
            Banner
          </div>
          <div
            className="font-primary text-xl font-bold cursor-pointer"
            onClick={() => onHeaderClick("project")}
          >
            Project
          </div>
          <div
            className="font-primary text-xl font-bold cursor-pointer"
            onClick={() => onHeaderClick("history")}
          >
            History
          </div>
          <div
            className="font-primary text-xl font-bold cursor-pointer"
            onClick={() => onHeaderClick("contactUs")}
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}
