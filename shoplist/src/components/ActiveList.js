import React from "react"; //Imports react, allow implementation of JSX
import Auth from "../auth"; //Loads local storage class auth
import {dbGETFetch} from "./functions" //loads fetch function
import ListInteractive from "./forms/ListInteractive.js"; //loads listinteractive forms
import Lists from "./Lists.js" //loads list form ->create list form

//Display Active List parent class
//loads ListInteractive and Lists forms
class  ActiveList extends React.Component {
    constructor(props){ //constructor prepared to receive props
        super(props); //allows the usage of props
        this.state ={ //state field
            idlist: Auth.getActiveList(), //recovers id of list active in Auth and stores it in satte
            activeList : [], //stores items list in array
            loading: true, //loading state
            selectedItems : [], //stores selected items in array
        }
        //methods used in this component
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onclickHandler=this.onclickHandler.bind(this);
        this.clearHandler=this.clearHandler.bind(this);
    }

    componentDidMount(){//method that loads info on component mount
        let localActive = Auth.getActiveItems() //recover active items stored locally for the list
        let id =  this.state.idlist; //stores id of active list in local variable
        //console.log(test);
        if(localActive !==null){ //if a list of items was stored locally
            if(id!==null){ //if there is a active list

                let itemsUrl = `http://localhost:2112/list_item/listing=/${id}`;
                //retrieve all items from the BD that exist on active list
                dbGETFetch(itemsUrl).then(itemid =>{
                    //console.log(item)
                    let itemdata = this.state.activeList; //loads item stored priviously on state
                    for(let data of itemid){ //reads all objects of fetch response
                        //console.log(data)
                        let idItem =  data.id_Item; //stores the id of item that belongs to list

                        if(localActive.includes(idItem)){ //if item retrieved from BD was stored locally by user
                        
                        let url =`http://localhost:2112/items/${idItem}`;
                        
                            //get all information for the item
                        dbGETFetch(url).then(items=>{
                            //console.log(items.id)
                            
                            let cat= items.category_id; //store item data in variables
                            let icon = items.icon_ID;
                
                        
                            var caturl=`http://localhost:2112/categories/${cat}`;
                            var iconurl=`http://localhost:2112/icons/${icon}`;
                            //get corresponding category name and icon name for the item
                            dbGETFetch(caturl)
                            .catch(err => err)
                            .then(categorie=>{
                            
                            if(items.category_id === categorie.id_category){
                                items.category_id = categorie.name;//change category id by its name
                                //console.log(data.category_id);
                            }
                            }) 
                
                            dbGETFetch(iconurl)
                            .catch(err => err)
                            .then(icons=>{
                            //console.log(icons.icon)
                            if(items.icon_ID===icons.id_icon){
                                items.icon_ID=icons.icon; //change icon id by its name
                                
                            }
                            }) 
                        itemdata.push(items); //add new item to stockage array
                        this.setState({
                            activeList : itemdata, //save stockage array in state for reload if neaded
                        })
                        })
                    }
                    }
                })
            }
        }
        else{ //if there is no active list of items stored
            if(id!==null){ //if there is one active list

                let itemsUrl = `http://localhost:2112/list_item/listing=/${id}`;
                //retrieve all items from the BD that exist on active list
                dbGETFetch(itemsUrl).then(itemid =>{
                    //console.log(item)
                    let itemdata = this.state.activeList; //loads item stored priviously on state
                    for(let data of itemid){ //reads all objects of fetch response
                        //console.log(data)
                        let idItem =  data.id_Item; //stores the id of item that belongs to list

                        if(data.status === 1){ //if item is active items saved in Data Base
                        
                        let url =`http://localhost:2112/items/${idItem}`; //same as before from now on
                        
    
                        dbGETFetch(url).then(items=>{
                            //console.log(items.id)
                            
                            let cat= items.category_id;
                            let icon = items.icon_ID;
                
                        
                            var caturl=`http://localhost:2112/categories/${cat}`;
                            var iconurl=`http://localhost:2112/icons/${icon}`;
                
                            dbGETFetch(caturl)
                            .catch(err => err)
                            .then(categorie=>{
                            
                            if(items.category_id === categorie.id_category){
                                items.category_id = categorie.name;
                                //console.log(data.category_id);
                            }
                            }) 
                
                            dbGETFetch(iconurl)
                            .catch(err => err)
                            .then(icons=>{
                            //console.log(icons.icon)
                            if(items.icon_ID===icons.id_icon){
                                items.icon_ID=icons.icon;
                                
                            }
                            }) 
                        itemdata.push(items);
                        this.setState({
                            activeList : itemdata,
                        })
                        })
                    }
                    }
                })
            }
        }

        //small function for loading timer
        setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 1500) 
    }


    //executes on assigned click event
    onclickHandler(id) { //receives parameter id
        let items =  this.state.selectedItems; //loads previously selected ids from state into stockage array
        if(items.includes(id) === false) //if id received is not present in state
        {
          items.push(id); //ads id to stockage array
          items.sort(); //orders array
        }
          else { //if id is allready stored in state
            for(let i=0; i<items.length ; i++) //reads stockage array
            { 
              if(items[i]===id) //if it finds it
              items.splice(i,1) //removes it from array
            }
          }
  
        this.setState({
          selectedItems : items //saves new array into state
        })
        //console.log(this.state.selectedItems);
  
      } 

      clearHandler(id){//small click event, receives id
        if(id==="Clear"){ //if id clicked is equal to
            this.setState({ //resets state
                selectedItems : [],
            })
        }


      }


    render(){//render the component to the react DOM
        //console.log(this.state.idlist)
        return (//render info
            <div className="main"> {/* wrapper div */}
                {
                this.state.loading ? //if loading is true
                (<h1>Loading</h1>) : //else
                (this.state.idlist !==null ? (<ListInteractive //if idlist is set loads ListInteractive component
                                    items={this.state.activeList} //sends activeList as props
                                    onclickHandler={this.onclickHandler} //sends onclickHandler as props
                                    selected={this.state.selectedItems} //sends selectedItems as props
                                    clearHandler={this.clearHandler} //sends clear Handler as props
                                    />) : (<Lists />))  } {/* if there is no active list loads Lists component */} 
            </div>
        )
    }
   
}

export default ActiveList