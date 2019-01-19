import { CookiesCollection } from "../CookiesCollection";
import "dottype.webserver/Request"

declare module "dottype.webserver/Request"
{
    export interface Request 
    {
        /**
         * Gets the Request Cookies
         */
        Cookies: CookiesCollection;
    }
}