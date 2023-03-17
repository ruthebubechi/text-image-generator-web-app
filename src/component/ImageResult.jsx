import ImageCard from "./ImageCard";
import Skeleton from "./Skeleton";

const ImageResult = ({ listImages, isLoading }) => {
  return (
    <div className="container mx-auto max-w-5xl px-2 py-6">
      <div className="grid gap-4 md:grid-cols-2">
        {isLoading ? (
          <Skeleton item={2} />
        ) : (
          listImages.map((image, index) => (
            <ImageCard image={image.url} key={index} />
          ))
        )}
        <Skeleton item={2} />
      </div>
    </div>
  );
};

export default ImageResult;
