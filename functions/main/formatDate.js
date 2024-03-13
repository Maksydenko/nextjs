const months = [
    'jan',
    'fév',
    'mar',
    'avr',
    'mai',
    'jui',
    'juil',
    'aoû',
    'sep',
    'oct',
    'nov',
    'déc',
];

const formatDate = (date) =>
{
    const dateObj = new Date(date);

    return `${ dateObj.getDate() } ${ months[dateObj.getMonth()] } ${ dateObj.getFullYear().toString().substr(2) }`;
};

export default formatDate;