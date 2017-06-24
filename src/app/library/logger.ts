/**
 * Serves to log info and errors both to the console and remotely.
 */
export class McLogger {

    /**
     * Logs the given arguments to the console and remotely.
     *
     * @param args
     */
    static log(...args:any[]):void {

        this.consoleLog.apply(null, args);
        this.remoteLog.apply(null, args);

    }

    /**
     * Logs the given arguments to the console and remotely as an error.
     *
     * @param args
     */
    static error(...args:any[]):void {

        this.consoleError.apply(null, args);
        this.remoteError.apply(null, args);

    }

    /**
     * Logs the given arguments to the console.
     *
     * @param args
     */
    static consoleLog(...args:any[]):void {

        console.log.apply(null, args);

    }

    /**
     * Logs the given arguments to the console as an error.
     *
     * @param args
     */
    static consoleError(...args:any[]):void {

        console.error.apply(null, args);

    }

    /**
     * Logs the given arguments remotely, if set up.
     *
     * @param args
     */
    static remoteLog(...args:any[]):void {}

    /**
     * Logs the given arguments remotely as an error, if set up.
     *
     * @param args
     */
    static remoteError(...args:any[]):void {}

}