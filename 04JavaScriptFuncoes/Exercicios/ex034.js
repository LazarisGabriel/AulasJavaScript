/*
34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. 
*/

function comparaString(string1, string2) {
    let retorno = true
    for (let i in string1) {
        for (let j in string2) {
            if (string1[i].toLowerCase() == string2[j].toLowerCase()) {
                retorno = true
                break
            }
            else 
                retorno = false
        }
        if (retorno == false)
            return retorno
    }
    for (let i in string2) {
        for (let j in string1) {
            if (string2[i].toLowerCase() == string1[j].toLowerCase()) {
                retorno = true
                break
            }
            else 
                retorno = false
        }
        if (retorno == false)
            return retorno
    }
    return retorno
}

console.log(comparaString('aeiou', 'aioieu'))
console.log(comparaString('abece', 'adbe'))