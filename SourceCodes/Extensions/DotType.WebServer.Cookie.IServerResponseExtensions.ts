import { CookiesCollection } from "../CookiesCollection";
import "dottype.hosting/Interfaces/IServerResponse"

declare module "dottype.hosting/Interfaces/IServerResponse"
{
    export interface IServerResponse
    {
        /**
         * Gets the Request Cookies
         */
        Cookies: CookiesCollection;
    }
}