import {useEffect, useState} from "react";
import axios from "axios";

const Cat = () => {
    const [cats, setCats] = useState([])
    const [pick, setPick] = useState({})
    useEffect(() => {
        axios(`https://api.thecatapi.com/v1/breeds`)
            .then(res => setCats(res.data))
    })
    const select = (event) => {
        setPick(cats.find(el => event.target.value === el.id))
    }
    return (
        <div>
            <select onChange={select}>
                {
                    cats.map(cat =>
                        <option value={cat.id}>{cat.name}</option>
                    )
                }
            </select>
            {pick.id &&
                <div>
                <img src={pick.image.url} alt="" width={300}/>
                <h2>Breed: {pick.id}</h2>
                <p>Desc: {pick.description}</p>
            </div>
            }
        </div>
    )
}
export default Cat;