import { useParams } from "react-router-dom"
const GisPreviews = () => {
    const p = useParams()
    console.log(p)
    return <h3>Gish profile </h3>
}

export default GisPreviews