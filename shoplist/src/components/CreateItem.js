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
        return (
            <div>
                <form>
                    <input list="browsers" name="browser" />
                    <datalist id="brwsers">
                        <option value="Internet Explorer" />
                        <option value="Firefox"/>
                        <option value="Chrome"/>
                        <option value="Opera"/>
                        <option value="Safari"/>
                    </datalist>
                </form>
            </div>
        )
    }
}

export default CreateItem