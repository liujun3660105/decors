export const getValidate=(rule)=>(target, property, descriptor)=>{
    let oldValue = descriptor.value;
    descriptor.value = function(){
        const ajv =new Ajv(rule);
        let query = arguments[0]['query'];
        console.log(query);
        let validate = ajv.compile(rule);
        let valid = validate(query);
        console.log(valid);
        return oldValue.apply(null,arguments)

    }

    return descriptor;

}

export const postValidate=(rule)=>(target, property, descriptor)=>{
    let oldValue = descriptor.value;
    descriptor.value = function(){
        const ajv =new Ajv(rule);
        let query = arguments[0]['body'];
        console.log(query);
        let validate = ajv.compile(rule);
        let valid = validate(query);
        console.log(valid);
        return oldValue.apply(null,arguments)
    }
    return descriptor;

}
