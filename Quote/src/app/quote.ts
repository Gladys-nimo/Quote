
export class Quote {
    showDetails: boolean;
    constructor(public id:number,public name:string,public quote: string,public publisher: string){
        this.showDetails=false;
    }
    
}
// id: number;
    // name: string;
    // quote: string;
    // publisher: string