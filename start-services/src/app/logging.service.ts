import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LogginService {
    logStatusChange(status: string){
        console.log("🚀 ~ file: logging.service.ts ~ line 5 ~ LogginService ~ logStatusChange ~ status", status)
    }
}