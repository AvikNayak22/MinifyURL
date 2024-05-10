import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-[#011A1C]">
      <div className="container p-2 mx-auto">
        <nav className="py-5">
          <div className="text-base text-white">MinifyURL</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
