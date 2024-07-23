import { useEffect, useState } from "react"
import Photo from "../types/photo"

const PhotoComponent = () => {
    const [photos, setPhotos] = useState([]) // we will use .map so need an array
    const [maxWidth, setMaxWidth] = useState(1)
    const [albumPhotos, setAlbumPhotos] = useState([])
    const [withItalic, setwithItalic] = useState(false)
    const changeWhichPhotos = (num: number) => {
        setAlbumPhotos(photos.filter((photo: Photo) =>
            photo.albumId === num
        ))
    }
    const changeItalic = ()=>{
        setwithItalic(!withItalic) // toggle between false and true
    }
    const changeMaxWidth = (e: any) => { // improve this <<<<<<<<<<<<<<<<<<<<<<
        let n = Number(e.target.value)
        // console.log(n, typeof(n))
        changeWhichPhotos(n)
        setMaxWidth(n)
    }
    useEffect( // only useEffect for external stuff
        () => {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then((data) => {
                    setPhotos(data)
                    setAlbumPhotos(data) // initially no filtering
                })
// code that runs once only, the first time that a component is mounted.
// The second parameter of the useEffect hook can either be an empty array –
//this means run once only, or it can contain a list of stateful variables. If any of
//the variables in this list changes, the code block will re-run
        }, [] // [] will only refresh when render changes (i.e. component is mounted)
    )
    if (!photos) {
        return (<h4>loading photos...</h4>)
    }
    return (
        <>
            <button onClick={changeItalic}>{withItalic?<>On</>:<>Off</>}</button>
            <label>
                Show photos for album {maxWidth}
                <input value={maxWidth} onChange={changeMaxWidth} type="range" min={1} max={100} />
            </label>

            {/* {Photos.map((Photo: any) => { // remember, if we use {} we MUST say 'return' */}
            {albumPhotos.map((photo: any) => {
                // JSX elements directly inside a map() call always need keys
                return (
                    <section key={Number(photo.id)}>
                        <h5>ID: {photo.id} Album:{photo.albumId} 
                            {withItalic? 
                                <> Title: <i>{photo.title}</i></>
                                : 
                                <> Title: {photo.title}</> 
                            }
                            </h5>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </section>
                )
            })}
        </>
    )
}
export default PhotoComponent