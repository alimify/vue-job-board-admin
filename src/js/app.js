import axios from 'axios'
import _ from 'lodash'
import { child ,findParent } from './helper'
import db1 from './db1';
let b = document.body;
b.addEventListener('click',function (e) {
    var tar = e.target,
    drop = b.querySelectorAll('[dropdown*="drop"]'),
    drop2 = b.querySelectorAll('.t-action');
    if (tar.closest('[ak-dropdown]') === null) {
        drop.forEach(ele => {
            ele.style.display = 'none'
        })
    }
    
    drop2.forEach(ele => {
        if (ele!== tar) {
            ele.nextElementSibling.style.display = 'none'
            
        }
    })
})