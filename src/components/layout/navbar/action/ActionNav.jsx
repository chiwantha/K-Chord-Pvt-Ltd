"use client";
import Button from "@/components/buttons/Button";
import ColorPallet from "@/constants/ColorPallet";

import { FaWhatsapp } from "react-icons/fa";

const ActionNav = () => {
  return (
    <div className="flex items-center gap-4">
      <Button
        title={
          <span className="flex items-center gap-2">
            <FaWhatsapp />
            WhatsApp
          </span>
        }
        bg={`bg-[#31D46A] text-[16px] hover:bg-green-500 ${ColorPallet.textLight}`}
        link={``}
      />
    </div>
  );
};

export default ActionNav;
