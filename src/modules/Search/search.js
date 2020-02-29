function fuzzySearch(query, term) {
  const termLength = term.length;
  const queryLength = query.length;

  if (typeof query !== 'string') {
    return false;
  }

  query = query.toLowerCase();
  term = term.toLowerCase();

  if (queryLength > termLength) {
    return false;
  }

  if (queryLength === termLength) {
    return query === term;
  }

  search: for (
    var characterIndex = 0, nextCharacterIndex = 0;
    characterIndex < queryLength;
    characterIndex++
  ) {
    const queryCharacter = query.charCodeAt(characterIndex);
    while (nextCharacterIndex < termLength) {
      if (term.charCodeAt(nextCharacterIndex++) === queryCharacter) {
        continue search;
      }
    }
    return false;
  }
  return true;
}

function exactSearch(query, term) {
  query = query.toLowerCase();
  term = term.toLowerCase();
  return term.indexOf(query) > -1;
}

export default function search(
  searchTerm,
  source,
  searchFields,
  fullTextSearch,
) {
  const results = [];
  const exactResults = [];
  const fuzzyResults = [];
  const searchExp = searchTerm
    .toString()
    .replace(/[-[]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');

  const matchRegExp = new RegExp('(?:s|^)' + searchExp, 'i');
  const addResult = function(array, result) {
    const notResult = !results.includes(result);
    const notFuzzyResult = !fuzzyResults.includes(result);
    const notExactResults = !exactResults.includes(result);
    if (notResult && notFuzzyResult && notExactResults) {
      array.push(result);
    }
  };

  // exit conditions if no source
  if (source === undefined || source === false) {
    return [];
  }

  // iterate through search fields looking for matches
  searchFields.forEach(field => {
    source.forEach(function(content) {
      const fieldExists = typeof content[field] == 'string';
      if (fieldExists) {
        if (content[field].search(matchRegExp) !== -1) {
          // content starts with value (first in results)
          addResult(results, content);
        } else if (
          fullTextSearch === 'exact' &&
          exactSearch(searchTerm, content[field])
        ) {
          // content fuzzy matches (last in results)
          addResult(exactResults, content);
        } else if (fullTextSearch && fuzzySearch(searchTerm, content[field])) {
          // content fuzzy matches (last in results)
          addResult(fuzzyResults, content);
        }
      }
    });
  });

  return [...results, ...exactResults, ...fuzzyResults];
}
