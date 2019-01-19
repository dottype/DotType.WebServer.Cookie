import { CookiesCollection } from "../CookiesCollection";
import "dottype.webserver/Interfaces/IServerResponse"

declare module "dottype.webserver/Interfaces/IServerResponse"
{
    export interface IServerResponse
    {
        /**
         * Gets the Request Cookies
         */
        Cookies: CookiesCollection;
    }
}