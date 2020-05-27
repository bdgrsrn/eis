import React from 'react'
import { Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton } from "react-bootstrap-ribbon";
 
// In this example Bootsrap is installed via NPM. Here it gets imported from the "./node_modules" folder:
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";



export default function RibbonShare() {
    return (
        <div>
        <Ribbon breakpoint="lg" height="8rem">
                    <RibbonGroup title="Clipboard" colClass="col-3">
                        <RibbonGroupItem colClass="col-4" onClick={() => alert("Hello from Ribbon button!")}>
                            <RibbonButton>
                                ✏️
                                <div>Edit</div>
                            </RibbonButton>
                        </RibbonGroupItem>
 
                        {/* more Ribbon group items */}
                    </RibbonGroup>
 
                    {/* more Ribbon groups */}
                </Ribbon>
        </div>
    )
}
