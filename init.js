db = db.getSiblingDB("pharmacy_db")

db.createCollection("manufacturers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "name", "address", "phone" ],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        address: {
          bsonType: "object",
          required: [ "street", "city", "state", "zip" ],
          properties: {
            street: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            city: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            state: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            zip: {
              bsonType: "string",
              description: "must be a string and is required"
            }
          }
        },
        phone: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  }
})

db.createCollection("doctors", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "first_name",
        "last_name",
        "phone",
        "license_number"
      ],
      properties: {
        first_name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        last_name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        phone: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        license_number: {
          bsonType: "string",
          pattern: "^[A-Z0-9]{10}$",
          description: "must be 10 uppercase letters/numbers and is required"
        }
      }
    }
  }
})

db.createCollection("suppliers")
db.createCollection("medicines")
db.createCollection("patients")
db.createCollection("patient_medications")

db.manufacturers.insertMany([
  {
    name: "HealthFirst Pharmaceuticals",
    address: {
      street: "100 Medical Plaza",
      city: "Newark",
      state: "NJ",
      zip: "07101"
    },
    phone: "9735551234"
  },
  {
    name: "Garden State Labs",
    address: {
      street: "25 Wellness Drive",
      city: "Trenton",
      state: "NJ",
      zip: "08608"
    },
    phone: "6095552222"
  },
  {
    name: "MetroCare Medicine Co.",
    address: {
      street: "88 Pharmacy Lane",
      city: "Jersey City",
      state: "NJ",
      zip: "07302"
    },
    phone: "2015554567"
  }
])

db.doctors.insertMany([
  {
    first_name: "John",
    last_name: "Smith",
    phone: "9735551111",
    license_number: "ABC1234567"
  },
  {
    first_name: "Maria",
    last_name: "Garcia",
    phone: "2015552222",
    license_number: "ZXCVBN1234"
  },
  {
    first_name: "David",
    last_name: "Lee",
    phone: "7325553333",
    license_number: "QWER567890"
  }
])

db.manufacturers.createIndex({ name: 1 })
db.doctors.createIndex({ license_number: 1 }, { unique: true })

db.suppliers.createIndex({ name: 1 })
db.suppliers.createIndex({ manufacturer: 1 })

db.medicines.createIndex({ name_dosage: 1 })
db.medicines.createIndex({ manufacturer: 1 })

db.patients.createIndex({ last_name: 1 })
db.patients.createIndex({ primary_doctor: 1 })

db.patient_medications.createIndex({ patient: 1 })
db.patient_medications.createIndex({ medicine: 1 })