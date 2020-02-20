import React from "react";
import Auth from "../auth";
import ListName from "./forms/ListName.js"
import ItemList from "./forms/ItemList.js"
import {dbGETFetch, dbPOSTFetch} from "./functions"
import {Redirect } from "react-router-dom";
//import CreateList from "./createList";


class Lists extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        originallist : "",
        displayList:"",
        listname : "",
        quantity: [], 
        categorie : "",
        ProvisionalItems : "",
        mountonce: false,
        ncate :"",
        selectedItems : [],
        userID : Auth.sendID(),
        //active:false,
        inserted: false,
        loading : true,
      }
      this.componentDidMount=this.componentDidMount.bind(this);
      this.componentDidUpdate=this.componentDidUpdate.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmitName=this.handleSubmitName.bind(this);
      this.onclickHandler=this.onclickHandler.bind(this)
    }


    componentDidMount() {
     /*  this.setState({
        updated : Auth.updated(),
      }) */
      const url = "http://localhost:2112/items";
      const cats= "http://localhost:2112/categories";

      var mounted = this.state.mountonce;
      
      if(mounted===false)
      {
        dbGETFetch(cats)
        .catch(err => err)
        .then(allcats=>{
          console.log(allcats)
        this.setState({
          categorie : allcats,
          })
        })
        dbGETFetch(url)
        .catch(err => err)
        .then((items=>{
          this.setState({
            originallist : items,
            mountonce : true,
            })
          }))
      }
      

       dbGETFetch(url)
      .catch(err => err)
      .then((items=>{

          for(let data of items){
          let cat= data.category_id;
          let icon = data.icon_ID;

        
          var caturl=`http://localhost:2112/categories/${cat}`;
          var iconurl=`http://localhost:2112/icons/${icon}`;

          dbGETFetch(caturl)
          .catch(err => err)
          .then(categorie=>{
            
            if(data.category_id === categorie.id_category){
                data.category_id = categorie.name;
               //console.log(data.category_id);

              this.setState({
                displayList :items,
              })
            }
          }) 

          dbGETFetch(iconurl)
          .catch(err => err)
          .then(icons=>{
            console.log(icons.icon)
            if(data.icon_ID===icons.id_icon){
              data.icon_ID=icons.icon;
              this.setState({
                displayList:items
              })
            }
          }) 
        } 
      })) 
      }

     componentDidUpdate(){
      let itemList = [];
      let i = 0;
      let asID = Number(this.state.ncate)
      if(this.state.ncate.length !==0){
          this.state.originallist.map(original=>
          this.state.displayList.map(items =>{
            
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
 
     handleChange(event) {
      const {name, value} = event.target
        this.setState({
          [name]: value
      }) 
    } 

   /*  saveQuantity(event){
      const {name, value} = event.target;
     

    }  */
  

     onclickHandler(id) {
      let items =  this.state.selectedItems;
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

      for(let selected of this.state.displayList){
        //console.log(selected.id)
        for(let j=0 ; j<items.length ; j++)
        {
          if(items[i]===selected.id){
            display[i] = selected;
            i++;
          }
        }
        
      }

      this.setState({
        ProvisionalItems : display,
      })

    } 

 
    handleSubmitName(event) {
      event.preventDefault();
      //console.log(this.state.listname)
      console.log(this.state.ProvisionalItems);
      let userid = this.state.userID;
      
      var groupsURL= `http://localhost:2112/user_groups/userpower=/${userid}`;
      
      var listsURL = `http://localhost:2112/lists`;

      var lastList = `http://localhost:2112/last/lists`;

      var listitemURL = "http://localhost:2112/list_item";



       if(this.state.ProvisionalItems.length !==0){
        dbGETFetch(groupsURL).then(groups => {
          //console.log(groups.id_Group)
          let idgroups= groups.id_Group;

          var verifyActiveLists = `http://localhost:2112/lists/groups/${idgroups}`;

          dbGETFetch(verifyActiveLists).then(actives=>{
            //console.log(actives);
            

            if(actives!==false){
              for(let data of actives){
                //console.log(data.active)
                if(data.active ===1){
                  var dataList = 
                  {
                      group_id: idgroups,
                      name: this.state.listname,
                      active: 0,  
                  }
    
                dbPOSTFetch(listsURL,dataList).then(createdlist =>{
                  dbGETFetch(lastList).then(list=>{
                    for(let id of list){
                      for(let items of this.state.ProvisionalItems)
                      {
                        var itemList = 
                        {
                          id_List: id.id,
                          id_Item: items.id,
                          quantity: 1, 
                          status : 1, 
                        }
                        dbPOSTFetch(listitemURL,itemList)
                      }
                    }
                    setTimeout(() => {
                      this.setState({
                          loading: false,
                          inserted : true,
                      })
                    }, 2000) 
                  })
                  
                })
                } 
              }
            } 
            
            else {
              var opdataList = 
              {
                  group_id: idgroups,
                  name: this.state.listname,
                  active: 1,  
              }

            dbPOSTFetch(listsURL,opdataList).then(createdlist =>{
              dbGETFetch(lastList).then(list=>{
                for(let id of list){
                  for(let items of this.state.ProvisionalItems)
                  {
                    var itemList = 
                    {
                      id_List: id.id,
                      id_Item: items.id,
                      quantity: 1, 
                      status : 1, 
                    }
                    dbPOSTFetch(listitemURL,itemList)
                  }
                }
                setTimeout(() => {
                  this.setState({
                      loading: false,
                      inserted : true,
                  })
                }, 2000) 
              })
            })
            } 
          }) 
        })

      }
      else{
        alert("Add at least one item");
      }
} 


    render(){
      //console.log(this.state.quantity);
      if(this.state.inserted===false){
        let mount = this.componentDidUpdate();
        if(this.state.displayList!=="" && mount.length ===0)
        {
        const items =  this.state.displayList.map(item => 
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
                categorie={this.state.categorie}
                ncate={this.state.ncate}
                provisional={this.state.ProvisionalItems}
                onclickHandler={this.onclickHandler}
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
      return(
        <div>
          {this.state.loading ? (<h1>Loading</h1>) :  <Redirect push to="/ShopList"/> }
        </div>
      )
      
      
    }
  }

}

export default Lists