/* eslint-disable @typescript-eslint/no-unused-vars */

/** Type of TypeScript */

// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "A";

// Array
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, "A"];

// any : all type OK
let any1: any = false;

// void
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1 = undefined;

// object
let obj1: object = {};
let obj2: {} = {}; // all type OK
let obj3: { id: number; name: string } = { id: 0, name: "Tom" }; // all type OK
