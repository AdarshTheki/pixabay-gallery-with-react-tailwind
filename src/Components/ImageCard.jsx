import { FaDownload } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { LuPartyPopper } from "react-icons/lu";
import { useEffect, useState } from "react";

const ImageCard = ({ tags, user, views, downloads, webformatURL, likes, pageURL, previewURL, }) => {
  const tag = tags.split([","]);

  const [imgSrc, setImgSrc] = useState(previewURL || webformatURL);

  useEffect(() => {
    const img = new Image();
    img.src = webformatURL;
    img.onload = () => {
      setImgSrc(webformatURL);
    };
  }, [webformatURL]);

  return (
    <>
      <div className='max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl'>
        <a
          href={pageURL}
          target='_blank'
          rel='noopener noreferrer'
          title='visit image info'>
          <img
            src={imgSrc}
            alt={user}
            className='hover:scale-95 duration-500 ease-out w-full max-h-[230px] rounded-2xl object-contain'
          />
        </a>
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
          {tag.map((tag) => (
            <span
              key={tag}
              className='inline-bold truncate bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-600'>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageCard;
