function silnia(n) {
    let odpowiedz = 1;
    if (n == 0 || n == 1) {
        return odpowiedz;
    } else {
        for (var i = n; i >= 1; i--) {
            odpowiedz = odpowiedz * i;
        }
        return odpowiedz;
    }
}

let n = 3;
odpowiedz = silnia(n)
console.log("Silnia z " + n + " to " + odpowiedz);
// ------------------------------------------
let silnia_rekurencja = function (n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * silnia_rekurencja(n - 1);
    }
}
let m = 4;
odp_rekurencja = silnia_rekurencja(n)
console.log("Silnia z " + n + " to " + odpowiedz);