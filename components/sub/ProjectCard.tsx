'use client';
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    const handleCanvasClick = (event: MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (rect && 
          event.clientX >= rect.left && 
          event.clientX <= rect.right && 
          event.clientY >= rect.top && 
          event.clientY <= rect.bottom) {
        
        const url = title === "Criticsworld" 
          ? "https://critics-world-frontend.vercel.app/signin"
          : "https://fundoo-react.vercel.app/";
        
        window.open(url, '_blank');
      }
    };

    document.addEventListener('click', handleCanvasClick);

    return () => {
      document.removeEventListener('click', handleCanvasClick);
    };
  }, [title]);

  return (
    <div 
      ref={cardRef}
      className="relative w-full overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative w-full h-48">
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
        <p className="mt-1 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;