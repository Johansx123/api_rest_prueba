//import { pool } from "../db.js";

const dbServices = [
    {
        id : 1,
        title : 'Reparacion de lavadoras',
        img : 'iconWashMachine',
        props : ['Mantenieminto', 'Limpieza de filtro', 'Cambio de polea'],
        color : 'red'
    },
    {
        id : 2,
        title : 'Matenimiento de Neveras',
        img : 'iconWashMachine',
        props : ['Recarga de gas', 'Compresor', 'Cambio de timer'],
        color : 'blue'
    },
    {
        id : 3,
        title : 'Revicion de calentador',
        img : 'iconWashMachine',
        props : ['Baterias', 'Tuberias', 'resistencias', 'cambio de mangeras'],
        color : 'yellow'
    },
    {
        id : 4,
        title : 'Reparacion de lavadoras',
        img : 'iconWashMachine',
        props : ['Mantenieminto', 'Limpieza de filtro', 'Cambio de polea'],
        color : 'red'
    },
    {
        id : 5,
        title : 'Matenimiento de Neveras',
        img : 'iconWashMachine',
        props : ['Recarga de gas', 'Compresor', 'Cambio de timer'],
        color : 'blue'
    },
    {
        id : 6,
        title : 'Revicion de calentador',
        img : 'iconWashMachine',
        props : ['Baterias', 'Tuberias', 'resistencias', 'cambio de mangeras'],
        color : 'yellow'
    },
    {
        id : 7,
        title : 'Reparacion de lavadoras',
        img : 'iconWashMachine',
        props : ['Mantenieminto', 'Limpieza de filtro', 'Cambio de polea'],
        color : 'red'
    },
    {
        id : 8,
        title : 'Matenimiento de Neveras',
        img : 'iconWashMachine',
        props : ['Recarga de gas', 'Compresor', 'Cambio de timer'],
        color : 'blue'
    },
    {
        id : 9,
        title : 'Revicion de calentador',
        img : 'iconWashMachine',
        props : ['Baterias', 'Tuberias', 'resistencias', 'cambio de mangeras'],
        color : 'yellow'
    },
]


export const getServices = async (req, res) => {
    try {
        res.json({dbServices});
    } catch (error) {
        return res.status(500).json ({
            message: 'BRO DATABASE COMO QUE NO'
        })  
    }
   
};