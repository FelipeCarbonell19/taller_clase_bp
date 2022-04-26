import React, { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { nanoid } from 'nanoid';

const Formulario = () => {

    const objPersona = {
        nombre: '',
        apellido: '',
        profesion: '',
        edad: '',
        sexo: '',
        telefono: '',
        cumpleaños: " ",
    }

    const [persona, setpersona] = useState(objPersona);
    const [lista, setLista] = useState([]);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [id, setId] = useState('')
    const [error, setError] = useState(null);
    const [fechaNacimiento, setFechaNacimiento] = React.useState("");