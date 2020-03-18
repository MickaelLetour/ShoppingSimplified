import React from "react"; //Imports react, allow implementation of JSX
import Auth from "../auth.js" //imports local storage class auth
import {dbGETFetch,dbPUTFetch} from "./functions" //import function
import SelectActives from "./forms/SelectActives"; //import selectActives component
import {Redirect } from "react-router-dom"; //imports redirect component


//Verifys if user has one active list or not and redirects accordingly
class ShopList extends React.Component {
    constructor () { //constructor 
        super(); //allows usage of props
        this.state ={ //state field
            listdata: [], //original active list data
            list: true, //checks if exists at least one list in active group
            loading: true, //loading state
            activeList : [], //stores active list data in array
            activation: false, //verify if user pressed activate list button
            allcats : [], //stores all categories data
            allicons : [], //stores all icons data
            actives: [], //stores all active items
            itemsSelected : [], //stores in a array the ids of selected items
        }
        //methods used in this component
        this.componentDidMount=this.componentDidMount.bind(this);
        this.onclickHandler=this.onclickHandler.bind(this);
        this.sendHandler=this.sendHandler.bind(this);
    }


    componentDidMount() {//loads data when component mounts
        let userid = Auth.sendID(); //retrieves id stored in Auth
        //console.log(userid);
        var getGroupUrl = `http://localhost:2112/user_groups/userpower=/${userid}`;

        var allcatsUrl = "http://localhost:2112/categories";

        var alliconsURL = "http://localhost:2112/icons"
        //get id of group->for the only retrieves one group
        dbGETFetch(getGroupUrl).then(idgroup=>{
            //console.log(idgroup.id_Group)
            let group = idgroup.id_Group;


            var listActiveUrl = `http://localhost:2112/lists/groups/${group}`;
            //recovers all lists of a group
            dbGETFetch(listActiveUrl).then(list =>{
                if(list === false ){ //if there are no lists belonging to group 
                        this.setState({ //save response on state
                            list : list
                        })
                }
                else {//if there are lists on group
                    
                    for(let info of list){ //opens lists belonging to group
                        //console.log(info)
                        
                        if(info!==false && info.active === 1) { //if lists exist and is active
                            this.setState({ //stores data of list
                                listdata : list,
                            })

                            let id = info.id;
                            Auth.saveActivelist(id); //store active list id into Auth
                            var itemsUrl = `http://localhost:2112/list_item/listing=/${id}`;
                            //get get items of existing list
                            dbGETFetch(itemsUrl).then(itemid =>{
                                //console.log(item)
                                let itemdata = this.state.activeList; //save previous active list item into stockage array

                                let status=[]; //open active items id array 
                                //console.log(this.state.active)
                                for(let data of itemid){ //open item object
                                    //console.log(data.status);

                                    if(data.status===1) //if item is active
                                        status.push(data.id_Item); //store its id into stockage array

                                    let idItem =  data.id_Item;
                                    let url =`http://localhost:2112/items/${idItem}`;
                                    //get item information by its id
                                    dbGETFetch(url).then(items=>{
                                        //console.log(items.id)
                                        
                                        let cat= items.category_id;
                                        let icon = items.icon_ID;
                              
                                      
                                        var caturl=`http://localhost:2112/categories/${cat}`;
                                        var iconurl=`http://localhost:2112/icons/${icon}`;
                                        //get categories by id
                                        dbGETFetch(caturl)
                                        .catch(err => err)
                                        .then(categorie=>{
                                          
                                          if(items.category_id === categorie.id_category){
                                              items.category_id = categorie.name; //change categorie id by its corresponding name
                                             //console.log(data.category_id);
                                          }
                                        }) 
                              
                                        dbGETFetch(iconurl) //get icon by its id
                                        .catch(err => err)
                                        .then(icons=>{
                                          //console.log(icons.icon)
                                          if(items.icon_ID===icons.id_icon){
                                            items.icon_ID=icons.icon; //change icon id by its name
                                            
                                          }
                                        }) 
                                       itemdata.push(items); //add new item for display
                                       this.setState({
                                           activeList : itemdata, //update state
                                       })
                                    })
                                }
                                this.setState({
                                    actives : status, //update active items list state
                                })
                                
                            })

                        }
                    }
                    
                }

            })
        })



        dbGETFetch(allcatsUrl).then(cats=>{
            this.setState({ //saves all categories data into state
                allcats : cats,
            })
        })

        dbGETFetch(alliconsURL).then(icon =>{
            this.setState({ //saves all icons data into state
                allicons : icon,
            })
        })
        //small loading timer function
        setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 1500) 
    }
    
    onclickHandler(id) { //onclick event, receives object id
        let items =  this.state.itemsSelected; //loads previously selected items ids into array;
        if(items.includes(id) === false) //if id belongs to a new item
        {
          items.push(id); //adds it to array
          items.sort(); //oreders array
        }
          else { //if it was allready selected 
            for(let i=0; i<items.length ; i++) //opens array
            { 
              if(items[i]===id) //finds position of item and delets it
              items.splice(i,1)
            }
          }
  
        this.setState({ //updates itemsselected state
            itemsSelected : items
        })
        //console.log(this.state.itemsSelected);
    }

    sendHandler(){ //similar to submit its a onclick event
        let newItems =  this.state.itemsSelected; //stores items selected into a array
        if(newItems.length !==0){
            Auth.setActiveItems(newItems); //if there were items selected, stores them in Auth
        let active = this.state.actives; //active items from database
        let oldactives =[]; //new array to store items that will pass to inactive
        let listId = Auth.getActiveList(); //get id of list stored locally
        //console.log(newItems)
        
            //if new items did not belong to old list of active items adds them
        newItems.forEach(item => { 
            if(active.includes(item)!==true){
                active.push(item);
                //active.sort();
            } 
        });


        active.forEach(item => {
            var newactive = `http://localhost:2112/list_item/uping=/${listId}&${item}`;
            //if the past active is not present in the new actives
            if(newItems.includes(item)!==true){
                oldactives.push(item);//save on old actives array
                //oldactives.sort();
                //item.splice(1);
            }
            let itemList = 
            {
              status : 1, 
            }
            //update Database with new actives
            dbPUTFetch(newactive,itemList);

        });
        //console.log(active);
        oldactives.forEach(item =>{
            var delOldactive = `http://localhost:2112/list_item/uping=/${listId}&${item}`;

            let itemList = 
            {
              status : 0, 
            }
            //update database with new inactives
            dbPUTFetch(delOldactive,itemList);
        })

       
            this.setState({ //set activation button as true
                activation : true,
                loading: false,
            })  
        }
        
    else{ //if user did not active at least one item informs it
        alert("Activate at least one item");
        }
        
    }

    render() {//render the component to the react DOM
        if(this.state.activation!==true){ //if activate list was not pressed
            return ( //render info
                <div>
                    {
                    this.state.loading ? //if loading is true
                    (<h1>Loading</h1>) : //else
                    (this.state.list ? (<SelectActives //if there is ate least one list renders SelectActives component
                                        items={this.state.activeList} //pass active list as props
                                        active={this.state.actives} //pass active items as props
                                        selected={this.state.itemsSelected} //pass items selected as props
                                        onclickHandler={this.onclickHandler} //pass onclick handler as props
                                        send={this.sendHandler} //pass send handler as props
                                        />) : <Redirect push to="/ShopList/Lists" />)  } 
                                        {/* if there are no lists in this group redirects user to "../ShopList/Lists" */}
                </div>
                )
        }
        else {
            return (
                <div>
                    {
                    this.state.loading ?
                    (<h1>Loading</h1>) :
                    (<Redirect push to="/ShopList/ActiveList" />)  } {/* if user Pressed Activate List sends user to "..//ShopList/ActiveList" */}
                </div>
                )
        }
        
    }
}

export default ShopList