export class AccessDenied extends Error {
    constructor(message) {
        super(message);
        this.name = "AccessDenied";
    }
}

export class NotFoundPlayer extends Error{
    constructor(message){
        super(message);
        this.name = "PlayerNotFound";
    }
}

export class InvalidTag extends Error {
    constructor(message){
        super(message);
        this.name = "TagNotFound";
    }
}