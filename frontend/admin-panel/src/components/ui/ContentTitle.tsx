import React from "react";

interface ContentTitleProps {
  icon: React.ReactNode;
  title: string;
}

const ContentTitle: React.FC<ContentTitleProps> = ({ icon, title }) => {
  return (
    <div className="flex gap-2 justify-start my-6 items-center">
      {icon}
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
  );
};

export default ContentTitle;
