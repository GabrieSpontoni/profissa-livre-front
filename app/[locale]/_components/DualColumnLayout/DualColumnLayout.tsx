import React from "react";

interface DualColumnLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const DualColumnLayout: React.FC<DualColumnLayoutProps> = ({
  leftContent,
  rightContent,
}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl flex w-full">
        <div className="w-full lg:w-2/3 p-4 mr-4">{leftContent}</div>
        <div className="hidden lg:block lg:w-1/3">
          <div className="sticky top-10 flex flex-col gap-4 p-4 w-full">
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualColumnLayout;
