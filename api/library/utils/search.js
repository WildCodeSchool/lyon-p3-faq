/**
 *
 * @param str
 * @returns {string}
 */
exports.stringSearch = (str) => {
    return str
        .trim()
        .toLowerCase()
        .normalize("NFD") // to unicode standards
        .replace(/[\u0300-\u036f]/g, "") // replace special char
        .replace(/[^0-9a-zA-Z]+/g, " ") // replace special char
        .replace(/<.*?>/g, "") // strip html tags
        .replace('!\s+!', " ") // replace linux spaces
        .replace('  ', ' ') // replace multiple spaces // TODO: rewrite with regex to be recursive
};

/**
 *
 * @param searchString
 * @returns {{attr: [string, string], attr2: [string, string]}}
 */
exports.buildQueryAttributes = (searchString) => {
    let searchMatch2 = searchString.replace(' ', '') + '*';
    let search = searchString.split(' ');
    let searchMatch = '';
    if (searchString.length > 1) {
        search.forEach(elem => {
            if (elem !== ' ') searchMatch += '+' + elem + '* ';
        });
    } else {
        searchMatch = search[0] + '*';
    }
    let attr = [searchMatch, searchMatch];
    let attr2 = [searchMatch2, searchMatch2];

    return {attr, attr2};
}
