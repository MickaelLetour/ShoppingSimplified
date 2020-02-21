import React from "react";
import Auth from "../auth.js"
import {dbGETFetch, dbPUTFetch} from "./functions"
import Lists from "./Lists"
import UpdateList from "./UpdateList.js"
import ListNameDisplay from "./forms/ListNameDisplay.js"
import DisplayList from "./forms/DisplayList.js";



class ShopList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            listdata: [],
            list: true,
            loading: true,
            activeList : [],
            update:false,
            allcats : [],
            allicons : [],
            allLists : [],
            create : false,
            changeactive : false,
        }
        
        this.componentDidMount=this.componentDidMount.bind(this);
        this.onclickHandler=this.onclickHandler.bind(this);
        this.listSelect=this.listSelect.bind(this)
        //this.listCeck=this.listCeck.bind(this);
    }


    componentDidMount() {
        //console.log("rendered")
    let userid = Auth.sendID();
    //console.log(userid);
    var getGroupUrl = `http://localhost:2112/user_groups/userpower=/${userid}`;

    var allcatsUrl = "http://localhost:2112/categories";

    var alliconsURL = "http://localhost:2112/icons"

    dbGETFetch(getGroupUrl).then(idgroup=>{
        //console.log(idgroup.id_Group)
        let group = idgroup.id_Group;


        var listActiveUrl = `http://localhost:2112/lists/groups/${group}`;

        dbGETFetch(listActiveUrl).then(list =>{
            if(list === false ){
                    this.setState({
                        list : list
                    })
            }
            else {
                this.setState({
                    allLists : list,
                })

                for(let info of list){
                    //console.log(info)
                    
                    if(info!==false && info.active === 1) {
                        this.setState({
                            listdata : list,
                        })
                        
                        let id = info.id;
                        Auth.saveActivelist(id);
                        var itemsUrl = `http://localhost:2112/list_item/listing=/${id}`;

                        dbGETFetch(itemsUrl).then(itemid =>{
                            //console.log(item)
                            let itemdata = this.state.activeList;
                            for(let data of itemid){
                                let idItem =  data.id_Item;
                                let url =`http://localhost:2112/items/${idItem}`;

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
                            
                        })

                    }
                }
                
            }

        })
    })



        dbGETFetch(allcatsUrl).then(cats=>{
            this.setState({
                allcats : cats,
            })
        })

        dbGETFetch(alliconsURL).then(icon =>{
            this.setState({
                allicons : icon,
            })
        })

        setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 2000) 
    }
    
    onclickHandler(id) {
        //console.log("i enter")
        if(id === 'updateList'){
            this.setState({
                loading: true,
                update : true,
            })

            setTimeout(() => {
                this.setState({
                    loading: false,
                })
            }, 1000) 
        }

            if(id === 'createlist'){
                this.setState({
                    create : true,
                    loading: true,
                    
            })

            setTimeout(() => {
                this.setState({
                    loading: false,
                })
            }, 1000)
        }         
    }


    listSelect(idlist){

         

        let currentlist= Auth.getActiveList();
        
        if(currentlist!==idlist){
            
            this.setState({
                listdata: [],
                list: true,
                loading: true,
                activeList : [],
                update:false,
                allcats : [],
                allicons : [],
                allLists : [],
                create : false, 
                changeactive: this.state.changeactive === false ? true : false,
              })


              let updateActiveOld = `http://localhost:2112/lists/Active/${currentlist}`
              let updateActiveNew = `http://localhost:2112/lists/Active/${idlist}`

              var upedListOld = 
              {
                  active: 0,  
              } 

              var upedListNew = 
              {
                  active: 1,  
              } 

              dbPUTFetch(updateActiveOld,upedListOld);

              dbPUTFetch(updateActiveNew,upedListNew).then(res=>{
                Auth.saveActivelist(idlist)
                this.componentDidMount();
              })



                
        }
    }




    render() {
        //console.log(this.state.listdata)
        if(this.state.changeactive){
            
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
    else {
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