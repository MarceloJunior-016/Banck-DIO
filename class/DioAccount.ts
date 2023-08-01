export abstract class DioAccount{
    private nome:string
    private NumberAccount:number
    private emailAccount:string

    balance:number = 100
    private status:boolean = true 

    constructor(nome:string, NumberAccount:number, emailAccount:string){
        this.nome = nome
        this.NumberAccount = NumberAccount
        this.emailAccount = emailAccount
    }

    //Getters e Setters 
    getName = ():void =>{
        console.log(this.nome)
    }
    getNumber = ():void =>{
        console.log(this.NumberAccount)
    }
    getEmail = ():void =>{
        console.log(this.emailAccount)
    }
    getBalance = ():void => {
        console.log(this.balance)
    }
    setName = (newName:string, emailInit:string, nomeInit:string, numberInit:number):void => {
        if(this.validationAccount_Setter(emailInit, nomeInit, numberInit)){
            this.nome = newName
            console.log('Nome alterado')
        }else{
            console.log('Alguma das informações estão erradas')
        }
    }
    setNumber = (newNumber:number, emailInit:string, nomeInit:string, numberInit:number):void => {
        if(this.validationAccount_Setter(emailInit,nomeInit ,numberInit)){
            this.NumberAccount = newNumber
            console.log('Numer alterado')
        }else{
            console.log('Alguma das informações estão erradas')
        }
    }   

    //metodo de validaçõa
    private validationAccount_Setter = (email:string, nome:string, number:number ):boolean =>{
        if(email === this.emailAccount && nome === this.nome && number === this.NumberAccount){
            return true
        }else {
            throw new Error('Conta invalida')
        }
    }

    statusAccount_validation = () =>{
        if(this.status){
            return this.status
        }
    }

    //movimentando o DINHEIRO
    deposit = (valueDeposit:number):void => {
        if(this.statusAccount_validation()){
            if(this.balance >= valueDeposit){
                this.balance -= valueDeposit
                console.log(`Um deposito de ${valueDeposit} foi realizado`)
            }
        }

    }
    withdraw = (valueWithdraw:number):void =>{
        if(this.statusAccount_validation()){
            if(this.balance >= valueWithdraw){
                this.balance -= valueWithdraw
                console.log(`Um saque de ${valueWithdraw} foi realizado`)
            }
        }
    }

}
