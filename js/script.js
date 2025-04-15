// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of rectangle.
 */


function calculate () {
  // turn user input into variables
    let heightP = parseFloat(document.getElementById('height-of-pyramid').value);
    let base = parseFloat(document.getElementById('base-of-triangle').value);
    let heightT = parseFloat(document.getElementById('height-of-triangle').value);

  // process
  let volume = (1/6) * heightP * base * heightT
  // display final information
  document.getElementById('Volume').innerHTML = 'Volume is: ' + volume + ' cm^3'
}
