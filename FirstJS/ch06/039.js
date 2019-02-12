
function addPrefix(prefix, ...words) {
    const prefixedWords = [];

    for (let i = 0; i < words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords; // Immediantly Deleted.
}
console.log(addPrefix('con', 'verse', 'vex'));
console.log(addPrefix('Non-', 'PG', 'DG', 'CD'));

// console.log(prefixedWords);

