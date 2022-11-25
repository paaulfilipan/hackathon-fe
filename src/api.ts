const returnMarkdown = () => {
    return `# Breaking Changes

## Removed the following items:

- Removed summary method from endpoint paths./pet
- Removed description method from endpoint paths./pet
- Removed servers method from endpoint paths./pet
- Removed put method from endpoint paths./pet
- Removed post method from endpoint paths./pet

## Removed the following items:

- Removed get method from endpoint paths./pet/{petId}
- Removed post method from endpoint paths./pet/{petId}
- Removed delete method from endpoint paths./pet/{petId}

# Non Breaking Changes


## Added the following items:

- Added summary method to endpoint paths./petnew
- Added description method to endpoint paths./petnew
- Added servers method to endpoint paths./petnew
- Added put method to endpoint paths./petnew
- Added post method to endpoint paths./petnew

## Added the following items:

- Added get method to endpoint paths./pet/{petId}/bla
- Added post method to endpoint paths./pet/{petId}/bla
- Added delete method to endpoint paths./pet/{petId}/bla`;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    returnMarkdown
};