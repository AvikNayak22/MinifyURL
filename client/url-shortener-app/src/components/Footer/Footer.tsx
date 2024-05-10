import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-[#051113] text-white text-base text-center py-5">
      Copyright &#169; MinifyURL | AvikNayak22
    </div>
  );
};

export default Footer;
