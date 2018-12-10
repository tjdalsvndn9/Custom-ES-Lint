# eslint-plugin-demo

a demo plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `npm i eslint-plugin-sung-hunt-down-your-bad-code`:

```
$ npm i eslint-plugin-sung-hunt-down-your-bad-code --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `npm i eslint-plugin-sung-hunt-down-your-bad-code` globally.

## Usage

Add `demo` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "sung-hunt-down-your-bad-code"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "sung-hunt-down-your-bad-code/rule-name": 1
    }
}
```

## Supported Rules

* Fill in provided rules here
