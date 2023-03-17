import { PhotoIcon } from "@heroicons/react/24/outline";

const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map(() => {
    <div className="w-full animate-pulse">
      <div className="flex h-80 w-full items-center justify-center rounded bg-gray-300">
        <PhotoIcon className="w-12" />
      </div>
    </div>;
  });
};

export default Skeleton;
