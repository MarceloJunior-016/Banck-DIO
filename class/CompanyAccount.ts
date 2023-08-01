import { DioAccount } from './DioAccount'

export class CompanyAccount extends DioAccount {

    constructor(nome:string, NumberAccount:number, emailAccount:string){
        super(nome, NumberAccount, emailAccount)
    }

    getLoan = (valueLoan:number):void => {
        if(this.statusAccount_validation()){
            this.balance += valueLoan
            console.log(`Foi feito um emprestimo de ${valueLoan} na sau conta`)
        }
    }
}