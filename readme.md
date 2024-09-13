<p align="center">
    <img width="300px" src="https://i.imgur.com/Cpu8v9W.png">
    <h1 align="center">Cargo</h1>
</p>

<p align="center">
    A browser with almost no UI.
</p>

Cargo is a browser for people that live on the internet and hate mice. Cargo can be controlled using only a few keyboard shortcuts. Cargo only includes the most useful features of a browser, this way unnecessary features can't disturb you while surfing the interwebz. I built cargo, because I did not use most features that my browsers of choice(chrome and firefox) had.

Cargo is still in a very early state, but it is already usable, please help me developing it.

> Binaries will be available very soon!
## Features

 - __Chrome__: Cargo uses electron's webview tags, which are powered by chromium
 - __Tabs__: Like any other browser cargo supports tabs, but it hides them from you
 - __Devtools__: Cargo has full support for chrome's devtools
 - __Cross platform__: Cargo looks good on all platforms, even the titlebar on windows looks good
 - __Simple__: Cargo only has the features most people need
 - __Very cute__: 🚂🚋🚋 Choo choo!!

## Screenshots

##### Cargo's homepage on macos

![Medium](https://i.imgur.com/BT4P3mn.png)

##### Medium

![Medium](https://i.imgur.com/YpUDGQJ.png)

##### Duckduckgo(the default search engine)

![Medium](https://i.imgur.com/fnQ9ZCF.png)

##### Cargo's about page on windows

![Medium](https://i.imgur.com/ykuNAlY.png)

##### Github

![Medium](https://i.imgur.com/umxDEtU.png)

## Future

Cargo is still very much work in progress, but we can work together to make it the browser of our dreams.

#### TODO

 - Tests
 - History
 - Design improvements
 - Use cargo for new windows
 - Downloads
 - Tab restore
 - Settings
    - Search engine
    - Darkmode

## Development

To build cargo you only need to have [nodejs](https://nodejs.org) and [yarn](https://yarnpkg.com) installed.

### Running cargo

Install all the dependencies(this might take a while)

```
$ yarn installed
```

Run cargo

```
$ yarn start
```

### Building cargo

```
$ yarn build
```

#### Building for a specific platform

__Mac__

```
$ yarn build:mac
```

__Windows__

```
$ yarn build:win32
```

__All platforms__

```
$ yarn build:all
```

## License

MIT © [Zaqar Hakobyan](http://zaqar.com)