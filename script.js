const inputTexto =document.querySelector(".area")
const inputTexto =document.querySelector(".mensaje")

function btnEncriptar() {
    const textoencriptado = encritar("inputTexto.value")
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage ="none"
    inputTexto.value =""
}

function encriptar(stringEncriptada){
    let matrizCodigo =[["a", "ai"], ["e", "enter"], ["i","imes"], ["o","ober"], ["u","ufat"]];
    stringEncriptada =stringEncriptada.tolowerCase();
    for(let i =o; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
          stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])  
        }
    }
    return stringEncriptada;
}

function Desencriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.tolowerCase();
    for (let i = o; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringDesencriptada;
}