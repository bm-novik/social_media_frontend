import {usePic2S3Data} from "../hooks/useFeedAndExplore.data";
import {useEffect} from "react";

export const UploadToS3 = ({url, pic, onSuccess}) => {

    const {mutate} = usePic2S3Data(onSuccess, url)

    useEffect(() => {
        // const formData = new FormData()
        // Object.keys(fields).forEach(key => {
        //     formData.append(key, fields[key])
        // })
        mutate(pic)
    }, [])

};
