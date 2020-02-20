import React from "react";
import {dbGETFetch, dbPUTFetch, dbDeleteFetch, dbPOSTFetch} from "./functions"
import ItemList from "./forms/ItemList"
import ListName from "./forms/UpdateListName"
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";



//import CreateList from "./createList";


class Updatelist extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        originallist : "",
        itemsdisplayList:"",
        listname : "",
        quantity: [], 
        categorie : props.categories,
        ProvisionalItems : props.displayList,
        mountonce: false,
        ncate :"",
        selectedItems : "",
        active:false,
        uped : false,
      }
      this.componentDidMount=this.componentDidMount.bind(this);
      this.componentDidUpdate=this.componentDidUpdate.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmitName=this.handleSubmitName.bind(this);
      this.onclickHandler=this.onclickHandler.bind(this)
    }

    componentDidMount() {
        var itemsUrl = "http://localhost:2112/items";
        let idstore = [];
        let i=0;
        var mounted = this.state.mountonce;
      
        if(mounted===false)
        {
          dbGETFetch(itemsUrl)
          .catch(err => err)
          .then((items=>{
            this.setState({
              originallist : items,
              mountonce : true,
              })
            }))
        }

        dbGETFetch(itemsUrl)
        .catch(err => err)
        .then(items=>{
  
        for(let data of items){
          //console.log(items)
            this.props.categories.map(categorie =>{
                if(data.category_id === categorie.id_category){
                    data.category_id = categorie.name;
                    //console.log(data.category_id);
    
                  this.setState({
                    itemsdisplayList :items,
                  })
                }
                return items 
            })

            this.props.allicons.map(icons =>{
                if(data.icon_ID===icons.id_icon){
                    data.icon_ID=icons.icon;
                    this.setState({
                      itemsdisplayList: items
                    })
                  }
                  return items
            })

        }
    })
      
      for(let ids of this.props.displayList){
        idstore[i] = ids.id;
        i++;
      }

      this.setState({
        selectedItems : idstore,
      })
      
    }


    handleChange(event) {
        const {name, value} = event.target
          this.setState({
            [name]: value
        }) 
      } 

    onclickHandler(id) {
        let items =  this.state.selectedItems;
        //console.log(items);
        let display = [];
        let i=0;
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
  
        this.state.itemsdisplayList.map(selected =>{
          //console.log(selected.id)
          for(let j=0 ; j<items.length ; j++)
          {
            if(items[i]===selected.id){
              display[i] = selected;
              i++;
            }
          }
          return display;
  
          
        })
  
        this.setState({
          ProvisionalItems : display,
        })
        
        //console.log(this.state.ProvisionalItems)
      } 

      componentDidUpdate(){
        let itemList = [];
        let i = 0;
        let asID = Number(this.state.ncate)
        if(this.state.ncate.length !==0){
            this.state.originallist.map(original=>
            this.state.itemsdisplayList.map(items =>{
              
              if( items.id === original.id && 
                (items.category_id.indexOf(this.state.ncate) !== -1 ||  
                original.category_id === asID)) {
                itemList[i]=items;
                i++;
              } 
              
              return itemList
              })
            )
            
          }
          return itemList
      }

      handleSubmitName(event) {
        event.preventDefault();
        //console.log(this.state.listname)
        //console.log(this.state.ProvisionalItems);
        let userid = this.state.userID;
        
        var listitemURL = "http://localhost:2112/list_item";
  
          for(let list of this.props.rawlist){
            let idlist= list.id;
            var listsUrl = `http://localhost:2112/lists/${idlist}`;
            
            var listitems = `http://localhost:2112/list_item/listing=/${idlist}`;

            var upedList = 
            {
                group_id: list.group_id,
                name: this.state.listname,
                active: list.active,  
            } 

            dbGETFetch(listitems).then(items =>{
              for(let ids of items){
                let itemid =  ids.id_Item;
                var delItems = `http://localhost:2112/list_item/${idlist}&${itemid}`;
                
                dbDeleteFetch(delItems);
              }
            })
            
            
            dbPUTFetch(listsUrl,upedList).then(listUped =>{
              for(let items of this.state.ProvisionalItems) {
                var itemList = 
                {
                  id_List: list.id,
                  id_Item: items.id,
                  quantity: 1, 
                  status : 1, 
                }
                dbPOSTFetch(listitemURL,itemList)
              }
            })
          }
          this.setState({
            uped : true,
          })
          console.log("done");
      } 


    render(){

        var name = this.props.rawlist.map(lis=>{return lis.name})

        let mount = this.componentDidUpdate();

        if(this.state.uped ===false){

        
        if(this.state.itemsdisplayList!=="" && mount.length ===0)
        {
        var items =  this.state.itemsdisplayList.map(item => 
         // this.state.originallist.map(ori=>
            <ItemList 
            key={item.id} 
            item={item} 
            ncate={this.state.ncate}
            mount={this.componentDidUpdate()}
            onclickHandler={this.onclickHandler}
            quantity={this.state.quantity}
            handleChange={this.handleChange} 
            />   
        )
        return (
          <div>
              <ListName 
              handleSubmitName={this.handleSubmitName}
              handleChange={this.handleChange} 
              listname={this.state.listname}
              categorie={this.state.categorie}
              ncate={this.state.ncate}
              provisional={this.state.ProvisionalItems}
              onclickHandler={this.onclickHandler}
              placeholder={name}
              updated={this.state.uped}
              />
            <div className="itemContainer">
              <ul className="itemList">
               {items}
              </ul>
            </div>
          </div>
        )
        } else if(this.state.displayList!=="" && mount.length !==0){
          
          const nitems =  mount.map(nitem => 
            // this.state.originallist.map(ori=>
               <ItemList 
               key={nitem.id} 
               item={nitem} 
               ncate={this.state.ncate}
               mount={this.componentDidUpdate()}
               onclickHandler={this.onclickHandler}
               />
  
           )
          
          return (
            <div>
                <ListName 
                 handleSubmitName={this.handleSubmitName}
                 handleChange={this.handleChange} 
                 listname={this.state.listname}
                 categorie={this.props.categories}
                 ncate={this.state.ncate}
                 provisional={this.state.ProvisionalItems}
                 onclickHandler={this.onclickHandler}
                 placeholder={name}
                 updated={this.state.uped}
                />
              <div className="itemContainer">
                <ul className="itemList">
                  {nitems}
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
      else{
        return <Redirect push to="/ShopList"/>
    }
  }
}

export default Updatelist




