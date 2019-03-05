const crypto = require('crypto')

export default class DemoTask {
    static doSomething(parameter: string): any {
        let start = Date.now();
        let limit = 100000;
        let n = 0;
        while (n < limit) {
            crypto.randomBytes(2048);
            n++;
        }
        let end = Date.now() - start;
        return { result: `DemoTask(${parameter}-${end}): Do something!` };
    }
}

module.exports = DemoTask.doSomething