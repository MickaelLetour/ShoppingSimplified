import React from "react"; //Imports react, allow implementation of JSX
import Auth from "../auth.js" //imports local storage class auth
import {dbGETFetch, dbPUTFetch} from "./functions" //loads functions 
import Lists from "./Lists" //imports Lists component
import UpdateList from "./UpdateList.js" //Imports UpdateList component
import ListNameDisplay from "./forms/ListNameDisplay.js" //Imports ListNameDisplay component
import DisplayList from "./forms/DisplayList.js"; //imports displaylist component


//Display active list and All lists available for the group
//Loads Lists,UpdateList,ListNameDisplay,DisplayList
class ShopList extends React.Component {
    constructor(props) {//constructor prepared to receive props
        super(props);//allows the usage of props
        this.state ={//state field
            listdata: [], //stores original active list with information untouched
            list: true, //saves if there is a active list, its false if there isn't
            loading: true,//loading state
            activeList : [], //stores active list data
            update:false, //stores if update button was pressed or not
            allcats : [], //stores all categories information
            allicons : [], //stores all icons data
            allLists : [], //stores all lists that belong to the active group
            create : false, //stores if create list button was pressed
            changeactive : false, //state that saves active list change status
        }
        //methods used in the component
        this.componentDidMount=this.componentDidMount.bind(this);
        this.onclickHandler=this.onclickHandler.bind(this);
        this.listSelect=this.listSelect.bind(this)
    }

    //on component mount loads data
    componentDidMount() {
        //console.log("rendered")
    let userid = Auth.sendID(); //saves into var user id stored in Auth
    //console.log(userid);
    var getGroupUrl = `http://localhost:2112/user_groups/userpower=/${userid}`;

    var allcatsUrl = "http://localhost:2112/categories";

    var alliconsURL = "http://localhost:2112/icons"
    //get group 
    dbGETFetch(getGroupUrl).then(idgroup=>{
        //console.log(idgroup.id_Group)
        let group = idgroup.id_Group; //saves group id that user belongs to. 
        //Saves only one id it's not prepared for more still


        var listActiveUrl = `http://localhost:2112/lists/groups/${group}`;
        //get active list belonging to group
        dbGETFetch(listActiveUrl).then(list =>{
            if(list === false ){ //if there there are no lists for this group
                    this.setState({
                        list : list
                    })
            }
            else { //if there exists at least a list
                this.setState({//save all unaltered list info
                    allLists : list,
                })

                for(let info of list){ //open list object and read all info
                    //console.log(info)
                    
                    if(info!==false && info.active === 1) { //if there is a active list
                        this.setState({ //save active list data unaltered
                            listdata : list,
                        })
                        
                        let id = info.id; 
                        Auth.saveActivelist(id); //store active list id into Auth class
                        var itemsUrl = `http://localhost:2112/list_item/listing=/${id}`;
                        //get all items belonging to active list
                        dbGETFetch(itemsUrl).then(itemid =>{
                            //console.log(item)
                            let itemdata = this.state.activeList; //load previous active list items into stockage array
                            for(let data of itemid){ //list_item objects
                                let idItem =  data.id_Item; 
                                let url =`http://localhost:2112/items/${idItem}`;
                                //get item data
                                dbGETFetch(url).then(items=>{
                                    //console.log(items.id)
                                    
                                    let cat= items.category_id; //save  category id
                                    let icon = items.icon_ID; //save icon id
                            
                                    
                                    var caturl=`http://localhost:2112/categories/${cat}`;
                                    var iconurl=`http://localhost:2112/icons/${icon}`;
                            
                                    dbGETFetch(caturl) //get category info
                                    .catch(err => err)
                                    .then(categorie=>{
                                        
                                        if(items.category_id === categorie.id_category){
                                            items.category_id = categorie.name; //change category id by corresponding name
                                            //console.log(data.category_id);
                                        }
                                    }) 
                            
                                    dbGETFetch(iconurl) //get icon data
                                    .catch(err => err) 
                                    .then(icons=>{
                                        //console.log(icons.icon)
                                        if(items.icon_ID===icons.id_icon){
                                        items.icon_ID=icons.icon; //change icon id by its corresponding name
                                        
                                        }
                                    }) 
                                    itemdata.push(items); //saves new item into stockage array
                                    this.setState({//update active list state
                                        activeList : itemdata,
                                    })
                                })
                            }
                            
                        })

                    }
                }
                
            }

        })
    })


    //save category and icon here into states becouse onmount has limited setState usage
        dbGETFetch(allcatsUrl).then(cats=>{
            this.setState({ //gets all category information
                allcats : cats,
            })
        })

        dbGETFetch(alliconsURL).then(icon =>{
            this.setState({ //gets all icon information
                allicons : icon,
            })
        })

        //small timer function
        setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 1500) 
    }
    
    onclickHandler(id) {//onclick, receives id of object as parameter
        //console.log("i enter")
        if(id === 'updateList'){ //if updateList button was pressed
            this.setState({
                loading: true,
                update : true, //change update into true
            })

            setTimeout(() => {
                this.setState({
                    loading: false,
                })
            }, 1000) 
        }

            if(id === 'createlist'){ //if create list button was pressed
                this.setState({
                    create : true, //change create into true
                    loading: true,
                    
            })

            setTimeout(() => {
                this.setState({
                    loading: false,
                })
            }, 1000)
        }         
    }


    listSelect(idlist){//onclick event that executes when clicking on a listname button
        let currentlist= Auth.getActiveList(); //saves current list into valiable
        
        if(currentlist!==idlist){ //if id of current list is diferent of id of list clicked
            
            this.setState({ //reset states
                listdata: [],
                list: true,
                loading: true,
                activeList : [],
                update:false,
                allcats : [],
                allicons : [],
                allLists : [],
                create : false, 
                changeactive: this.state.changeactive === false ? true : false, //change state so it renders page eatch time it executes
              })


              let updateActiveOld = `http://localhost:2112/lists/Active/${currentlist}`
              let updateActiveNew = `http://localhost:2112/lists/Active/${idlist}`

              var upedListOld = //body that sets old active list into inactive
              {
                  active: 0,  
              } 

              var upedListNew = //body that sets new active list into active
              {
                  active: 1,  
              } 

              dbPUTFetch(updateActiveOld,upedListOld); //update old list in database

              dbPUTFetch(updateActiveNew,upedListNew).then(res=>{ //update newactive list in database
                Auth.saveActivelist(idlist) //save locally new active list
                this.componentDidMount(); //reload page without exiting page
              })       
        }
    }




    render() { //render the component to the react DOM
        //console.log(this.state.listdata)
        if(this.state.changeactive){ //reloads eatch time state changes
            
        if(this.state.create===false){  //if create list button was not pressed
            //console.log(this.state.allLists)
            if(this.state.update === false) { //if update list was not pressed
            return (//render info
                <div> {/* div wrapper */}
                    {
                    this.state.loading ? //if loading is true
                    (<h1>Loading</h1>) : //else statement
                    (this.state.list ? (<div><DisplayList //if there are lists in active group render DisplayList
                                        items={this.state.activeList} //pass active list as props
                                        onclickHandler={this.onclickHandler} //send onclickhandler as props
                                        /> <ListNameDisplay //render ListNameDisplay component
                                        lists={this.state.allLists} //pass allist data unaltered as props
                                        onclickHandler={this.onclickHandler} //pass onclick hahndler as props
                                        listSelect={this.listSelect} //pass list select as props
                                        /></div>) : (<Lists />))  }
                </div>
            )
            }
            else { //if update button was pressed
                return(
                    <div>
                    {this.state.loading ?
                    (<h1>Loading</h1>) :
                    (<UpdateList  //render update list component
                        rawlist={this.state.listdata} //pass original active list data as props
                        displayList={this.state.activeList} //pass list data as props
                        categories = {this.state.allcats} //pass categorie data as props
                        allicons = {this.state.allicons} //passicons data as props
                    />) }
                    </div>
                ) 
            }
        }
        else { //if there are no lists in the active group
            return (
                <div>
                {this.state.loading ?
                (<h1>Loading</h1>) :
                (<Lists />) }
                </div>
            )
        }
    }
    else { //same as before but on reload
        //console.log(this.state.create)
        if(this.state.create===false){
            //console.log(this.state.allLists)
            if(this.state.update === false) {
            return (
                <div>
                    {
                    this.state.loading ?
                    (<h1>Loading</h1>) :
                    (this.state.list ? (<div><DisplayList 
                                        items={this.state.activeList} 
                                        onclickHandler={this.onclickHandler}
                                        /> <ListNameDisplay 
                                        lists={this.state.allLists}
                                        onclickHandler={this.onclickHandler}
                                        listSelect={this.listSelect}
                                        /></div>) : (<Lists />))  }
                </div>
            )
            }
            else {
                return(
                    <div>
                    {this.state.loading ?
                    (<h1>Loading</h1>) :
                    (<UpdateList 
                        rawlist={this.state.listdata} 
                        displayList={this.state.activeList}
                        categories = {this.state.allcats}
                        allicons = {this.state.allicons}
                    />) }
                    </div>
                ) 
            }
        }
        else {
            return (
                <div>
                {this.state.loading ?
                (<h1>Loading</h1>) :
                (<Lists />) }
                </div>
            )
        }
    }

    }
}

export default ShopList