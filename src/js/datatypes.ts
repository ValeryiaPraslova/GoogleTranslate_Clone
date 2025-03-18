/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Javascript data types
 * 1. number
 * 2. string
 * 3. boolean
 * 4. bigint
 * 5. undefined
 * 6. null
 * 7. symbol
 * 8. object
 *
 * Typescript extra types
 * 1. any
 * 2. unknown
 * 3. void
 * 4. never
 * */

// number
const number: number = 1;

// string
const string1: string = "just string"; // or 'just string'
const string2: string = `string with javascript value ${number}`;

// boolean
const yes: boolean = true;
const no: boolean = false;

// bigint
const bigint: bigint = 1n;

// undefined
const iDoNotKnow: undefined = undefined;

// null
const emptyObject: null = null;

// symbol
const symbol: symbol = Symbol("Description");

// object
const object: object = { first: 1, second: 2, third: 3, null: null };
const array: Array<unknown> = [1, 2, 3, null, true, undefined, {}, []];
