import React from "react";
import Auth from "../auth";
import {dbGETFetch} from "./functions"
import ListInteractive from "./forms/ListInteractive.js";
import Lists from "./Lists.js"


class  ActiveList extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            idlist: Auth.getActiveList(),
            activeList : [],
            loading: true,
            selectedItems : [],
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onclickHandler=this.onclickHandler.bind(this);
        this.clearHandler=this.clearHandler.bind(this);
    }

    componentDidMount(){
        let localActive = Auth.getActiveItems()
        let id =  this.state.idlist;
        //console.log(test);
        if(localActive !==null){
            if(id!==null){

                let itemsUrl = `http://localhost:2112/list_item/listing=/${id}`;
    
                dbGETFetch(itemsUrl).then(itemid =>{
                    //console.log(item)
                    let itemdata = this.state.activeList;
                    for(let data of itemid){
                        //console.log(data)
                        let idItem =  data.id_Item;

                        if(localActive.includes(idItem)){
                        
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
                    }
                })
            }
        }
        else{
            if(id!==null){

                let itemsUrl = `http://localhost:2112/list_item/listing=/${id}`;
    
                dbGETFetch(itemsUrl).then(itemid =>{
                    //console.log(item)
                    let itemdata = this.state.activeList;
                    for(let data of itemid){
                        //console.log(data)
                        let idItem =  data.id_Item;

                        if(data.status === 1){
                        
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
                    }
                })
            }
        }

        
        



        setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 2000) 
    }



    onclickHandler(id) {
        let items =  this.state.selectedItems;
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
          selectedItems : items
        })
        //console.log(this.state.selectedItems);
  
      } 

      clearHandler(id){
        if(id==="Clear"){
            this.setState({
                selectedItems : [],
            })
        }


      }


    render(){

        //console.log(this.state.idlist)
        return (
            <div className="main">
                {
                this.state.loading ?
                (<h1>Loading</h1>) :
                (this.state.idlist !==null ? (<ListInteractive 
                                    items={this.state.activeList} 
                                    onclickHandler={this.onclickHandler}
                                    selected={this.state.selectedItems}
                                    clearHandler={this.clearHandler}
                                    />) : (<Lists />))  }
            </div>
        )
    }
   
}

export default ActiveList