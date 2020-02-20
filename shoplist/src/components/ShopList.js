import React from "react";
import Auth from "../auth.js"
import {dbGETFetch,dbPUTFetch} from "./functions"
import Lists from "./Lists"

//import ActiveList from "./ActiveList"
import SelectActives from "./forms/SelectActives";
import {Redirect } from "react-router-dom";
//import {BrowserRouter as Redirect} from 'react-router-dom';
/* import Navbar from "./Navbar.js"


import Items from "./Items.js"
//import NewUser from "./components/NewUser.js";
import {BrowserRouter as Router, Switch} from "react-router-dom"

import { ProtectedRoute } from '../protRoute.js'; */



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
            actives: [],
            itemsSelected : [],
        }
        
        this.componentDidMount=this.componentDidMount.bind(this);
        this.onclickHandler=this.onclickHandler.bind(this);
        this.sendHandler=this.sendHandler.bind(this);
        //this.listCeck=this.listCeck.bind(this);
    }


    componentDidMount() {
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

                                let status=[]; 
                                //console.log(this.state.active)
                                for(let data of itemid){
                                    //console.log(data.status);

                                    if(data.status===1)
                                        status.push(data.id_Item);

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
                                this.setState({
                                    actives : status,
                                })
                                
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
        let items =  this.state.itemsSelected;
        if(items.includes(id) === false)
        {
          items.push(id);
          items.sort();
        }
          else {
            for(let i=0; i<items.length ; i++)
            { 
              if(items[i]===id)
              items.splice(i,1)
            }
          }
  
        this.setState({
            itemsSelected : items
        })
        //console.log(this.state.itemsSelected);
    }

    sendHandler(){
        let newItems =  this.state.itemsSelected;
        let active = this.state.actives;
        let oldactives =[];
        let listId = Auth.getActiveList();
        //console.log(newItems)
        

        newItems.forEach(item => {
            if(active.includes(item)!==true){
                active.push(item);
                active.sort();
            } 
        });

        active.forEach(item => {
            //var newactive = `http://localhost:2112/list_item/uping=/${listId}&${item}`;

            if(newItems.includes(item)!==true){
                oldactives.push(item);
                oldactives.sort();
                //item.splice(1);
            }
        });
        //console.log(active);
        oldactives.forEach(item =>{
            var delOldactive = `http://localhost:2112/list_item/uping=/${listId}&${item}`;

            let itemList = 
            {
              status : 0, 
            }

            //dbPUTFetch(delOldactive,itemList);
        })



        
    }



    render() {
        return (
        <div>
            {
            this.state.loading ?
            (<h1>Loading</h1>) :
            (this.state.list ? (<SelectActives 
                                items={this.state.activeList} 
                                active={this.state.actives}
                                selected={this.state.itemsSelected}
                                onclickHandler={this.onclickHandler}
                                send={this.sendHandler}
                                />) : <Redirect push to="/ShopList/Lists" />)  }
        </div>
        )
    }
}

export default ShopList