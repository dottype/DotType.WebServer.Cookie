import { CookiesCollection } from "../CookiesCollection";
import "dottype.webserver/Interfaces/IServerRequest"

declare module "dottype.webserver/Interfaces/IServerRequest"
{
    export interface IServerRequest 
    {
        /**
         * Gets the Request Cookies
         */
        Cookies: CookiesCollection;
    }
}