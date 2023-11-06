// This File and the Folder should be made like this when it is to be access the Variable id (In this case the Profile Id)
function UserProfile({params}:any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile Page {params.id} </p>
        </div>
    )
}

export default UserProfile