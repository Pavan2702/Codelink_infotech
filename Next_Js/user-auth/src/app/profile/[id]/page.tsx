export default function UserProfile({ params }: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>
            Profile Page
        </h1>
        <hr/>
        <h1 className="text-2xl"> Profile Page{params.id}</h1>
    </div>
    )
}