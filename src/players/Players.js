import { request } from "https";
import { AccessDenied, PlayerNotFound } from "../exceptions/Exceptions.js";

export class Players {

    constructor(options) {
        this._options = options;
    }

    get(tag) {
        return new Promise((resolve, reject) => {
            const encodePath = encodeURI(`/v1/players/${tag}`);
            this._options.path = encodePath;
            this._options.method = "GET";
            const req = request(this._options, (res) => {
                res.on("data", body => {
                    const bodyParse = JSON.parse(body.toString());
                    this.#throwExceptions(bodyParse);
                    resolve(new Player(bodyParse));
                });
            });

            req.on(error, err => {
                reject(err);
            });

            req.end();
        });
    }

    #throwExceptions(bodyParse) {
        if (bodyParse.reason === "notFound") throw new PlayerNotFound("Player not found");
        if (bodyParse.reason === "accessDenied") throw new AccessDenied("Invalid authorization");
    }
}

export class Player {

    constructor(player) {
        this._player = player;
    }

    troops() {
        return this._player.troops;
    }

    heroes() {
        return this._player.heroes;
    }

    spells() {
        return this._player.spells;
    }
}
