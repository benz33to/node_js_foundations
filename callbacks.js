// setTimeout(() => {
//     console.log('Hola mundo');
// }, 1000);

const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Breo',
    }

    setTimeout(() => {
        callback(usuario);
    }, 1500);
};

getUsuarioById(10, (usuario) => {
    console.log(usuario.id);
    console.log(`Hola ${usuario.nombre}`);
});