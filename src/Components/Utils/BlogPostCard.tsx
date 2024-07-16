import React from "react";

interface CardProps {
  imageUrl: string;
  tag: string;
  tagColor: string;
  title: string;
  description: string;

}

const BlogPostCard: React.FC<CardProps> = ({
  imageUrl,
  tag,
  tagColor,
  title,
  description,

}) => {
  return (
    <div className="container mx-auto p-6 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className="p-6">
          <span
            className={`${tagColor} text-white text-xs font-semibold uppercase rounded-full px-3 py-2`}
          >
            {tag}
          </span>
          <h4 className="mt-4 text-xl font-bold text-primary">{title}</h4>
          <p className="mt-2 text-gray-600 text-sm text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
