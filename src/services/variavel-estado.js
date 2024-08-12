export function vendaIngresso (qnt, meia, cupom) {
    let t = 0

    if (meia == true) {
        t = qnt * 15
    } else {
        t = qnt * 30
    }

    if (cupom == 50) {
        let desc = t * 50 /100
        t -= desc
    }

    return t
}