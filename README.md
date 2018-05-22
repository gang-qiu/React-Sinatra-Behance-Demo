A sinatra - react app that utilizes the Behance API

# Setup
#### dependencies:
`ruby 2.4.1`
`node 8.3.0`

#### run:
```
bundle install
npm install
npm run start
ruby server.rb
open your browser at the URL localhost:4567
```

#### configuration file
It is necessary to add a `config.yaml` file to the project root, which is ignored by version control. A single `BEHANCE_API_KEY: xxxxxxxx` attribute needs to be added.

#### tests
```
npm run test
```

The project is configured to run unit tests for react components via mocha & enzyme. Unfortunately the setup took longer than expected, and only a handful of tests were written. 

## Credit
Boilerplate: https://github.com/ilasorsa/bare-sinatra-react