export default function DesignBaseButton() {
  return (
    <div className="flex flex-col gap-8">
      <div className="font-primary text-6xl font-bold text-orange5">Button</div>
      <div className="flex flex-wrap gap-6 items-center">
        <div className="font-primary text-lg font-semibold text-grey px-6 py-2 rounded-3xl cursor-pointer transition-all border-2 border-orange8 bg-orange8 hover:bg-orange5 hover:border-orange5">
          Primary
        </div>
        <div className="font-primary text-lg font-semibold text-orange8 px-6 py-2 rounded-3xl cursor-pointer transition-all border-2 border-orange8 hover:bg-orange8 hover:text-white">
          Secondary
        </div>
        <div className="font-primary text-lg font-semibold text-dark cursor-pointer transition-all hover:text-orange8">
          Tertiary
        </div>
        <div className="font-primary text-lg font-semibold text-white px-6 py-2 rounded-3xl cursor-not-allowed transition-all border-2 border-gray-300 bg-gray-300">
          Disabled
        </div>
      </div>
    </div>
  );
}
