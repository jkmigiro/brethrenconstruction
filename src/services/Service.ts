import axios from "axios";
import MailInterface from "../interfaces/MailInterface";

export async function sendEmail(mail: MailInterface){
    console.log('Posted to URL: ',process.env.REACT_APP_API_URL)
    const url: string = process.env.REACT_APP_API_URL as string;
    console.log('URLS= ',url, ' Mail: ',mail)
    await axios.post(process.env.REACT_APP_API_URL as string, mail);

}