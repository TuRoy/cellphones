import React from 'react'
import { Navigate } from 'react-router-dom'
export default function IndexPrivate(props) {
    const token = window.localStorage.getItem('token')
    if (token) {
        return props.children
    } else {
        return <Navigate to='/home'></Navigate>
    }
}
