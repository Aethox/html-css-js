//hooks
//useState
import { Children, useEffect, useState } from "react"
import axios from "axios"

const MainTitle = (props) => {
    
    const [numero, setNumber] = useState(0)
    const [userList, setUserList] = useState([
        {name : 'Rodrigo', age: 30},
        {name : 'Francisco', age: 24}
    ])

    const [pokemonAbilities, setPokemonAbilities] = useState([])
    // primera vez que se monta el componente o cuando cambia el estado
    //Cargar cosas cuando se rendericen los componentes
    /* useEffect(() => {
      console.log('Se renderiza el componente')

      return () => {
        //Cancelar procesos en marcha
        console.log('Se desmont el componente')
      }
    }, [numero])

     */

    useEffect(() => {
      getPokemonAbility()
    }, [])
    

    const addUser = () => {
        setUserList([...userList, {name: 'Sofia', age: 18}])
    }


    const incrementNumber = () => {
        setNumber(numero + 1)
    }
    

     const getPokemonAbility = async() => {
        const pikachu = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
        setPokemonAbilities(pikachu.data.abilities)


    }

    return(
        <>
            <h1>{props.text}</h1>
            <h2>{numero}</h2>
            <div>
                {
                    numero > 10
                    ? <p>Es mayor a 10</p>
                    : <p>En menor a 10</p>
                }
            </div>
            <button onClick={incrementNumber}>Press me</button>
            

            <ul>
                {
                    Children.toArray(
                        pokemonAbilities.map((poke) => {
                            return <li>{poke.ability.name}</li>
                        })
                    )
                }   

            </ul>

            <div>
                <h1>User</h1>
                <ul>
                    {
                        Children.toArray(
                            userList.map((user) => {
                                return <li>
                                    <p>{user.name}</p>
                                </li>
                            })
                        )
                    }
                </ul>
            </div>

            <button on onClick={addUser}>Agregar</button>
            
            
        </>
    )
    
    
}

export default MainTitle
