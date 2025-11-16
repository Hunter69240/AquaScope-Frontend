import React from "react";


export default function Header() {
    return (
        <header className="">
            <div className="flex items-center gap-4 p-4 ml-7">
                <div className="flex flex-col">
                    <p className="font-bold text-2xl">AquaScope </p>
                    <p className="opacity-50">Find Any Fish. Know Every Detail.</p>
                </div>
            </div>
        </header>
    );
}