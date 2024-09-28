//Para exportar hay que usar la palabra export
//export function calculoIva(cantidad) {
function calculoIva(cantidad) {
    let iva = cantidad*0.21;
    return iva;
}
//export function calculoIRPF(cantidad) {
function calculoIRPF(cantidad) {
    let IRPF = cantidad*0.11;
    return IRPF;
}
export{calculoIva, calculoIRPF};
 