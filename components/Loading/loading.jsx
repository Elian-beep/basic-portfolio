import React from 'react';

class Loading extends React.Component {
    static async getInitialProps({ res }) {
        res.setHeader('Content-Type', 'text/xml');
        res.write(`
            <?xml version="1.0" encoding="UTF-8"?>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <path d="M13 50A37 37 0 0 0 87 50A37 38.5 0 0 1 13 50" fill="#85a2b6" stroke="none">
            <animateTransform attributeName="transform" type="rotate" dur="0.9345794392523364s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50.75;360 50 50.75"></animateTransform>
            </path>
        `);
        res.end();
    }
}

export default Loading;