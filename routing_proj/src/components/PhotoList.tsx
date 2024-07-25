import { Fragment } from "react/jsx-runtime"

// without {} we import hte default
import usePhotoData from "../services/photoService"
// with {} we import anything else that has been exported
import { usePhotoDataId } from "../services/photoService" // not used


const PhotoList = () => {
    // we can use our custom hook (let the service manage the stateful values)
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