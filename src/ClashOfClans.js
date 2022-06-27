import { Players } from "./players/Players.js";

export class ClashOfClans {

    constructor(token) {
        this._options = {
            hostname: "api.clashofclans.com",
            port: 443,
            headers: {
                authorization: `Bearer ${token}`
            }
        };
    }

    players() {
        return new Players(this._options);
    }
}