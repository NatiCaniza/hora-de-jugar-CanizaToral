import './Loading.css'
import { SpinnerRoundFilled } from 'spinners-react';

//Spinner que se muestra mientras se carga la página
export default function Loading(){
    return (
        <div  className='loading'>
            <SpinnerRoundFilled size={90} thickness={180} speed={110} color="rgba(6, 214, 160, 1)" />
        </div>
    )
}

