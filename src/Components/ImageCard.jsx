import { FaDownload } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { LuPartyPopper } from "react-icons/lu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import low from "../assets/lowPics.jpg";

const ImageCard = ({
  tags,
  user,
  views,
  downloads,
  webformatURL,
  likes,
  pageURL,
}) => {
  const tag = tags.split([","]);

  return (
    <>
      <div className='max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl'>
        <div className='hover:scale-95 duration-300 ease-out w-6/5 hover:rounded rounded'>
          <a href={pageURL} title='visit image info'>
            <LazyLoadImage
              rel='noopener noreferrer'
              src={webformatURL}
              effect='blur'
              width='100%'
              placeholderSrc={low}
              className='w-full max-h-[250px] object-contain'
            />
          </a>
        </div>
        <div className='px-6 py-4'>
          <div className='font-bold text-purple-500 text-xl mb-2'>
            Photo by "{user}"
          </div>
          <ul className='flex flex-wrap'>
            <span className='flex items-center mr-5 gap-2 text-green-600 font-medium'>
              <LuPartyPopper />
              {views}
            </span>
            <span className='flex items-center mr-5 gap-2 text-yellow-600 font-medium'>
              <FaDownload /> {downloads}
            </span>
            <span className='flex items-center gap-2 text-pink-600 font-medium'>
              <FcLike /> {likes}
            </span>
          </ul>
        </div>
        <div className='px-6 pb-4 flex flex-wrap gap-2'>
          {tag.map((ele, index) => (
            <span
              key={index}
              className='inline-bold truncate bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-600'>
              #{ele}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageCard;
