export class Customer {
    //we have to use definite assignment assertion(!), if we are not initializing the properties.
    //or we can change the "strictPropertyInitialization" to false in tsconfig.json
    customerNo: number;
    name: string;
    address: string;
    city: string;
    country: string;   
}