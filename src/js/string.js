const justString = "Just string";

const stringWithJustString = `String with ${justString}`;

let variableString = "First variant";
variableString = "Second variant";
variableString = `Third variant with ${stringWithJustString}`;

// Look at possibility to assign any other type to string which is bug dangerous
variableString = 4;
variableString = null;
variableString = true;
variableString = {};
