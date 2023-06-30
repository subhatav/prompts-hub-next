# Prompts Hub

This is a **full-stack** website for *creating* and *sharing* your AI-powered **prompts**.

The *project* is end-to-end **developed** using:

* **Node Package Manager** as *foundation*;
* **ReactJS** Library and **NextJS** Framework for *developing*;
* **NextAuth** with **Bcrypt** for *authorization*;
* **MongoDB** with **Mongoose** for *database*;
* **Tailwind** CSS for *styling* purposes.

<hr />

## Requirements

The **stable** releases of the following *technologies* are used:

| Technology | Version | Technology   | Version |
| ---------- | ------- | ------------ | ------- |
| NPM        | 18.6+   | React & DOM  | 18.2+   |
| Next       | 13.4+   | NextAuth     | 4.22+   |
| MongoDB    | 5.6+    | Mongoose     | 7.3+    |
| Bcrypt     | 5.1+    | Autoprefixer | 10.4+   |
| PostCSS    | 8.4+    | Tailwind CSS | 3.3+    |

P.S. For *hosted* usage, only **Vercel** deployment with **variables** is *sufficient*.

<hr />

## Variables

The **environment** *variables* to be **used**, are:

### Google API Client ID and Secret

   1. **Go** to the [Google Cloud Console](https://console.cloud.google.com/apis/credentials?project=prompts-hub), select the `Website Client` and **copy** the *variables*.
   2. **Enter** them in the `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` *fields*, respectively.

### Mongo Database URI

   1. **Go** to the [Mongo Atlas Console](https://cloud.mongodb.com), select the `Prompts Hub` *project*, select the `DevCluster` *deployment*, click `Connect`, choose `Drivers` and **copy** the *URI*.
   2. **Replace** the `<password>` *phrase* with the *actual* **password** and then **enter** them in the `MONGODB_URI` *field*. For the **local** `.env` *file*, remember to **escape** *characters* like `$`.

### NextAuth URLs and Secret

   1. For the *local* deployment, **enter** the *value* [`http://localhost:3000`] in the `NEXTAUTH_URL` and `NEXTAUTH_URL_INTERNAL` *fields*.
   2. For the *remote* deployment, **enter** the *value* [`https://prompts-hub-next.vercel.app`] in the `NEXTAUTH_URL` and `NEXTAUTH_URL_INTERNAL` *fields*.
   3. **Run** the *command* [`openssl rand -base64 32`] in the **Git** `Bash` *terminal* and **enter** that *value* in the `NEXTAUTH_SECRET` *field*. Remember that a *new* key will **not** *work* with the *old* entries in the **Mongo** *Database*.

<hr />

## Development

For **development** purposes, *follow* these **steps**:

1. **Run** this *command* to **install** all the *dependencies*:

    `npm install`

2. **Run** this *command* to keep **watch** and **start** the *local server*:

    `npm run dev`

3. **Go** to this *URL* to **use** the application:

    `http://localhost:3000`

<hr />

## Production

For **production** purposes, *follow* these **steps**:

1. **Run** this *command* to **install** the required *dependencies*:

    `npm install`

2. **Run** this *command* to **minify** and **build** the *React* project:

    `npm run build`

3. **Run** this *command* to **host** the optimized *React* project:

    `npm start`

4. **Go** to this *URL* to **use** the application:

    `http://localhost:3000`

<hr />

**Thank** you for *using* it!

<hr />