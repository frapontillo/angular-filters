#angular-filters [![Build Status](https://travis-ci.org/frapontillo/angular-filters.png?branch=master)](https://travis-ci.org/frapontillo/angular-filters)

A collection of useful filters for [AngularJS](http://angularjs.org/).

***

# Filters

The included filters are:

- [`bool:trueValue:falseValue`](#bool)
- [`default:defaultValue`](#default)
- [`firstNotNull`](#firstnotnull)
- [`lastNotNull`](#lastnotnull)
- [`max`](#max)
- [`min`](#min)

# Install

You can install the latest version of `angular-filters` with `bower`:

```bash
$ bower install angular-filters
```

You can also fetch the git repo or download a zip of the latest tag.

Then, simply include `./build/angular-filters.js` or `./build/angular-filters.min.js` in your Web app and inject the module `frapontillo.ex.filters` in your application.

# Filters specs

## bool

The `bool` filter allows to **specify true and false values** to show depending on the input value. The second parameter will be returned if and only if the first parameter is `true`; the third parameter will be returned if and only if the first parameter is `false`.

This filter can be used to print a specific message depending on a boolean value.

Use it as follows:

```html
	<p>{{ someBoolValue | bool:'Candies!':'No candies :(' }}</p>
```

```javascript
	$scope.returnValue = $filter('bool')($scope.someBoolValue, 'Candies!', 'No candies :(');
```

## default

The `default` filter allows to **specify a default fallback value** if an object is one of the following:

- `null`
- `undefined`
- empty string, `''`

Please notice that if a value equals to `0`, the default value won't be returned, as `0` is accepted.

This filter is useful when another filter return is not safe and when you want to display a fallback value.

Use it as follows:

```html
	<p>{{ someValue | number:2 | default:'No value is available.' }}</p>
```

```javascript
	$scope.returnValue = $filter('default')
		($filter('number')($scope.someValue, 2), 'No value is available.');
```

## firstNotNull

The `firstNotNull` filter returns the **first element from an array** that is neither `null` or `undefined`. This means it returns all numbers and strings, even if empty. It returns `undefined` if all values aren't set or if the array is empty.

Use it as follows:

```html
	<p>{{ myValues | firstNotNull }}</p>
```

```javascript
	$scope.firstValue = $filter('firstNotNull')($scope.myValues);
```

## lastNotNull

The `lastNotNull` filter returns the **last element from an array** that is neither `null` or `undefined`. This means it returns all numbers and strings, even if empty. It returns `undefined` if all values aren't set or if the array is empty.

Use it as follows:

```html
	<p>{{ myValues | lastNotNull }}</p>
```

```javascript
	$scope.firstValue = $filter('lastNotNull')($scope.myValues);
```

## max

The `max` filter returns the **maximum value from an array** that is neither `null` or `undefined`. It returns `undefined` if all values aren't set or if the array is empty.

Use it as follows:

```html
	<p>{{ myValues | max }}</p>
```

```javascript
	$scope.maxValue = $filter('max')($scope.myValues);
```

## min

The `min` filter returns the **minimum value from an array** that is neither `null` or `undefined`. It returns `undefined` if all values aren't set or if the array is empty.

Use it as follows:

```html
	<p>{{ myValues | min }}</p>
```

```javascript
	$scope.minValue = $filter('min')($scope.myValues);
```

# History

## v1.0.0

- Main module renamed to `frapontillo.ex.filters` in order to adhere with the [Angular Component Specification draft](https://github.com/PascalPrecht/angular-component-spec).
- Added `bool` filter.
- Upgraded bower information, node packages and Karma test runner.

## v0.0.2

- Added `firstNotNull`, `lastNotNull`, `max`, `min`.
- Test set complete.
- TravisCI is working.

## v0.0.1

- First release.
- `default` filter is the only filter at the moment.
- Unit testing with grunt, testacular and gruntacular configured.
- `defaultSpec` test written.

# How to test and build

To test and build the distribution files yourself, do the following:

```shell
npm install -g grunt-cli karma bower
npm install
bower install
grunt
```

To simply test, use the `karma:local` task. To build without testing first, use the `build` task.

If you want to test after every file change, use the `karma:dev` grunt task instead.

# License

```
The MIT License

Copyright (c) 2013 Francesco Pontillo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
