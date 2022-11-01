import './Loading.css'
import { SpinnerRoundFilled } from 'spinners-react';

//Spinner que se muestra mientras se carga la página
export default function Loading(){
    return (
        <div  className='loading'>
            <SpinnerRoundFilled size={90} thickness={100} speed={100} color="rgba(94, 84, 142, 1)" />
        </div>
    )
}

