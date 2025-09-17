import Image from "next/image";

const HeroImageWrapper = ({ image, className }) => {
  return (
    <div className={`absolute inset-0 h-full w-full ${className}`}>
      <Image
        src={image}
        alt="Hero Image"
        fill
        className="object-cover object-center -z-10"
        priority
      />
    </div>
  );
};

export default HeroImageWrapper;
