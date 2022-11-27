const weekDay = (Y, m, d) => {
    if (m < 3) {
        Y = Y - 1;
    }

    //console.log(Y)

    if (m === 1) {
        m = 11;
    } else if (m === 2) {
        m = 12;
    } else {
        m = m - 2;
    }

    //console.log(m)

    let c = Math.floor(Y/100);
    let y = Y - (100 * c);

    //console.log(c)
    //console.log(y)

    let w = ((d + Math.floor((2.6 * m) - 0.2) + y + Math.floor(y/4) + Math.floor(c/4) - (2 * c)) % 7);

    switch (w) {
        case 0:
            console.log('Sun');
            break;
        case 1:
            console.log('Mon');
            break;
        case 2:
            console.log('Tue');
            break;
        case 3:
            console.log('Wed');
            break;
        case 4:
            console.log('Thu');
            break;
        case 5:
            console.log('Fri');
            break;
        case 6:
            console.log('Sat');
            break;            
    }
}

weekDay(2022,11,27)
