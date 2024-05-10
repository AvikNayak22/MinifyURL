import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const { updateReloadState } = props;
  const [fullUrl, setFullUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl: fullUrl,
      });
      setFullUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-2">
      <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
        <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50">
          <h2 className="text-white text-4xl text-center pb-4">MinifyURL</h2>
          <p className="text-white text-center pb-3 text-2xl font-extralight">
            paste the URL to be Shortened
          </p>

          <form onSubmit={() => handleSubmit}>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-slate-800">
                  paste here{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 pl-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Example: http://long-link.com/"
                  required
                  className="block w-full p-4 ps-36 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  value={fullUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFullUrl(e.target.value)
                  }
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus-ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Shorten URL
                </button>
              </div>
            </div>
          </form>
          <p className="text-white text-center pb-4 text-xl font-thin mt-4">
            MinifyURL is a free tool to shorten URLs and generate short links.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
