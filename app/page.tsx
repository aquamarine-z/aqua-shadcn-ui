'use client'
import * as React from "react"
import {showCustomModal} from "@/registry/ui/modal";

export default function Home() {
    return (
        <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
            <header className="flex flex-col gap-1">

            </header>
            <main className="flex flex-col flex-1 gap-8 items-center justify-center">
                <h1 className="text-3xl font-bold">Welcome to Aqua Shadcn UI Library</h1>
                <a href={""}
                   className={"bg-foreground text-background px-6 py-3 rounded-md hover:scale-105 transition"}>View
                    Document</a>
                <button onClick={() => {
                }}>
                    1111
                </button>
            </main>
        </div>
    )
}
