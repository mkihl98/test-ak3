import {resources} from '../assets/ressurser'
import { useParams } from "react-router-dom"

export default function ResourceInfo(){
    const {id} = useParams()
    return(
        <main>
            {resources.map(resource =>
            <article>
                <h2>{resource.category}</h2>
            </article>
            )}
        </main>
    )
}