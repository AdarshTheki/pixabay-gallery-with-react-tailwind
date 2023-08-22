import { useState, useEffect } from "react";
import ImageCard from "./Components/ImageCard";
import ImageSearch from "./Components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
        );
        const data = await res.json();
        console.log(data);
        setImages(data.hits);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [term]);

  return (
    <div className='container mx-auto'>
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className='text-5xl text-center mx-auto mt-32'>
          No Images Found...
        </h1>
      )}

      {isLoading ? (
        <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>
      ) : (
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
          {images.map((image) => (
            <ImageCard key={image.id} {...image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
