'use client'

import React, { useEffect, useState } from "react"

const AboutForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })


    useEffect(() => {
        setFormData({
            name: "John Doe",
            email: "john.doe@example.com",
            password: "123456",
        })
    }, [formData])


    return (
        <div>
            <h1>About Form</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AboutForm;