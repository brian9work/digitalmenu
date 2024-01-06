import React from 'react';

const Storage = {
    addPlatillo: {
        set: (e) =>{localStorage.setItem('addPlatillo',e)},
        get: localStorage.getItem('addPlatillo'),
        remove: localStorage.removeItem('addPlatillo')
    }
}

export default Storage;
