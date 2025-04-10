const sum = require ('./math').sum
const sub = require ('./math').sub
const div = require ('./math').div
const mul = require ('./math').mul


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