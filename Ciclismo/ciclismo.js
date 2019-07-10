let corredores = 10;
// NUEVO ARREGLO
let nombres = ['', '', '', '', '', '', '', '', '', ''];
let tiempoPromedio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let numeroDeLetrasPorNombre = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let tiempo = 0;
let mejoresTiempos = [0,0,0];

for (let i = 0; i < corredores; i++) {

    nombres[i] = prompt(`Digite su nombre ${i + 1}`);

    for (let j = 0; j < 5; j++) {

        tiempo = prompt(`puntaje en la carrera ${j + 1}`);
        tiempoPromedio[i] += tiempo / 5;
    }
}

//número de letras por nombre.

for (let k = 0; k < nombres.length; k++) {
    numeroDeLetrasPorNombre[k] = nombres[k].length;
}

for (let x = 0; x < tiempoPromedio.length; x++) {
    mejoresTiempos[x] = Math.max(tiempoPromedio[x]
        );
}


let consolidado = {

    nombre: nombres,
    promedio_de_tiempo: tiempoPromedio,
    letras_por_nombre: numeroDeLetrasPorNombre,
    tiempos: mejoresTiempos

};
console.table(consolidado);


