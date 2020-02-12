import React from "react";
//import auth from "./auth";
import ListName from "./forms/ListName.js"
import ItemList from "./forms/ItemList.js"
import {dbGETFetch} from "./functions"
//import CreateList from "./createList";


class Lists extends React.Component {
    constructor() {
      super();
      this.state={
        itemlist : "",
        listname : "",
        catids : "",
        iconids:"",

      }
      this.componentDidMount=this.componentDidMount.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmitName=this.handleSubmitName.bind(this);
    }

    componentDidMount() {
      const url = "http://localhost:2112/items";
      const iconurl = "http://localhost:2112/icons";

      dbGETFetch(url)
      .catch(err => err)
    
      .then((items=>{
        //console.log(res)
        /* this.setState({
          itemlist : res,
        }) */
        //var urlCat= 
        for(let data of items){
          let cat= data.category_id;
          let icon = data.icon_ID;

          console.log(cat)
          console.log(icon)
          var caturl=`http://localhost:2112/categories/${cat}`;
          var iconurl=`http://localhost:2112/icons/${icon}`;

          dbGETFetch(caturl)
          .then(categorie=>{
            console.log(categorie.name)
          }) 

          dbGETFetch(iconurl)
          .then(icons=>{
            console.log(icons.icon)
          }) 
        }

        //console.log(items)
        //console.log(icons)

       

        

        }))



      }


    handleChange(event) {
      const {name, value} = event.target
      this.setState({
          [name]: value
      })
    }

  handleSubmitName(event) {
    event.preventDefault();
    console.log(this.state.listname)
  }


    render(){
      if(this.state.itemlist!=="")
      {
      const items =  this.state.itemlist.map(item => <ItemList key={item.id} item={item} 
      componentDidMount={this.componentDidMount}
      />)
      return (
        <div>
            <ListName 
            handleSubmitName={this.handleSubmitName}
            handleChange={this.handleChange} 
            />
          <div className="itemContainer">
            <ul className="itemList">
              {items}
            </ul>
          </div>
        </div>
      )
      }

      else {
        return(
          <div>Loading...</div>
        )
      }
    }
}

export default Lists