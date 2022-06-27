import { request } from "https";
import { AccessDenied } from "../exceptions/AccessDenied.js";

export class Players {

    constructor(options) {
        this._options = options;
    }

    get(tag) {
        return new Promise((resolve, reject) => {
            this._options.path = `/v1/players/%${tag}`;
            this._options.method = "GET";
            const req = request(this._options, (res) => {
                res.on('data', res => {
                    if (res.reason === "accessDenied") throw new AccessDenied("Invalid authorization");
                    resolve(new Player(JSON.parse(res.toString())));
                });
            });

            req.on('error', err => {
                reject(err);
            });

            req.end();
        });
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
