const sum = require ('../src/math').sum
const sub = require ('../src/math').sub
const div = require ('../src/math').div
const mul = require ('../src/math').mul
const pow = require ('../src/math').pow


test ( 'add 1+2 equals 3', () => {

    expect( sum(1,2) ).toBe(3);

} );


test ( 'sub 3-1 equals 2', () => {

    expect( sub(3,1) ).toBe(2);

} );



test ( 'mul 2*4 equals 8', () => {

    expect( mul(2,4) ).toBe(8);

} );


test ( 'mul 2* (-4) equals -8', () => {

    expect( mul(2,-4) ).toBe(-8);

} );


test ( 'div 27/3 equals 9', () => {

    expect( div(27,3) ).toBe(9);

} );


test ( 'div 27/(-3) equals -9', () => {

    expect( div(27,-3) ).toBe(-9);

} );


test ( 'pow 2^3 equals 8', () => {

    expect( pow(2,3 ) ).toBe(8);

} );


test ( 'pow 2^0 equals 1', () => {

    expect( pow(2,0 ) ).toBe(1);

} );
