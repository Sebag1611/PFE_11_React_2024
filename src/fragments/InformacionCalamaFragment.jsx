/* core: react, reactstrap */
import React, {useState} from "react"
import {Button, Card, CardTitle, CardText} from "reactstrap";

/* view: component */
function InformacionCalamaFragment() {
    return (
        <>
            <h1>Soy un fragmento 💀</h1>
            <Card body>
                <CardTitle tag="h5">
                    Special Title Treatment
                </CardTitle>
                <CardText>
                    With supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>
                    Go somewhere
                </Button>
            </Card>
        </>
    )
}

/* importante: EXPORTARLO */
export default InformacionCalamaFragment