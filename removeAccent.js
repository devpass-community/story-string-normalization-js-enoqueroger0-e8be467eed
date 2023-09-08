function removeAccent(str) {
    // Add your solution here!  
    let newStr = str;
    for(let i = 0; i<str.length; i++){
        let code = str.charCodeAt(i);
        if(code >= 192 && code <= 195){
            newStr = newStr.replace(str.charAt(i), 'A');
        }else if(code >= 200 && code <= 202){
            newStr = newStr.replace(str.charAt(i), 'E');
        }else if(code >= 204 && code <= 206){
            newStr = newStr.replace(str.charAt(i), 'I');
        }else if(code >= 210 && code <= 213){
            newStr = newStr.replace(str.charAt(i), 'O');
        }else if(code >= 217 && code <= 219){
            newStr = newStr.replace(str.charAt(i), 'U');
        }else if(code >= 224 && code <= 227){
            newStr = newStr.replace(str.charAt(i), 'a');
        }else if(code >= 232 && code <= 234){
            newStr = newStr.replace(str.charAt(i), 'e');
        }else if(code >= 236 && code <= 238){
            newStr = newStr.replace(str.charAt(i), 'i');
        }else if(code >= 242 && code <= 245){
            newStr = newStr.replace(str.charAt(i), 'o');
        }else if(code >= 249 && code <= 251){
            newStr = newStr.replace(str.charAt(i), 'u');
        }
    }

    return newStr;
}

module.exports = removeAccent;
