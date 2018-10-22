export const attributesToObject = (attributes) => {
    const obj = {};
    if (attributes) {
        attributes.map(attribute => {
            if (attribute.Value === 'true') {
                obj[attribute.Name] = true;
            } else if (attribute.Value === 'false') {
                obj[attribute.Name] = false;
            } else {
                obj[attribute.Name] = attribute.Value;
            }
            return null;
        });
    }
    return obj;
};
