const tauxDechange = [
    [
        ["USD to MAD", 10.4],
        ["USD to EUR", 0.95],
        ["USD to GBP", 0.82],
    ],
    [
        ["EUR to USD", 1.05],
        ["EUR to MAD", 10.85],
        ["EUR to GBP", 0.86],
    ],
    [
        ["MAD to USD", 0.097],
        ["MAD to EUR", 0.092],
        ["MAD to GBP", 0.07],
    ],
    [
        ["GBP to USD", 1.21],
        ["GBP to EUR", 1.15],
        ["GBP to MAD", 12.53],
    ],
]

console.log(tauxDechange[0][1][2])

let source = document.getElementById('source')
let target = document.getElementById('target')
let amount = document.getElementById('amount')
let result = document.getElementById('result')

document.getElementById("Convertir").onclick = function () {

    if (amount.value != '') {

        if (source.value == 'USD' && target.value == 'USD') {
            result.innerHTML = amount.value
        } else if (source.value == 'USD' && target.value == 'EUR') {
            result.innerHTML = amount.value * Number(tauxDechange[0][1][1])
        } else if (source.value == 'USD' && target.value == 'MAD') {
            result.innerHTML = amount.value * Number(tauxDechange[0][0][1])

        } else if (source.value == 'USD' && target.value == 'GBP') {
            result.innerHTML = amount.value * Number(tauxDechange[0][2][1])
        }
    } else {
        result.innerHTML = '<p style="color: red;">please enter the amount what you wish !</p>'
    
    }
    if (source.value == 'EUR' && target.value == 'EUR') {
        result.innerHTML = amount.value
    } else if (source.value == 'EUR' && target.value == 'USD') {
        result.innerHTML = amount.value * Number(tauxDechange[1][0][1])
    } else if (source.value == 'EUR' && target.value == 'MAD') {
        result.innerHTML = amount.value * Number(tauxDechange[1][1][1])

    } else if (source.value == 'EUR' && target.value == 'GBP') {
        result.innerHTML = amount.value * Number(tauxDechange[1][2][1])
    }
    if (source.value == 'MAD' && target.value == 'MAD') {
        result.innerHTML = amount.value
    } else if (source.value == 'MAD' && target.value == 'USD') {
        result.innerHTML = amount.value * Number(tauxDechange[2][0][1])
    } else if (source.value == 'MAD' && target.value == 'EUR') {
        result.innerHTML = amount.value * Number(tauxDechange[2][1][1])

    } else if (source.value == 'MAD' && target.value == 'GBP') {
        result.innerHTML = amount.value * Number(tauxDechange[2][2][1])
    }
    if (source.value == 'GBP' && target.value == 'GBP') {
        result.innerHTML = amount.value
    } else if (source.value == 'GBP' && target.value == 'USD') {
        result.innerHTML = amount.value * Number(tauxDechange[3][0][1])
    } else if (source.value == 'GBP' && target.value == 'EUR') {
        result.innerHTML = amount.value * Number(tauxDechange[3][1][1])

    } else if (source.value == 'GBP' && target.value == 'MAD') {
        result.innerHTML = amount.value * Number(tauxDechange[3][2][1])
    }
   
   

}
