import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper, Chip } from "@mui/material";
import ListingMap from "./ListingMap";


const Results = (props) => {
    const id = useParams().id;
     const bizz = (props.listings.find((b) => b.id == id));

    return (
        <>
        <Container>
            <h2>{query.}</h2>
            <h3>{query.}</h3>
            <h3>{query.}</h3>
            <p>{query.}</p>
        </Container>
            {/* <ListingMap address = {bizz.address} /> */}
            </>
    )
}

export default Results