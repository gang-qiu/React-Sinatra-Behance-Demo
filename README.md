A sinatra - react app that utilizes the Behance API

# Setup
#### dependencies:
`ruby 2.4.1`
`node 8.3.0`

#### run:
```
bundle install
npm install
npm run webpack
ruby server.rb
open your browser at the URL localhost:4567
```

#### configuration file
It is necessary to add a `config.yaml` file to the project root, which is ignored by version control. A single `BEHANCE_API_KEY: xxxxxxxx` attribute needs to be added.

## Credit
Boilerplate: https://github.com/ilasorsa/bare-sinatra-react