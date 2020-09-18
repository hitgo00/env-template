## Env Template maker

A simple CLI tool to create `.env.template` from existing `.env` file!

### Usage

To create the .env.template file, go to the directory containing your `.env` file and run;

```bash
npx env-template
```

You can also install it globally like this:

```bash
npm i env-template -g
```

And then;

```bash
env-template
```


Example:

`.env` file:

```bash
database_url=https://someDatabaseUrl.com
server_url=https://someServerUrl.com
cloudinary_key=s@meR@nd#mKe7
```


After running the command, a new `.env.template` file will be created in the same directiory:

```bash
database_url=#Your database_url here
server_url=#Your server_url here
cloudinary_key=#Your cloudinary_key here
```
