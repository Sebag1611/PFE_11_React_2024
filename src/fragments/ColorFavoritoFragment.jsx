/*Cores*/
import React,  { useState } from "react";
import { Badge } from "reactstrap"

/*components: view*/
function ColorFavoritoFragment ({ color, datos }) {
    return (
        <>
            <h1>
                Color Favorito<Badge>{color}</Badge>
            </h1>
        </>
    )
}

/*exportar*/
export default ColorFavoritoFragment