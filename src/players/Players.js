import { request } from "https";
import { AccessDenied, NotFoundPlayer, InvalidTag } from "../exceptions/Exceptions.js";

export class Players {

    constructor(options) {
        this._options = options;
    }

    get(tag) {
        return (new Promise((resolve, reject) => {
            const encodePath = encodeURI(`/v1/players/${tag}`);
            this._options.path = encodePath;
            this._options.method = "GET";
            const req = request(this._options, (res) => {
                res.on("data", body => {
                    const bodyParse = JSON.parse(body.toString());
                    this.#throwExceptions(bodyParse, reject);
                    resolve(new Player(bodyParse));
                });
            });

            req.on("error", err => {
                reject(err);
            });

            req.end();
        })).catch();
    }

    #throwExceptions(bodyParse, reject) {
        if (bodyParse.reason === "notFound" && !(bodyParse.message === undefined)) reject(new InvalidTag("Invalid tag"));
        if (bodyParse.reason === "notFound" && bodyParse.message === undefined) reject(new NotFoundPlayer("Player not found"));
        if (bodyParse.reason === "accessDenied") reject(new AccessDenied("Invalid authorization"));
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
