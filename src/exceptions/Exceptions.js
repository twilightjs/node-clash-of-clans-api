export class AccessDenied extends Error {
    constructor(message) {
        super(message);
        this.name = "AccessDenied";
    }
}

export class PlayerNotFound extends Error{
    constructor(message){
        super(message);
        this.name = "PlayerNotFound";
    }
}