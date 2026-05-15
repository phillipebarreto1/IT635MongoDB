# IT635MongoDB

## Running the Database Setup

Open MongoDB shell:

```bash
mongosh
```

Load the initialization file:

```
load("init.js")
```
OR
```
load("path/to/file/init.js")
```

Switch to the database:

```
use pharmacy_db
```

## Viewing Data

See manufacturer documents:

```
db.manufacturers.find()
```

See doctor documents:

```
db.doctors.find()
```

See all collections:

```
show collections
```