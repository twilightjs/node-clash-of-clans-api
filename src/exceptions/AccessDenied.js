export class AccessDenied extends Error {
    constructor(message) {
        super(message);
        this.name = "AccessDenied";
    }
}