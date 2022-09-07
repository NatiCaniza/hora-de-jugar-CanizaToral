const products = [
    {
        id: 1,
        name: 'El juego de la vida', 
        price: 4750, 
        image: '/img/lifeElJuegoDeLaVida.jpg',
        category:'tablero',
        stock: '10',
        initial: 0,
        description: 'En este juego, los jugadores pueden tomar emocionantes decisiones al recorrer el camino de la vida. Mueve el peón auto por el tablero desde la Partida al Retiro, y experimenta sorpresas inesperadas con respecto a tu familia, carrera, vacaciones soñadas y otros momentos claves de la vida.'
    },
    
    {
        id : 2,
        name: 'Monopoly Clásico', 
        price: 5390, 
        image: '/img/monopoly.jpg',
        category:'tablero',
        stock: '10',
        initial: 0,
        description: 'Monopoly es uno de los juegos de mesa comerciales más vendidos del mundo. Mesa de Monopoly en juego, con sus billetes, fichas, hoteles y tarjetas. Como el nombre sugiere, el objetivo del juego es formar un monopolio de oferta, poseyendo todas las propiedades inmuebles que aparecen en el juego.'
    },
    
    {
        id: 3,
        name: 'Preguntados', 
        price: 3450, 
        image: '/img/preguntadosRealidadAumentada.jpg',
        category:'tablero',
        stock: '10',
        initial: 0,
        description: 'Preguntados es un juego de preguntas y respuestas de seis categorías diferentes: geografía, historia, arte, ciencia, entretenimiento, deportes. Para ganar, tendrás que conseguir los personajes correspondientes a cada una de las categorías. Gira la rueda y el azar decidirá las preguntas que tendrás que responder.'
    },

    {
        id: 4,
        name: 'El Juego de la Oca', 
        price: 2500, 
        image: '/img/elJuegoDeLaOca.jpg',
        category:'tablero',
        stock: '10',
        initial: 0,
        description: 'El juego de la oca es un juego de mesa para dos o más jugadores. Cada jugador tira un dado y avanza su ficha (de acuerdo al número obtenido) por un tablero en forma de caracol con 63 casillas (o más), con dibujos.'
    },

    {
        id: 5,
        name: 'Carrera de Mente', 
        price: 4500, 
        image: '/img/carreraDeMente.jpg',
        category:'tablero',
        stock: '10',
        initial: 0,
        description: 'Todos conocemos Carrera de Mente, el juego de preguntas y respuestas más vendido de nuestro país. Lo juegan los chicos en hora libre, los adultos en reuniones y la familia en el asado del domingo. El juego surge en 1985 como un trabajo de edición conjunta de Ruibal y Ediciones De Mente.'
    },
    
    {
        id: 6,
        name: 'Cuatro en Línea', 
        price: 1890, 
        image: '/img/4enLinea.jpg',
        category:'tablero',
        stock: '10',
        initial: 0,
        description: 'El objetivo de este juego consiste en colocar cuatro fichas en una fila contínua vertical, horizontal o diagonalmente. Se juega sobre un tablero de 8x8 casillas que al empezar está vacío. Ambos jugadores sitúan sus fichas (una por movimiento) en el tablero.'
    },

    {
        id: 7,
        name: 'Letras 3D', 
        price: 1990, 
        image: '/img/letras3d.jpg',
        category:'tablero',
        stock: '10',
        initial: 0,
        description: 'El objetivo es armar palabras y sumar la mayor cantidad de puntos. Las palabras se forman: -colocando letras una al lado de otra en sentido horizontal o vertical. -colocando letras sobre las letras que ya se encuentran sobre el tablero para transformar la palabra existente en otra diferente.'
    },

    {
        id: 8,
        name: 'Batalla Naval', 
        price: 1650, 
        image: '/img/batallaNaval.jpg',
        category:'tablero',
        stock: '10',
        initial: 0,
        description: 'El juego consiste en hundir los barcos del enemigo antes de que éste acabe con los tuyos. Cuando aciertes a todos los cuadros de un barco enemigo, adivinando o especulando en qué parte del tablero se encuentra, lo habrás hundido.'
    },

    {
        id: 9,
        name: 'TEG Clásico', 
        price: 5450, 
        image: '/img/tegClasico.jpg',
        category:'tablero',
        stock: '10',
        initial: 0,
        description: 'Cada jugador tiene un objetivo secreto a cumplir, para lo cual deberá, mediante diferentes estrategias, ampliar sus dominios, reordenar sus fuerzas, realizar pactos, emprender ataques y defenderse de los adversarios.'
    },

    {
        id: 10,
        name: 'Código Secreto',
        price: 2500,
        image: '/img/codigo-secreto.jpg',
        category:'cartas',
        stock: '10',
        initial: 0,
        description:'En Código Secreto, el juego de mesa de espías te trasladas a una ciudad llena de espías y es todo un problema contactar con ellos. Los jefes de cada equipo conocen la identidad secreta de cada agente, pero sus compañeros solo los conocen por sus nombres en clave. ¿Cómo saber quién es quién?'
    },

    {
        id: 11,
        name: 'Ensalada de Puntos',
        price: 1500,
        image: '/img/ensalada-de-puntos-caja.png',
        category: 'cartas',
        stock: '10',
        initial: 0,
        description: 'Ensalada de puntos es un juego de cartas para toda la familia, rápido y divertido. Con más de 100 formas diferentes de puntuar, los jugadores deberán formar sus mejores ensaladas de verduras… ¡y de puntos! Consigue la mejor combinación de cartas de verduras y de puntuación de un mercado siempre cambiante.'
    },

    {
        id: 12,
        name: 'La Tripulación',
        price: 3000,
        image: '/img/la-tripulacion-caja.jpg',
        category: 'cartas',
        stock: '10',
        initial: 0,
        description: 'La Tripulación es un juego en el que seremos astronautas que buscan afirmar la existencia de un misterioso noveno planeta en los confines de nuestro sistema solar. La Tripulación es es un juego de bazas muy particular en el que deberemos colaborar entre todos los jugadores para cumplir una serie de encargos.'
    },

    {
        id: 13,
        name: 'Taco Gato Cabra...' ,
        price: 2500,
        image: '/img/taco-gato-cabra.jpg',
        category: 'cartas',
        stock: '10',
        initial: 0,
        description: 'En Taco gato cabra queso pizza debes ser el más rápido. Cuando un jugador se descarte de una carta que coincida con la palabra que dice, coloca tu mano sobre el montón central, ¡el último en poner la mano se queda con todas las cartas del montón! Concéntrate y sé el más rápido en deshacerte de todas tus cartas.'
    },

    {
        id: 14,
        name: 'Uno',
        price: 1500,
        image: '/img/uno.jpg',
        category: 'cartas',
        stock: '10',
        initial: 0,
        description: 'UNO es un juego de cartas estadounidense desarrollado en 1971 por Merle Robbins en Reading, Ohio. El juego es un producto de Mattel desde 1992. Decir “UNO” cuando a un jugador le quede una sola carta, tiene que decir en voz alta “UNO”.'
    },

    {
        id: 15,
        name: 'Puzze Rainbow Bricks',
        price: 3000,
        image: '/img/puzzle-briks.jpg',
        category: 'puzzle',
        stock: '10',
        initial: 0,
        description: 'Sus 1000 piezas se combinan para dar forma a ladrillos en todos los colores del arcoíris LEGO®: desde el rojo brillante y el azul marino hasta el amarillo frío y el resto de los tonos intermedios.'
    },

    {
        id: 16,
        name: 'Puzzle León',
        price: 3000,
        image: '/img/puzzle-leon.jpg',
        category: 'puzzle',
        stock: '10',
        initial: 0,
        description: 'Sus 1000 piezas se combinan para dar una preciosa imagen de león a colores, excelente detalle de colores y tonos, cortados finamente y conectividad exacta y precisa entre todas las piezas'
    },

    {
        id: 17,
        name: 'Puzzle Marvel',
        price: 3000,
        image: '/img/puzzle-marvel.jpg',
        category: 'puzzle',
        stock: '10',
        initial: 0,
        description: 'Da rienda suelta a tu superhéroe interior: carga en el universo cinematográfico de Marvel con este increíble rompecabezas de 3000 piezas que cuenta con carteles de todo el MCU desde Iron Man hasta Endgame.'
    },

    {
        id: 18,
        name: 'Puzzle Mickey Mouse',
        price: 3000,
        image: '/img/puzzle-mickeyMouse.jpg',
        category: 'puzzle',
        stock: '10',
        initial: 0,
        description: '¡Diviertete armando este increíble rompecabezas de 1000 piezas! La magia de Disney trae para ti este rompecabezas de Mickey Mouse, uno de los personajes más entrañables. Sé una de las millones de personas que experimentan la magia de Disney con su personaje más querido.'
    },

    {
        id: 19,
        name: 'Puzzle Sistema Solar',
        price: 3000,
        image: '/img/puzzle-sistemaSolar.jpg',
        category: 'puzzle',
        stock: '10',
        initial: 0,
        description: 'Disfruta de un extraordinario efecto fosforescente sin necesidad de ningún tipo de luz especial. Simplemente, una vez finalizado el montaje del puzzle de 1000 piezas, acércalo por unos momentos a una fuente de luz (por ejemplo una lámpara). A continuación, apaga la luz y podrás disfrutar de este impresionante efecto.'
    },

    {
        id: 20,
        name: 'Puzzle Van Gogh',
        price: 3000,
        image: '/img/puzzle-vanGogh.jpg',
        category: 'puzzle',
        stock: '10',
        initial: 0,
        description: 'La noche estrellada es un oleo sobre lienzo del pintor posimpresionista neerlandes Vincent Van Gogh. Pintado en junio de 1889, representa la vista desde la ventana orientada al este de su habitación de asilo en Saint- Remy de Provence, justo antes del amanecer, con la adicion de un pueblo imaginario. 1000 piezas.'
    },

    {
        id: 21,
        name: 'Puzzle Venecia',
        price: 3000,
        image: '/img/puzzle-venecia.jpg',
        category: 'puzzle',
        stock: '10',
        initial: 0,
        description: 'Atardecer en venecia. Hermoso diseño para disfrutar con amigos o en familia de este gran desafió. Pone a prueba tu habilidad y a divertirse !! Este increible rompecabeza tiene 1000 piezas. Te animas a desafiarte? Prueba con este increible modelo!'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getItem = (id)=>{
    return new Promise((resolve)=>{
        const product = products.find(item=>item.id === parseInt(id));
        resolve(product)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(item=> item.category === categoryId))
        }, 2000)
    })
}