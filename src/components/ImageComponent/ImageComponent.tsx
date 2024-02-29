
import "./ImageComponent.css";

type ImageProps = {
  src: string;
  alt: string;
};
const ImageComponent = ({ src, alt }: ImageProps) => {
  return (
     <img
       src={`${src}`}
      alt={`${alt}`}
      className="product__img"
     loading="lazy"
     />
    // <LazyLoadImage src={`${src}`} alt={`${alt}`} className="product__img" effect="blur" placeholderSrc={`${src}`}/>
  );
};

export default ImageComponent;
