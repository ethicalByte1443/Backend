import React, { useState } from "react";
import axios from "axios"; // ✅ Make sure axios is imported
import './SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', formData) // ✅ Fixed from .port to .post and removed {formData}
            .then(result => {
                console.log("Data sent successfully!");
                console.log(result.data);
            })
            .catch(err => {
                console.error("Error submitting form:", err);
            });
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                    <button type="submit">Sign Up</button>
                </form>
                <p style={{ textAlign: "center", marginTop: "10px" }}>
                    Already have an account?{" "}
                    <a href="/login" style={{ color: "#4caf50", textDecoration: "none" }}>
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
