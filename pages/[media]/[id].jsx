import {useRouter} from 'next/router'
import MediaDetails from '../../components/MediaDetails'


export default function Movie() {
    const Router = useRouter()
    const { id, media } = Router.query


    if (id)
    return (
        <MediaDetails type={media} id={id}/> 
    )

    else return ""
}
