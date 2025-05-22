function CrearTabla (datos){ //"datos" representará al JSON
    let tabla = `
     <table role="grid" class="striped">
        <!--Este es encabezado de la tabla-->
        <thead>
            <!--Este es una fila-->
            <tr>
                <!--Columna en la tabla-->
                <th>Carnet</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Sección academica</th>
            </tr>
        </thead>
        <!--Body de la tabla-->
        <tbody>
    `;

    //Hacemos un bucle para llemar la tabla, por cada registro que tiene el bucle
    datos.forEach(integrantes => {
        tabla += `
            <tr>
            <td>${integrantes.carnet}</td>
            <td>${integrantes.nombre}</td>
            <td>${integrantes.rol}</td>
            <td>${integrantes.seccion}</td>
            </tr>
        `;
    });

    tabla += `
        </tbody>
        </table>
    `;

    document.getElementById("tabla").innerHTML = tabla;
}

CrearTabla(integrantes);