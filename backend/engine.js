import Generation from "./generation.js";

class GenerationEngine {
    constructor() {
        this.generation = null;
        this.time = null;
    }

    start() {
        this.buildNewGeneration();
    }

    stop() {
        clearTimeout(this.time);
    }

    buildNewGeneration() {
        this.generation = new Generation();
        console.log('new generation', this.generation);

        this.time = setTimeout(
            () => this.buildNewGeneration(),
            this.generation.expiration.getTime() - Date.now()
        );
    }
}

export default GenerationEngine;