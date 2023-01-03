import '../App.css'
import PeopleSelect from './PeopleSelect'
import ToggleChild from './ToggleChild'
export default function CheckStuff(){
    var currentMembers = "0 Adults 0 Children 0 Rooms"

    return(
        <div id="check_availability">
            <form>
                <label>Check In</label>
                <input type='date'/>
                <label>Check Out</label>
                <input type='date'/>
                <PeopleSelect/>
                <button id='check_button'>Check Availability</button>
            </form>
        </div>
    )
}