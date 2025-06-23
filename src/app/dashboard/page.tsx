"use client"
import React, { useState } from 'react';
import Link from 'next/link';
const dashboard = () => {
    const [name, setName] = useState < string > ("")

    return (
        <div>
            <h1>Dashboard</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Hello, {name ? name : "Guest"}!</p>
            <Link href="/about">
                Go to About Page
            </Link>
            <Link href="/contact">
                Go to Contact Page
            </Link>
        </div>
    );
}
export default dashboard;

