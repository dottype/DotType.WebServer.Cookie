import { CookiesCollection } from "../CookiesCollection";
import "dottype.webserver/Response"

declare module "dottype.webserver/Response"
{
    export interface Response 
    {
        /**
         * Gets the Request Cookies
         */
        Cookies: CookiesCollection;
    }
}