import { CookiesCollection } from "../CookiesCollection";

declare module "../../../DotType.WebServer/Interfaces/IServerResponse"
{
    export interface IServerResponse
    {
        /**
         * Gets the Request Cookies
         */
        Cookies: CookiesCollection;
    }
}