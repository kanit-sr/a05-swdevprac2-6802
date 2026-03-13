import Image from "next/image";
import InteractiveCard from "@/components/InteractiveCard";

interface CardProps {
  venueName?: string;
  imgSrc?: string;
}

export default function Card({
  venueName = "The Bloom Pavilion",
  imgSrc = "/img/bloom.jpg",
}: CardProps) {
  return (
    <InteractiveCard>
      <div className="relative w-full h-[200px]">
        <Image
          src={imgSrc}
          alt={venueName}
          fill
          className="object-cover"
          draggable={false}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{venueName}</h2>
      </div>
    </InteractiveCard>
  );
}
