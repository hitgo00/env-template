## Env Template maker

>A simple CLI tool to create `.env.template` from existing `.env` file!

 Run the following command to install the package globally:
```bash
npm i env-template -g
```


For creating `.env.template` file, go to the directory containing your `.env` file and simply run the command:
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
