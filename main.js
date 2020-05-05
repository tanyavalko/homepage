let getSel = x => document.querySelector(x);

// change borderColor of page
getSel('#spitalny').addEventListener('click', function () {
    getSel('.page').style.borderColor = 'rgb(189, 30, 189)';
});
getSel('#place').addEventListener('click', function () {
    getSel('.page').style.borderColor = 'rgb(218, 116, 57)';
});
getSel('#club').addEventListener('click', function () {
    getSel('.page').style.borderColor = 'rgb(16, 140, 145)';
});
getSel('#manhattan').addEventListener('click', function () {
    getSel('.page').style.borderColor = 'midnightblue';
});

