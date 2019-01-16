import { CookiesCollection } from "../CookiesCollection";

declare module "../../../DotType.WebServer/Interfaces/IServerRequest"
{
    export interface IServerRequest 
    {
        /**
         * Gets the Request Cookies
         */
        Cookies: CookiesCollection;
    }
}