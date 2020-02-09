import React, {Component} from "react"
import avatar from "../img/user.png"
import {dbGETFetch} from "./functions"


class CreateItem extends Component {
    constructor(props){
        super(props)
          this.state = {
            
        }
      }

    render() {
        const url = `http://localhost:2112//categories`;
        dbGETFetch(url).then((res) => {
            let cat = res;
        });   

        return (
            <div>
                <form>
                    <input list="browsers" name="browser"/>
                        <datalist id="browsers">
                            <option value="Internet Explorer"/>
                            <option value="Firefox"/>
                            <option value="Chrome"/>
                            <option value="Opera"/>
                            <option value="Safari"/>
                        </datalist>                     
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default CreateItem