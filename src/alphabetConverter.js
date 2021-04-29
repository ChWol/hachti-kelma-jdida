export default function alphabetConverter(string) {
    console.log(string);
    var result = string;
    console.log(result);
    for (let i = 0; i < result.length; i++) {
        result[i] = convertLetter(result[i]);
    }
    return result;
}

function convertLetter (char) {
    switch (char) {
        case 'ء': return 'ʾ';
        case 'ة': return 'ẗ';
        case 'ي': return 'y';
        case 'و': return 'w';
        case 'ه': return 'h';
        case 'ن': return 'n';
        case 'م': return 'm';
        case 'ل': return 'l';
        case 'ك': return 'k';
        case 'ق': return 'q';
        case 'ف': return 'f';
        case 'غ': return 'ġ';
        case 'ع': return 'ʿ';
        case 'ظ': return 'ẓ';
        case 'ط': return 'ṭ';
        case 'ض': return 'ḍ';
        case 'ص': return 'ṣ';
        case 'ش': return 'š';
        case 'س': return 's';
        case 'ز': return 'z';
        case 'ر': return 'r';
        case 'ذ': return 'ḏ';
        case 'د': return 'd';
        case 'خ': return 'ẖ';
        case 'ح': return 'ḥ';
        case 'ج': return 'ǧ';
        case 'ث': return 'ṯ';
        case 'ت': return 't';
        case 'ب': return 'b';
        case 'ا': return 'ā';
        default: return '';
    }
}