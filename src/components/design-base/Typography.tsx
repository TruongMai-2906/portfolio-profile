export default function DesignBaseTypography() {
  return (
    <div className="flex flex-col gap-8">
      <div className="font-primary text-6xl font-bold text-orange5">
        Typography
      </div>
      <div className="">
        <h1 className="font-primary text-6xl font-bold ">Heading 1 Text</h1>
        <h2 className="font-primary text-5xl font-bold">Heading 2 Text</h2>
        <h3 className="font-primary text-4xl font-bold">Heading 3 Text</h3>
        <h4 className="font-primary text-3xl font-bold">Heading 4 Text</h4>
        <h5 className="font-primary text-2xl font-bold">Heading 5 Text</h5>
        <h6 className="font-primary text-xl font-bold">Heading 6 Text</h6>
        <div className="font-primary text-xl font-normal">Body 1 Text</div>
        <div className="font-primary text-lg font-normal">Body 2 Text</div>
        <div className="font-primary text-base font-normal">Body 3 Text</div>
        <div className="font-primary text-sm font-normal">Body 4 Text</div>
        <div className="font-primary text-xs font-normal">Caption Text</div>
      </div>
    </div>
  );
}
