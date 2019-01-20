import { CookiesCollection } from "../CookiesCollection";
import "dottype.hosting/Interfaces/IServerRequest"

declare module "dottype.hosting/Interfaces/IServerRequest"
{
    export interface IServerRequest 
    {
        /**
         * Gets the Request Cookies
         */
        Cookies: CookiesCollection;
    }
}