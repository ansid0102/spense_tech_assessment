import { useState } from "react";
import ToggleChild from "./ToggleChild";

export default function PeopleSelect(){
    return(
        <div id='toggle'>
        <h4 id='members'>Choose</h4>
            <ToggleChild  name="Rooms" count="8"/>
            <ToggleChild name="Adults" count="8"/>
            <ToggleChild  name="Children" count="8"/>
                <button id="submit">Submit</button>
        </div>
    )
}