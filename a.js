function inHinh1(n) {
    for(let i = 1; i <= n; i++) {
        let s = '';
        for(let j = 1; j <= n; j++) {
            const dk = i >= j;
            s += dk ? '*' : ' ';
        }
        console.log(s);
    }
}

function inHinh2(n) {
    for(let i = 1; i <= n; i++) {
        let s = '';
        for(let j = 1; j <= n; j++) {
            const dk = i + j >= n + 1;
            s += dk ? '*' : ' ';
        }
        console.log(s);
    }
}

function inHinh3(n) {
    for(let i = 1; i <= n; i++) {
        let s = '';
        for(let j = 1; j <= n; j++) {
            const dk = i <= j;
            s += dk ? '*' : ' ';
        }
        console.log(s);
    }
}

function inHinh(n, checkPoint) {
    for(let i = 1; i <= n; i++) {
        let s = '';
        for(let j = 1; j <= n; j++) {
            const dk = checkPoint(i, j, n);
            s += dk ? '*' : ' ';
        }
        console.log(s);
    }
}

inHinh(5, (i, j) => i >= j);
inHinh(5, (i, j, n) => i + j >= n + 1);
inHinh(5, (i, j) => i <= j);

function inHinh4(n) {
    for(let i = 1; i <= n; i++) {
        let s = '';
        const soCot = 2 * n - 1;
        for(let j = 1; j <= soCot; j++) {
            const khoangCach = Math.abs(j - n);
            const dk = khoangCach <= i - 1;
            s += dk ? '*' : ' ';
        }
        console.log(s);
    }
}

// inHinh4(5);
