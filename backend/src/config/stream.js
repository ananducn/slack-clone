import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";


const streamClient = new StreamChat(ENV.STREAM_API_KEY, ENV.STREAM_API_SECRET);


export const upsertStreamUser = async (userData) => {
    try {
        await streamClient.upsertUser(userData);
        console.log("Stream user created sucessfully", userData.name);
        return userData
    } catch (error) {
        console.log("error upserting the stream user", error);
    }
};

export const deleteStreamUser = async (userId) => {
    try {
        await streamClient.deleteUser(userId);
        console.log("Stream user deleted sucessfully", userData.name);
    } catch (error) {
        console.log("error deleting the stream user", error);
    }
};

export const generateStreamToken = (userId)=>{
    try {
        const userToken = userId.toString();
        return streamClient.createToken(userToken);

    } catch (error) {
        console.log("error generating the stream token", error);
        return null
    }
}