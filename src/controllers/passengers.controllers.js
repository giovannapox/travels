import httpStatus from "http-status";
import { getPassengerDb, getPassengerPagesDb } from "../repositories/passengers.repository.js";

export async function getPassenger(req, res) {
    try {
        const passenger = await getPassengerDb();
        if (passenger.rowCount > 100) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Too many results");
        res.send(passenger.rows).status(httpStatus.OK);

    } catch (erro) {
        res.send(erro.message);
    };
};

export async function getPassengerPages(req, res) {
    const {page} = req.params;
    const limit = 25;
    
    if (isNaN(page)) return res.send("Invalid page value").status(httpStatus.BAD_REQUEST);

    try {
        const passenger = await getPassengerPagesDb(page, limit);
        res.send(passenger.rows).status(httpStatus.OK);

    } catch (erro) {
        res.send(erro.message);
    };
};
