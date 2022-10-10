
db.getCollection('employees').find({})
/* 1 */
{
    "_id" : 312456.0,
    "empName" : "Barry Stevens",
    "empAge" : 28.0,
    "jobRole" : "Store Manager",
    "salary" : 120000.0
}

/* 2 */
{
    "_id" : 3245624.0,
    "empName" : "Barrys Stevenss",
    "empAge" : 28.0,
    "jobRole" : "Store Manager",
    "salary" : 1200030.0
}

/* 3 */
{
    "_id" : 312986456.0,
    "empName" : "kim Stevens",
    "empAge" : 28.0,
    "jobRole" : "Store Manager",
    "salary" : 120000.0
}

/* 4 */
{
    "_id" : 3126321456.0,
    "empName" : "lore Stevens",
    "empAge" : 28.0,
    "jobRole" : "Store Manager",
    "salary" : 120000.0
}

/* 5 */
{
    "_id" : 31243356.0,
    "empName" : "jackob Stevens",
    "empAge" : 28.0,
    "jobRole" : "Store Manager",
    "salary" : 120000.0
}

/* 6 */
{
    "_id" : 312325325456.0,
    "empName" : "Barry allen",
    "empAge" : 28.0,
    "jobRole" : "Store Manager",
    "salary" : 325235325235.0
}



db.getCollection('inventory').find({})

/* 1 */
{
    "_id" : 1,
    "itemname" : "apple",
    "amount" : 2.0
}

/* 2 */
{
    "_id" : 2,
    "itemname" : "orange",
    "amount" : 2.0
}

/* 3 */
{
    "_id" : 3,
    "itemname" : "pear",
    "amount" : 34
}

/* 4 */
{
    "_id" : 4,
    "itemname" : "peaches",
    "amount" : 3
}

/* 5 */
{
    "_id" : 5,
    "itemname" : "lime",
    "amount" : 433
}

/* 6 */
{
    "_id" : 6,
    "itemname" : "grapes",
    "amount" : 1
}


db.getCollection('items').find({})







db.getCollection('courses').find({})

/* 1 */
{
    "_id" : ObjectId("63445056ae9142a8678aba2d"),
    "name" : "HTML Basics",
    "price" : 20000,
    "isActive" : "true",
    "instructor" : "Sir Alvin"
}

/* 2 */
{
    "_id" : ObjectId("63445056ae9142a8678aba30"),
    "name" : "CSS 101 + Flexbox",
    "price" : 21000,
    "isActive" : "true",
    "instructor" : "Sir Alvin"
}

/* 3 */
{
    "_id" : ObjectId("63445056ae9142a8678aba33"),
    "name" : "Javascript 101",
    "price" : 32000,
    "isActive" : "true",
    "instructor" : "Ma'am Tine"
}

/* 4 */
{
    "_id" : ObjectId("63445058ae9142a8678aba36"),
    "name" : "Git 101, IDE and CLI",
    "price" : 19000,
    "isActive" : "false",
    "instructor" : "Ma'am Tine"
}

/* 5 */
{
    "_id" : ObjectId("63445058ae9142a8678aba39"),
    "name" : "React.Js 101",
    "price" : 25000,
    "isActive" : "true",
    "instructor" : "Ma'am Miah"
}