import {useEffect, useState} from "react";
import axios from "axios"
import Cat from "./Cat";
import Pokemon from "./Pokemon";

const App = () => {
    const [id, setId] = useState(1)
    const [people, setPeople] = useState([])
    const view = (e) => {
        setId(e.target.value)
    }
    useEffect(() => {
        axios(`https://swapi.dev/api/people/${id}`)
            .then(res => setPeople(res.data))
    }, [+id])
    const dec = () => {
        if (id < 2) {
            setId(83)
        } else {
            setId(id - 1)
        }
    }
    const inc = () => {
        if (id > 82) {
            setId(1)
        }else {
            setId(id + 1)
        }
    }
    return (
        <div className="App">
          <div className="container">
              {/*<button onClick={dec}>back</button>*/}
              {/*<input type="number" onChange={view} value={id}/>*/}
              {/*<button onClick={inc}>forward</button>*/}
              {/*<div>{people.name}</div>*/}
              <Cat/>
              <Pokemon/>
          </div>
        </div>

    );
}
export default App;
