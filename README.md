# json-assign
> Object.assign for JSON files.

Quickly write to configurations.
```javascript
jsonAssign('./package.json', {
  name: 'json-assign',
  author: 'Jamen Marzonie',
  // ...
}, function(err) {
  // ...
});
```
Using `deep-assign` for nested options.

Source function for dynamic replacement
```javascript
jsonAssign('./package.json', pkg => {
  name: pkg.name.toLowerCase()
}, err => {
  // ...
});
```

**Note:** This module is designed bare-bones, it does not ask for confirmation when writing, be warned!

## Installation
```shell
$ npm install --save json-assign
```

## API
### `jsonAssign(target, source, [indent], callback)`
Assign an object to a JSON file.

 - `target` (`String`): Path to the JSON file.
 - `source` (`Object`, `Function`): Object or function to assign to the JSON file.
 - `indent` (`Number`): Number of spaces in indentation. (Default `2`)
 - `callback` (`Function`): Callback function.

## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

## License
[MIT](LICENSE) &copy; Jamen Marzonie

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
