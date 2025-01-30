import DesignBaseButton from "@/components/design-base/Button";
import DesignBaseColorPallete from "@/components/design-base/ColorPallete";
import DesignBaseDescription from "@/components/design-base/Description";
import DesignBaseInput from "@/components/design-base/Input";
import DesignBaseSlider from "@/components/design-base/Slider";
import DesignBaseTypography from "@/components/design-base/Typography";

export default function DesignBase() {
  return (
    <div className="px-6 py-6 lg:px-12">
      <div className="flex flex-col gap-16">
        <DesignBaseTypography />
        <DesignBaseColorPallete />
        <DesignBaseDescription />
        <DesignBaseSlider />
        <DesignBaseButton />
        <DesignBaseInput />
      </div>
    </div>
  );
}
