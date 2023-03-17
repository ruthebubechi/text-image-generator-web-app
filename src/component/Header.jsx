import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = ({ setListImages, setIsLoading }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/openai/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: inputValue,
        }),
      });

      const jsonData = await response.json();
      setListImages(jsonData.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Container */}
      <div className="container mx-auto max-w-5xl px-2 py-6">
        {/* Logo */}
        <p className="block font-raleway text-xl font-bold">
          Text2<span className="text-primary">IMAGE</span>
        </p>

        {/* Tagline */}
        <div className="mt-14">
          <h2 className="mb-1 max-w-xs text-xl font-bold">
            Unleash the power of AI to create stunning images
          </h2>
          <p className="hidden font-light opacity-80 md:inline-block">
            Created with AI-powered image generation technology
          </p>

          {/* Form */}
          <form className="relative my-8 max-w-md" onSubmit={handleSubmit}>
            <input
              value={inputValue}
              onChange={handleInputChange}
              className="outline-no w-full rounded-sm bg-gray-50 py-4 pr-[4.5rem] indent-2 focus:ring-1 focus:ring-primary md:max-w-md"
              type="text"
              placeholder="Unleash the power of AI to create"
            />
            <button
              type="submit"
              className="absolute bottom-2.5 right-2.5 rounded-sm bg-primary px-2 py-2 text-sm text-white"
            >
              <ArrowLongRightIcon className="h-6 " />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Header;
