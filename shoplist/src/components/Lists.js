import React from "react"; //Imports react, allow implementation of JSX
import Auth from "../auth"; //imports local storage class auth
import ListName from "./forms/ListName.js" //Import ListName component
import ItemList from "./forms/ItemList.js" //Import ItemList component
import {dbGETFetch, dbPOSTFetch} from "./functions" //Import functions
import {Redirect } from "react-router-dom"; //Import Redirect component

//List Creation component
//Imports ListName, ItemList
class Lists extends React.Component {
    constructor(props) {//constructor prepared to receive props
      super(props);//allows the usage of props
      this.state={//state field
        originallist : "", //saves unaltered lists belonging to groups
        displayList:"", //stores displaylist
        listname : "", //stores future listname
        //quantity: [], 
        categorie : "", //stores categorie data
        ProvisionalItems : "", //stores provisional items selected by user to add
        mountonce: false, //ensures that is only executed once
        ncate :"", //saves value of categorie selected in filter
        selectedItems : [], //stores provisional items ids into one array
        userID : Auth.sendID(), //gets user id from Auth
        inserted: false, //stores if insert button was pressed
        loading : true, //loading state
      }
      //methods used in the component
      this.componentDidMount=this.componentDidMount.bind(this);
      this.componentDidUpdate=this.componentDidUpdate.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmitName=this.handleSubmitName.bind(this);
      this.onclickHandler=this.onclickHandler.bind(this)
    }

    //loads data quent component mounts
    componentDidMount() {
      const url = "http://localhost:2112/items";
      const cats= "http://localhost:2112/categories";

      var mounted = this.state.mountonce;
      
      if(mounted===false)
      {
        dbGETFetch(cats)
        .catch(err => err) //fetches all categorie info
        .then(allcats=>{
          //console.log(allcats)
        this.setState({ //saves all categorie info into state
          categorie : allcats,
          })
        })
        dbGETFetch(url) //gets all items info 
        .catch(err => err)
        .then((items=>{
          this.setState({ //saves lists info into state
            originallist : items,
            mountonce : true,
            })
          }))
      }
      

      dbGETFetch(url) 
      .catch(err => err)
      .then((items=>{

          for(let data of items){ //opens item data
          let cat= data.category_id; //store category id and icon id
          let icon = data.icon_ID;

        
          var caturl=`http://localhost:2112/categories/${cat}`;
          var iconurl=`http://localhost:2112/icons/${icon}`;
            //get all categories id
          dbGETFetch(caturl)
          .catch(err => err)
          .then(categorie=>{
            
            if(data.category_id === categorie.id_category){
                data.category_id = categorie.name;//change category id into its corresponding name
               //console.log(data.category_id);

              this.setState({
                displayList :items, //update item
              })
            }
          }) 

          dbGETFetch(iconurl)//get icon data
          .catch(err => err)
          .then(icons=>{
            //console.log(icons.icon)
            if(data.icon_ID===icons.id_icon){ //save icon name into corresponding id
              data.icon_ID=icons.icon;
              this.setState({
                displayList:items //upsate items
              })
            }
          }) 
        } 
      })) 
      }

     componentDidUpdate(){//if component was changed
      let itemList = [];
      let i = 0;
      let asID = Number(this.state.ncate) //pass all contents of categorie filter to numbers if possible
      if(this.state.ncate.length !==0){ //if categorie filter was used
          this.state.originallist.map(original=> //opens original list json object
          this.state.displayList.map(items =>{ //opens display list json object
            
            if( items.id === original.id &&
              (items.category_id.indexOf(this.state.ncate) !== -1 ||  
              original.category_id === asID)) { //if name or id correspond to data inserted 
              itemList[i]=items; //saves item list to display
              i++;
            } 
            
            return itemList //returns list to display
            })
          )
          
        }
        return itemList //returns list to display
    }
 
     handleChange(event) {
      const {name, value} = event.target //saves input forms event changes on target input
        this.setState({
          [name]: value
      }) 
    } 

  
     onclickHandler(id) {//onclick event, receives id of object parameter
      let items =  this.state.selectedItems; //reloads saved items id into variable
      let display = [];
      let i=0;
      if(items.includes(id) === false) //if id was now selected
      {
        items.push(id); //add to items selected
        items.sort(); //order items
      }
        else { //if was allready priously slected
          for(let i=0; i<items.length ; i++) //open items id array
          { 
            if(items[i]===id)
            items.splice(i,1) //delete items[i] were id is storeds
          }
        }

      this.setState({
        selectedItems : items //update select items
      })

      for(let selected of this.state.displayList){ // open displayList
        //console.log(selected.id)
        for(let j=0 ; j<items.length ; j++)
        {
          if(items[i]===selected.id){
            display[i] = selected; //create new displaylist
            i++;
          }
        }
        
      }

      this.setState({//update displayList
        ProvisionalItems : display,
      })

    } 

 
    handleSubmitName(event) {//Activates when submit button is pressed
      event.preventDefault(); //prevents default behavior of submit
      //console.log(this.state.listname)
      //console.log(this.state.ProvisionalItems);
      let userid = this.state.userID; //gets user id frol the state
      
      var groupsURL= `http://localhost:2112/user_groups/userpower=/${userid}`;
      
      var listsURL = `http://localhost:2112/lists`;

      var lastList = `http://localhost:2112/last/lists`;

      var listitemURL = "http://localhost:2112/list_item";



       if(this.state.ProvisionalItems.length !==0){ //verify if there are any items selected
        dbGETFetch(groupsURL).then(groups => {
          //console.log(groups.id_Group)
          let idgroups= groups.id_Group;

          var verifyActiveLists = `http://localhost:2112/lists/groups/${idgroups}`;
          //get all lists belonging to a group
          dbGETFetch(verifyActiveLists).then(actives=>{
            //console.log(actives);
            

            if(actives!==false){ //verify if there exist any list
              for(let data of actives){
                //console.log(data.active)
                if(data.active ===1){ //verify if it exists a active list
                  var dataList = //if exists one active list prepares a body for the new deactivated list
                  {
                      group_id: idgroups,
                      name: this.state.listname,
                      active: 0,  
                  }
    
                dbPOSTFetch(listsURL,dataList).then(createdlist =>{ //posts new list
                  dbGETFetch(lastList).then(list=>{ //get id of last list inserted
                    for(let id of list){
                      for(let items of this.state.ProvisionalItems) //opens items selected
                      {
                        var itemList = //creates a body for each item selected
                        {
                          id_List: id.id,
                          id_Item: items.id,
                          quantity: 1, 
                          status : 1, 
                        }
                        dbPOSTFetch(listitemURL,itemList) //inserts it to database
                      }
                    }
                    setTimeout(() => { //small timer funtion
                      this.setState({
                          loading: false,
                          inserted : true,
                      })
                    }, 1500) 
                  })
                  
                })
                } 
              }
            } 
            
            else {//same as before but defines new list as active
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
                }, 1500) 
              })
            })
            } 
          }) 
        })

      }
      else{ //If there are no items selected for the list informs user
        alert("Add at least one item");
      }
} 


    render(){//render the component to the react DOM
      //console.log(this.state.quantity);
      if(this.state.inserted===false){ //if user did not press submit
        let mount = this.componentDidUpdate(); //get new item list filtered for display
        if(this.state.displayList!=="" && mount.length ===0) //display itemlist component unfiltered
        {
        const items =  this.state.displayList.map(item => //loads and prepares ItemList for display
        // this.state.originallist.map(ori=>
            <ItemList 
            key={item.id} //assigns a key to each child
            item={item} //sends item as props
            ncate={this.state.ncate} //define ncate as props
            mount={this.componentDidUpdate()} //send component update as props
            onclickHandler={this.onclickHandler} //send click handler as props
            //quantity={this.state.quantity}
            handleChange={this.handleChange} //send handler change as props
            />   
        )
        return ( //render info
          <div>
              <ListName //render ListName
              handleSubmitName={this.handleSubmitName} //save handlersubmitname as props
              handleChange={this.handleChange} //send handlechange as props
              listname={this.state.listname} //send state as prps
              categorie={this.state.categorie} //send categries as props
              ncate={this.state.ncate} //send state as props
              provisional={this.state.ProvisionalItems} //send provisional items as props
              onclickHandler={this.onclickHandler} //send onclickhandler as props
              />
            <div className="itemContainer">
              <ul className="itemList"> {/* unordered list for ItemList */}
              {items} {/* Prepared ItemList Render */}
              </ul>
            </div>
          </div>
        )
        } else if(this.state.displayList!=="" && mount.length !==0){ //same thing as before but for filtered categorie
          
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
      else{ //if submit was pressed
        return(
          <div>
            {this.state.loading ? (<h1>Loading</h1>) /* if loading is true */: 
            /* else sends user to "../Shoplist" */ <Redirect push to="/ShopList"/> } 
          </div>
        )
      
      
    }
  }

}

export default Lists