/** 
    var, dia bisa diakases diluar scopes, nilainya bisa diubah
 */

// if(true) {
//     var nama = "Eko"
// } // scopes

// nama = "Budi"
// console.log('var : ', nama)

/** 
    let, dia tidak bisa diakses diluar scopes, 
    hanya di dalama scopes
 */

// if(true) {
//     let nama = "Eko"
//     nama = "Budi"
//     console.log('let : ', nama)
// } // scopes

/** 
    const, dia tidak bisa diakses diluar scopes,
    hanya didalam scopes, dan nilanya tidak bisa diubah
 */

if(true) {
    const nama = "Eko"
    nama = "Budi"
    console.log('const : ', nama)
} // scopes
