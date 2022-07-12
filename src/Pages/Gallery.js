import GalleryShow from "../Components/Gallery/GalleryShow";
import GalleryTitle from "../Components/Gallery/GalleryTitle";


const Gallery = () => {
    return (
        <div className="gallery">
            <div className="container">
        <GalleryTitle/>
        <GalleryShow/>
            </div>
        </div>
      );
}
 
export default Gallery;