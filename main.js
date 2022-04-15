
const seleccionarEsport = () =>{
    let opcion = prompt(`Selecciona tu esport favorito: \n 1-Valorant \n 2-CS:GO \n 3-League of Legends`);
    validarEleccion(opcion);
}

const validarEleccion = opcion =>{
    while(opcion != "1" && opcion != "2" && opcion != "3"){
        alert("ERROR. No conozco esa opcion");
        opcion = prompt(`Selecciona tu esport favorito: \n 1-Valorant \n 2-CS:GO \n 3-League of Legends`);
    }
    recomendar(preguntarNovedades(),opcion);
}


const preguntarNovedades = () => confirm("Queres saber novedades de la escena?");

const recomendar = (decision,opcion) => {
    if (decision){
        if(opcion == "1"){
            alert("Actualemnte se esta jugando el torneo 'Masters de Reykjavik!'");
        } else if (opcion == "2"){
            alert("Acaba de clasificar un equipo argentino al torneo mas importante!");
        } else alert("La final de la Liga Latinoamericana (LLA) se jugara en Buenos Aires!");
    }else{
        alert("Nos vemos!")
    }
}

seleccionarEsport();