class InputValidator {
    static isValidEmail(input){
        input = input.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(input === ''){
            return "Field should not be empty."
        }else if(!emailRegex.test(input)){
            return "Invalid email format."
        }else{
            return ''
        }
    }   
    
    static isValidPassword(input){
        input = input.trim();
        if(input === ''){
            return "Field should not be empty."
        }else{
            return ''
        }
    }

    static isEmpty(input){
        console.log(input);
        input = input.trim();
        if(input === ''){
            return 'Field should not be empty.'
        }else{
            return ''
        }
    }
}

export default InputValidator;