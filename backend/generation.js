import { REFRESH_RATE, SECONDS } from './config.js';
import Dragon from './dragon.js';

const refreshRate = REFRESH_RATE * SECONDS * 5;
let waitingTime = 0;
let created = Date.now();

class Generation {
    constructor() {
        this.expiration = this.calculateExpiration();
        this.waitingTime = refreshRate;
    }

    calculateExpiration() {
        return Date.now() + refreshRate;
    }

    newDragon() {

        if (waitingTime == 0) {
            waitingTime = refreshRate;
            console.log(waitingTime);
            return new Dragon({nickname: 'mimar'});
        } else if () {
            console.log('please wait' + waitingTime);
            setTimeout(() => {
                return new Dragon({nickname: 'mimar'});
            }, waitingTime);
        } else {

        }
    }
}

export default Generation;