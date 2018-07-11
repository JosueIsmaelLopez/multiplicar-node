//requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (var i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`.red);
        });

    });
}

let listarTabla = (base, limite) => {
    console.log('**************'.green);
    console.log(`**Tabla de ${base}**`.green);
    console.log('**************'.green);

    for (var i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`.red);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}