import React from "react";

function HeaderIcon({ active, Icon }) {
  return (
    <div
      className="flex items-center cursor-pointer md:px-10 sm:h-14
    md:hover:bg-gray-200 rounded-xl md:hover:border-b-2
     md:hover:border-blue-500 group"
    >
      <Icon
        className={`h-5 text-center
                 group-hover:text-blue-500
                  sm:h-7 mx-auto
                  text-gray-500 ${active && "text-blue-500"}`}
      />
    </div>
  );
}

export default HeaderIcon;
