import Link from "next/link";


export default function DevPage() {
    return <div className="p-6">
        <h1 className="text-4xl">Developer Tools</h1>

        <div className="ml-5 mt-4">
            <li>
                <Link href="/dev/create-post" className="text-blue-600">Create Post</Link>
            </li>
        </div>
    </div>
}