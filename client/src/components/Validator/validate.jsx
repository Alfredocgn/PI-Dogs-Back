const validate = (inputValue, error, setError, form) => {
    const [key] = Object.keys(inputValue);
    const value = inputValue[key];


    switch (key) {
    case "name":
        if (/^[A-Za-z]+$/.test(value)) {
        setError({ ...error, name: undefined });
        } else {
        setError({ ...error, name: "Invalid name" });
        }
        if (value === "") {
        setError({ ...error, name: "Empty field" });
        }
        break;
    case "minHeight":
        const maxHeight = parseInt(form.maxHeight)
        if (isNaN(value)) {
        setError({ ...error, [key]: "Value needs to be a number" });
        } else if (value < 0) {
        setError({ ...error, [key]: "Value can't be negative" });
        } else if (value === "") {
        setError({ ...error, [key]: "Empty field" });
        } else if (value >= maxHeight) {
        setError({ ...error, [key]: "Can't be bigger or equal than Max height" });
        } else {
        setError({ ...error, [key]: undefined });
        }
        break;
    case "maxHeight":
        const minHeight = parseInt(form.minHeight);
        if (isNaN(value)) {
        setError({ ...error, [key]: "Value needs to be a number" });
        } else if (value < 0) {
        setError({ ...error, [key]: "Value can't be negative" });
        } else if (value === "") {
        setError({ ...error, [key]: "Empty field" });
        } else if(value > minHeight) {
            setError({...error, [minHeight] : undefined})
        } else {
        setError({ ...error, [key]: undefined });
        }
        break;

    case "minWeight":
        const maxWeight = parseInt(form.maxWeight)
        if (isNaN(value)) {
        setError({ ...error, [key]: "Value needs to be a number" });
        } else if (value < 0) {
        setError({ ...error, [key]: "Value can't be negative" });
        } else if (value === "") {
        setError({ ...error, [key]: "Empty field" });
        } else if (value >= maxWeight) {
        setError({ ...error, [key]: "Can't be bigger or equal than Max weight" });
        } else {
        setError({ ...error, [key]: undefined });
        }
        break;
    case "maxWeight":
        const minWeight = parseInt(form.minWeight);
        if (isNaN(value)) {
        setError({ ...error, [key]: "Value needs to be a number" });
        } else if (value < 0) {
        setError({ ...error, [key]: "Value can't be negative" });
        } else if (value === "") {
        setError({ ...error, [key]: "Empty field" });
        }  else if(value > minWeight){
            setError({...error,[minWeight]:undefined})
        }  else {
        setError({ ...error, [key]: undefined });
        }
        break;
    case "minLifeSpan":
        const maxLifeSpan = parseInt(form.maxLifeSpan)
        if (isNaN(value)) {
        setError({ ...error, [key]: "Value needs to be a number" });
        } else if (value < 0) {
        setError({ ...error, [key]: "Value can't be negative" });
        } else if (value === "") {
        setError({ ...error, [key]: "Empty field" });
        } else if (value >= maxLifeSpan) {
        setError({ ...error, [key]: "Can't be bigger or equal than Max lifeSpan" });
        } else {
        setError({ ...error, [key]: undefined });
        }
        break;
    case "maxLifeSpan":
        const minLifeSpan = parseInt(form.minLifeSpan);
        if (isNaN(value)) {
        setError({ ...error, [key]: "Value needs to be a number" });
        } else if (value < 0) {
        setError({ ...error, [key]: "Value can't be negative" });
        } else if (value === "") {
        setError({ ...error, [key]: "Empty field" });
        }else if(value > minLifeSpan){
            setError({...error,[minLifeSpan]: undefined})
        } 
        else {
        setError({ ...error, [key]: undefined });
        }
        break;
    default:
        break;
    }
};



export default validate;