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
        categorie : "",
        mountonce: false,
      }
      this.componentDidMount=this.componentDidMount.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmitName=this.handleSubmitName.bind(this);
      
    }



    componentDidMount() {
      const url = "http://localhost:2112/items";
      const cats= "http://localhost:2112/categories";

      var mounted = this.state.mountonce;
      if(mounted===false)
      {
        dbGETFetch(cats)
          .catch(err => err)
          .then(allcats=>{
          this.setState({
            categorie : allcats,
            mountonce : true,
            ncate :"",
          })
        })
      }

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

         /*  console.log(cat)
          console.log(icon)  */
          //console.log(data);
          var caturl=`http://localhost:2112/categories/${cat}`;
          var iconurl=`http://localhost:2112/icons/${icon}`;

          dbGETFetch(caturl)
          .catch(err => err)
          .then(categorie=>{
            //console.log(categorie.id)
            if(data.category_id === categorie.id){
                data.category_id = categorie.name;
              // console.log(data.category_id);

              this.setState({
                itemlist :items,
              })
            }
          }) 

          dbGETFetch(iconurl)
          .catch(err => err)
          .then(icons=>{

            if(data.icon_ID===icons.id){
              data.icon_ID=icons.icon;
              this.setState({
                itemlist :items
              })
            }
          }) 
        }
        }))
      }

    handleChange(event) {
      const {name, value} = event.target
      this.setState({
          [name]: value
      })
      console.log(this.state.ncate)
    }

  handleSubmitName(event) {
    event.preventDefault();
    console.log(this.state.listname)
  }
  

  onclickHandler(id) {

  }


    render(){
      
      
       if(this.state.itemlist!=="")
      {
      const items =  this.state.itemlist.map(item => <ItemList key={item.id} item={item} 
      //componentDidMount={this.componentDidMount}
      />)
      return (
        <div>
            <ListName 
            handleSubmitName={this.handleSubmitName}
            handleChange={this.handleChange} 
            listname={this.state.listname}
            categorie={this.state.categorie}
            ncate={this.state.ncate}

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