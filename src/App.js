import React, { Component } from 'react';
//import './App.css';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Param formatting as defined by https://picsum.photos/
function getBackgroundImage() {
    var bg = 'https://picsum.photos/2000';

    if (getRandomInt(0, 1)) {
        var params = [];

        if (getRandomInt(0, 1)) {
            params.push('greyscale');
        }

        if (getRandomInt(0, 1)) {
            var blur = getRandomInt(0, 10);

            params.push(blur < 1 ? 'blur' : `blur=${blur}`);
        }

        if (params.length > 0) {
            bg = bg.concat('?');

            params.forEach(function (param, i) {
                bg = i === 0 ? bg.concat(param) : bg.concat('&', param);
            })
        }
    }

    return bg
}

const BackgroundStyle = (img) => ({
    backgroundImage: `url('${img}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '100%',
    textAlign: 'center'
})

export default class App extends Component {
    render() {
        return (
            <div style={BackgroundStyle(getBackgroundImage())}></div>
        );
    };
}
