const products = [
    {
        id: '1',
        name: 'El juego de la vida', 
        price: 4750, 
        image: '/img/lifeElJuegoDeLaVida.jpg',
        category:'....',
        stock: '10',
        description: '....'
    },
    
    {
        id : '2',
        name: 'Monopoly Clásico', 
        price: 5390, 
        image: '/img/monopoly.jpg',
        category:'....',
        stock: '10',
        description: '....'
    },
    
    {
        id:'3',
        name: 'Preguntados', 
        price: 3450, 
        image: '/img/preguntadosRealidadAumentada.jpg',
        category:'....',
        stock: '10',
        description: '....'
    },

    {
        id:'4',
        name: 'El Juego de la Oca', 
        price: 2500, 
        image: '/img/elJuegoDeLaOca.jpg',
        category:'....',
        stock: '10',
        description: '....'
    },

    {
        id:'5',
        name: 'Carrera de Mente', 
        price: 4500, 
        image: '/img/carreraDeMente.jpg',
        category:'....',
        stock: '10',
        description: '....'
    },
    
    {
        id:'6',
        name: 'Cuatro en Línea', 
        price: 1890, 
        image: '/img/4enLinea.jpg',
        category:'....',
        stock: '10',
        description: '....'
    },

    {
        id:'7',
        name: 'Letras 3D', 
        price: 1990, 
        image: '/img/letras3d.jpg',
        category:'....',
        stock: '10',
        description: '....'
    },

    {
        id:'8',
        name: 'Batalla Naval', 
        price: 1650, 
        image: '/img/batallaNaval.jpg',
        category:'....',
        stock: '10',
        description: '....'
    },

    {
        id:'9',
        name: 'TEG Clásico', 
        price: 5450, 
        image: '/img/tegClasico.jpg',
        category:'....',
        stock: '10',
        description: '....'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}