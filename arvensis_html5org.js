'use strict'

var revision = document.querySelector('#log td:first-of-type').textContent.trim()
var summary = document.querySelector('#log td:nth-of-type(3)').textContent.trim();
document.title += ' \u2014 ' + revision + '. ' + summary