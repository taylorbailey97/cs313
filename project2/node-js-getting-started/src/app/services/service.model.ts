export class Service {
    public serveID: Number;
    public sName: string;
    public cost: Number;
    public time: Number;
    constructor(serveID: Number, sName: string, cost: Number, time: Number) {
        this.serveID = serveID;
        this.sName = sName;
        this.cost = cost;
        this.time = time;
    }
}