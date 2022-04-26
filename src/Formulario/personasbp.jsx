import React, { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { nanoid } from 'nanoid';

const Formulario = () => {

    const objPersona = {
        nombre: '',
        profesion: '',
        edad: '',
        telefono: '',
        cumpleaños: " ",
    }

    const [persona, setpersona] = useState(objPersona);
    const [lista, setLista] = useState([]);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [id, setId] = useState('')
    const [error, setError] = useState(null);
    const [fechaNacimiento, setFechaNacimiento] = React.useState("");

    useEffect(() => {
        const obtenerDatos = async () => {
            try {

                const db = firebase.firestore()
                const data = await db.collection('personas').get()
                const array = data.docs.map(item => (
                    {
                        id: item.id, ...item.data()
                    }
                ))

                setLista(array)

            } catch (error) {
                console.log(error)
            }
        }

        obtenerDatos()
    })
    const guardarDatos = async (e) => {
        e.preventDefault()

        if (!persona.nombre) {
            setError('¡Vacio el campo nombre!');
            return
        }
        if (!persona.profesion) {
            setError('¡Vacio el campo profesion!');
            return
        }

        if (!persona.edad) {
            setError('¡Vacio el campo edad!');
            return
        }

        if (!persona.telefono) {
            setError('¡Vacio el campo telefono!');
            return
        }
        if(!persona.cumpleaños){
            setError('Ingrese La Fecha')
            return
        }

        try {

            const db = firebase.firestore();
            const personaNueva = {
                ...persona,
            }

            await db.collection('personas').add(personaNueva);

            setLista([...lista,
            { id: nanoid(), ...persona }
            ])

        } catch (error) {
            console.log(error)
        }

        setModoEdicion(false)
        setpersona(objPersona)
        setError(null)

    }

    const deleteConfirm = (id) => {
        let opcion = window.confirm('¿Está seguro que desea eliminar?')

        if (!opcion) {
        } else {

            eliminar(id);
        }

    }

    const eliminar = async (id) => {
        try {
            const db = firebase.firestore()
            await db.collection('personas').doc(id).delete()
            const aux = lista.filter(item => item.id !== id)
            setLista(aux)
        } catch (error) {
            console.log(error)
        }
    }

    const auxEditar = (item) => {

        const objPersona = {
            nombre: item.nombre,
            profesion: item.profesion,
            edad: item.edad,
            telefono: item.telefono,
            cumpleaños: item.cumpleaños,
        }

        setpersona(objPersona);
        setModoEdicion(true);
        setId(item.id);

    }

    const editar = async e => {
        e.preventDefault()

        if (!persona.nombre) {
            setError('Por favor digitar nombre');
            return
        }
        if (!persona.profesion) {
            setError('Por favor digitar profesion');
            return
        }

        if (!persona.edad) {
            setError('Por favor digitar edad');
            return
        }
        if (!persona.telefono) {
            setError('Campo teléfono vacío');
            return
        }
        if(!persona.cumpleaños){
            setError('Seleccione fecha');
            return
        }

        try {

            const db = firebase.firestore()
            await db.collection('personas').doc(id).update({
                ...persona
            })

        } catch (error) {
            console.log(error)
        }

        setpersona(objPersona);
        setModoEdicion(false)
        setError(null)

    }

    const cancelar = () => {

        setpersona(objPersona)
        setModoEdicion(false)
        setError(null)
    }
}

export default personasbp;