import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col">
      
      {/* Image Section */}
      <div className="relative w-full h-48"> {/* Adjusted image height */}
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Text Section */}
      <div className="p-4 flex-1 flex flex-col">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-1 text-gray-300">{description}</p> {/* Reduced gap by changing mt-2 to mt-1 */}
      </div>
    </div>
  );
};

export default ProjectCard;
