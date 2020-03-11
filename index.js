import { a } from './index-foo'
import logo from './logo.svg'
// const superb = require('superb");
import superb from 'superb'

console.log('new bundler', a)
console.log(superb.random())

const image = document.createElement('img')
image.src = logo
document.body.appendChild(image)
