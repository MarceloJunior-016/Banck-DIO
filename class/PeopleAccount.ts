import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount{
    private doc_id:number

    constructor(doc_id:number, nome:string, NumberAccount:number, emailAccount:string){
        super(nome, NumberAccount, emailAccount)
        this.doc_id = doc_id
    }
    getDoc = ():void => {
        console.log(this.doc_id)
    }
}