// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/typescript

export class Kata {
    static getCount(str: string): number {
        return str.split("").filter((char) => "aeiou".includes(char)).length;
    }
}
