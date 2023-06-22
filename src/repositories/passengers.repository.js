import db from "../database/database.js";

export async function getPassengerDb () {
    return db.query(`SELECT passengers."fullName" as passenger, COUNT(passenger_travels) as travels 
    FROM passenger_travels 
    JOIN passengers 
    ON passengers.id=passenger_travels."passengerId"
    WHERE passenger_travels."passengerId"=passengers.id
    GROUP BY passengers.id
    ORDER BY travels DESC;`);
};

export async function getPassengerPagesDb (page, limit){
    return db.query(`SELECT passengers."fullName" as passenger, COUNT(passenger_travels) as travels 
    FROM passenger_travels 
    JOIN passengers 
    ON passengers.id=passenger_travels."passengerId"
    WHERE passenger_travels."passengerId"=passengers.id
    GROUP BY passengers.id
    ORDER BY travels DESC
    LIMIT ${limit}
    OFFSET ${limit*page};`);
};