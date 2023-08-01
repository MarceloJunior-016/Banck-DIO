import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const Empresa = new CompanyAccount("X", 150, "xTech@gmail")
const eu = new PeopleAccount(112233, "Marcelo", 100, "marcelo@gmail")

Empresa.getLoan(100)
Empresa.getBalance()
Empresa.deposit(20)
Empresa.getBalance()

eu.getDoc()
eu.getBalance()
eu.withdraw(20)
eu.getBalance()
