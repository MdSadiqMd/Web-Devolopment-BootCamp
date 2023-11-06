// In this Particular Databse Part the Naming Convention Doesn't Matter
// Open MongoDB Atlas --> Below Atlas Logo Select Project --> Create new project --> Give unique name other than existing clusters --> Go to Database --> Create --> Shared --> aws --> you will be navigated to Overview Page 
// Go to Security << Network Access --> Add IP Address --> Access List Entry --> 0.0.0.0/0
// Go to Database Access --> Add Databse User --> Password --> Add Sample name and Password --> Select Role (read and write to any database) --> Add user
// Go to Database --> Connect --> Compass Copy the URL
// Got to .env File and setup the Configurations

import mongoose from "mongoose";
export async function connect() {
    
}