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
            if (isNaN(value)) {
            setError({ ...error, [key]: "Value needs to be a number" });
            } else if (value < 0) {
            setError({ ...error, [key]: "Value can't be negative" });
            } else if (value === "") {
            setError({ ...error, [key]: "Empty field" });
            } else if (value > form.maxHeight) {
            setError({ ...error, [key]: `Can't be bigger than Max height` });
            } else {
            setError({ ...error, [key]: undefined });
            }
            break;
        case "maxHeight":
            if (isNaN(value)) {
            setError({ ...error, [key]: "Value needs to be a number" });
            } else if (value < 0) {
            setError({ ...error, [key]: "Value can't be negative" });
            } else if (value === "") {
            setError({ ...error, [key]: "Empty field" });
            } else {
            setError({ ...error, [key]: undefined });
            }
            break;
    
        case "minWeight":
            if (isNaN(value)) {
            setError({ ...error, [key]: "Value needs to be a number" });
            } else if (value < 0) {
            setError({ ...error, [key]: "Value can't be negative" });
            } else if (value === "") {
            setError({ ...error, [key]: "Empty field" });
            } else if (value > form.maxWeight) {
            setError({ ...error, [key]: `Can't be bigger than Max weight` });
            } else {
            setError({ ...error, [key]: undefined });
            }
            break;
        case "maxWeight":
            if (isNaN(value)) {
            setError({ ...error, [key]: "Value needs to be a number" });
            } else if (value < 0) {
            setError({ ...error, [key]: "Value can't be negative" });
            } else if (value === "") {
            setError({ ...error, [key]: "Empty field" });
            } else {
            setError({ ...error, [key]: undefined });
            }
            break;
        case "minLifeSpan":
            if (isNaN(value)) {
            setError({ ...error, [key]: "Value needs to be a number" });
            } else if (value < 0) {
            setError({ ...error, [key]: "Value can't be negative" });
            } else if (value === "") {
            setError({ ...error, [key]: "Empty field" });
            } else if (value > form.maxLifeSpan) {
            setError({ ...error, [key]: `Can't be bigger than Max lifeSpan` });
            } else {
            setError({ ...error, [key]: undefined });
            }
            break;
        case "maxLifeSpan":
            if (isNaN(value)) {
            setError({ ...error, [key]: "Value needs to be a number" });
            } else if (value < 0) {
            setError({ ...error, [key]: "Value can't be negative" });
            } else if (value === "") {
            setError({ ...error, [key]: "Empty field" });
            } else {
            setError({ ...error, [key]: undefined });
            }
            break;
        default:
            break;
        }
    };
    
    export default validate;
    