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
        const soCot = n;
        for(let j = 1; j <= soCot; j++) {
            const dk = i <= j;
            s += dk ? '*' : ' ';
        }
        console.log(s);
    }
}

function inHinh4(n) {
    for(let i = 1; i <= n; i++) {
        let s = '';
        const soCot = 2 * n - 1;
        for(let j = 1; j <= soCot; j++) {
            const dk = Math.abs(j - n) <= i - 1;
            s += dk ? '*' : ' ';
        }
        console.log(s);
    }
}

function inHinh(n, checkPoint, getSoCot) {
    for(let i = 1; i <= n; i++) {
        let s = '';
        const soCot = getSoCot ? getSoCot(n) : n;
        for(let j = 1; j <= soCot; j++) {
            const dk = checkPoint(i, j, n);
            s += dk ? '*' : ' ';
        }
        console.log(s);
    }
}

inHinh(5, (i, j) => i >= j);
inHinh(5, (i, j, n) => i + j >= n + 1);
inHinh(5, (i, j) => i <= j);
inHinh(5, (i, j, n) => Math.abs(j - n) <= i - 1, n => 2 * n - 1);



// inHinh4(5);
