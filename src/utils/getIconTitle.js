// Toma el nombre de un icono o componente jsx y devuelve un string sin el icon
export const getIconTitle = (iconName) => iconName.type.name.replace('Svg', ' ');