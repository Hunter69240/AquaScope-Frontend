import React from "react";
import Header from "../components/Header";
export default function LandingPage() {
    return (
       <>
        <Header />
        <div className="landing-page">
            <h1>Welcome to Our Application</h1>
            <p>This is the landing page of our awesome app.</p>
        </div>
       </>
    );
}