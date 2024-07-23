import { Fragment } from "react/jsx-runtime"
import usePhotoData from "../services/photoService"

const PhotoList = () => {
    // we can use our custom hook
    const photoData = usePhotoData()

    return (
        <>
            <ol>
                {photoData.map((photo) =>
                    <Fragment key={photo.id}>
                        <li>{photo.title}</li>
                    </Fragment>
                )}
            </ol>
        </>
    )
}

export default PhotoList