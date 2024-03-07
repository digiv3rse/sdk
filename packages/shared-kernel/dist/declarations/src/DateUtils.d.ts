/**
 * Represent number of milliseconds since the Unix Epoch
 */
export type Unix = number;
export declare class DateUtils {
    static toUnix(date: Date | number | string): Unix;
    static toISOString(date: Date | number | string): string;
    static unix(): Unix;
    static unixInSeconds(): number;
    static hoursToMs(hours: number): number;
    static minutesToMs(minutes: number): number;
    static secondsToMs(seconds: number): number;
}
