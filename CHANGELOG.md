# Change Log

## [1.2.1] 2022-08-15

- Fixed the issues
- Updated dependencies
- Migration to React 18
- Migration to sass from node-sass

## [1.2.0] 2021-05-14

### Bug fixing

- Moved all images inside `public` folder (i.e. moved from `assets/img` to `public/img`)

### Major style changes

- Moved all of the styles inside `styles` folder (i.e. moved from `assets/scss`, `assets/css`, `assets/jss` to `styles/scss`, `styles/css` and `styles/jss`)

### Deleted components

### Added components

### Deleted dependencies

- `@zeit/next-sass` (SCSS will not be imported with the built-in support of NextJS)
- `react-swipeable-views` (not event Material-UI use it anymore)

### Added dependencies

### Updated dependencies

```
@material-ui/core       4.9.13   →   4.11.4
@material-ui/icons       4.9.1   →   4.11.2
classnames               2.2.6   →    2.3.1
moment                  2.25.3   →   2.29.1
next                     9.3.6   →   10.2.0
next-compose-plugins     2.2.0   →    2.2.1
next-images              1.3.1   →    1.7.0
nextjs-redirect          2.0.2   →    5.0.2
node-sass               4.14.1   →    5.0.0
nouislider              14.4.0   →   15.1.0
react                  16.13.1   →   17.0.2
react-datetime          2.16.3   →    3.0.4
react-dom              16.13.1   →   17.0.2
react-slick             0.25.2   →   0.28.1
styled-components        5.1.0   →    5.3.0
webpack                 4.43.0   →   4.46.0
```

### Warning

_We could not update webpack past version 4 and node-sass past version 5 due to some warnings from NextJS._
_The following warnings come from some of our dependencies, however they do not affect the UI or the functionality of the product - we are thinking of dropping their usage and replace with other dependencies:_

```
npm WARN react-datetime@3.0.4 requires a peer of react@^16.5.0 but none is installed. You must install peer dependencies yourself.
```

## [1.1.0] 2020-05-08

### Bug fixing

- `https://github.com/creativetimofficial/nextjs-material-kit/issues/10` (changed the `title`, from simple `string` to `node`, so now, you can pass a title like so `title={<Link href="/"><a>Free Chat</a></Link>}` if you want to have link functionality - NOTE: the `node` that you pass to the `InfoArea` component will have to be styled)
- `https://github.com/creativetimofficial/nextjs-material-kit/issues/6` (check `https://github.com/creativetimofficial/nextjs-material-kit/pull/7` for more info)
- `https://github.com/creativetimofficial/nextjs-material-kit/issues/5`
- `https://github.com/creativetimofficial/nextjs-material-kit/issues/4`
- `https://github.com/creativetimofficial/nextjs-material-kit/issues/2`

### Major style changes

- `assets/jss/nextjs-material-kit.js`
- `assets/jss/nextjs-material-kit/components/buttonStyle.js`
- `assets/jss/nextjs-material-kit/components/headerStyle.js`
- `assets/jss/nextjs-material-kit/components/navPillsStyle.js`
- `assets/jss/nextjs-material-kit/components/paginationStyle.js`
- `assets/jss/nextjs-material-kit/components/paginationStyle.js`

### Deleted components

### Added components

### Deleted dependencies

### Added dependencies

### Updated dependencies

```
@material-ui/core        4.3.2   →    4.9.13
@material-ui/icons       4.2.1   →     4.9.1
moment                  2.24.0   →    2.25.3
next                     9.0.5   →     9.3.6
next-images              1.1.2   →     1.3.1
nextjs-redirect          1.0.2   →     2.0.2
node-sass               4.12.0   →    4.14.1
nouislider              14.0.2   →    14.4.0
react                   16.9.0   →   16.13.1
react-dom               16.9.0   →   16.13.1
react-swipeable-views   0.13.3   →    0.13.9
styled-components        4.3.2   →     5.1.0
webpack                 4.39.3   →    4.43.0
```

### Warning

_The following warnings come from some of our dependencies, however they do not affect the UI or the functionality of the product - if the issues will persist and will change into errors in the next version of React (v17), we will drop their usage and replace with other dependencies:_

```
npm WARN deprecated popper.js@1.16.1: Popper changed home, find its new releases at @popperjs/core
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated mkdirp@0.5.3: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
```

_The following dependencies raise warnings (of deprecation or renamed) in development mode: DateTime, ReactSwipableView. If the warnings will persist, and will become errors in React 17, we will drop their usage and replace them with other plugins._

## [1.0.0] 2019-09-13

### Original Release

- Started project with NextJS
- Added Material-UI as base framework
- Added design from Material Kit by Creative Tim
- Added components from Material Kit React by Creative Tim
