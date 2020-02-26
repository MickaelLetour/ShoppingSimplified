import React from "react"; //Imports react, allow implementation of JSX
import {dbGETFetch, dbPUTFetch, dbDeleteFetch, dbPOSTFetch} from "./functions" //imports functions
import ItemList from "./forms/ItemList" //imports ItemList Component
import ListName from "./forms/UpdateListName" //imports ListName Component
import { Redirect } from "react-router-dom"; //imports Redirect Component


//Component for update of the current active List
//Opens ItemList, ListName,
//Receives props from AllLists
class Updatelist extends React.Component {
    constructor(props) { //constructor 
      super(props); //allows usage of props
      this.state={ //state field
        originallist : "", //stores original active list data
        itemsdisplayList:"", //stores items of the list altered for display
        listname : "", //stores list name
        //quantity: [], 
        categorie : props.categories, //stores category data
        ProvisionalItems : props.displayList, //stores previous list data and updated ones
        mountonce: false, //ensures data was run only once
        ncate :"", //stores filter
        selectedItems : "", //stores ids of items selected by user
        uped : false, //stores if update button was pressed
      }
      //methods used in this component
      this.componentDidMount=this.componentDidMount.bind(this);
      this.componentDidUpdate=this.componentDidUpdate.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmitName=this.handleSubmitName.bind(this);
      this.onclickHandler=this.onclickHandler.bind(this)
    }

    //data that will load on component mount
    componentDidMount() {
        var itemsUrl = "http://localhost:2112/items";
        let idstore = [];
        let i=0;
        var mounted = this.state.mountonce;


        if(mounted===false)
        { //ensures it only loads once and retrieve all items information
          dbGETFetch(itemsUrl)
          .catch(err => err)
          .then((items=>{
            this.setState({ //stores original item data into state
              originallist : items,
              mountonce : true,
              })
            }))
        }
        
        
        dbGETFetch(itemsUrl)
        .catch(err => err)
        .then(items=>{
  
        for(let data of items){ //opens items array 
          //console.log(items)
            this.props.categories.map(categorie =>{ //changes item categorie id by its name->map could be changed to a for cicle
                if(data.category_id === categorie.id_category){
                    data.category_id = categorie.name;
                    //console.log(data.category_id);
    
                  this.setState({ //updates items for display
                    itemsdisplayList :items,
                  })
                }
                return items //map with a arrow function should return something
            })

            this.props.allicons.map(icons =>{ //changes items icons id by corresponding icon logo
                if(data.icon_ID===icons.id_icon){
                    data.icon_ID=icons.icon;
                    this.setState({ //updates items for display
                      itemsdisplayList: items
                    })
                  }
                  return items //map should return something
            })

        }
    })
    //console.log(this.props.displayList)
      for(let ids of this.props.displayList){ //opens previously selected items object received as props
        
        idstore[i] = ids.id; //stores items ids in a stockage array
        i++;
      }

      this.setState({ //saves the ids array into state
        selectedItems : idstore,
      })
      
    }


    handleChange(event) {
        const {name, value} = event.target //recovers values and stores it for the list name change and categorie filter
          this.setState({
            [name]: value
        }) 
      } 

    onclickHandler(id) { //on click event that receives the id of object clicked as parameter
        let items =  this.state.selectedItems; //loads previously selected items to variable
        //console.log(items);
        let display = []; //stockage array for ids of items that will be displayed
        let i=0;
        if(items.includes(id) === false) //if id received was still not selected
        {
          items.push(id); //adds new selected item
          items.sort(); //orders array
        }
          else { //if it was allready selected
            for(let i=0; i<items.length ; i++) //opens array of ids
            { 
              if(items[i]===id) //finds corresponding id and delets it
              items.splice(i,1)
              items.sort();
            }
          }
  
        this.setState({ //updates selected items
          selectedItems : items
        })
  
        this.state.itemsdisplayList.map(selected =>{ //opens stored displayList received as props
          //console.log(selected.id)
          for(let j=0 ; j<items.length ; j++)
          {
            if(items[i]===selected.id){ //stores all data in a array
              display[i] = selected;
              i++;
            }
          }
          return display; //map should return something
  
          
        })
  
        this.setState({
          ProvisionalItems : display, //loads data to be displayed as provisional items
        })
        
        //console.log(this.state.ProvisionalItems)
      } 

      componentDidUpdate(){//if component was changed
        let itemList = [];
        let i = 0;
        let asID = Number(this.state.ncate) //pass all contents of categorie filter to numbers if possible
        if(this.state.ncate.length !==0 && this.state.displayList !==undefined){ //if categorie filter was used
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

      handleSubmitName(event) {//when user press update button
        if(this.state.ProvisionalItems!==[]){ //verifies if user has selected any items to update list

        event.preventDefault(); //prevents default behavior of event
        //console.log(this.state.listname)
        //console.log(this.state.ProvisionalItems);
               
        var listitemURL = "http://localhost:2112/list_item"; 
  
          for(let list of this.props.rawlist){
            //console.log(list) //opens raw list information that belong to group received as props
            if(list.active===1){ //changes to be aplyed only to the active list
            let idlist= list.id; 
            var listsUrl = `http://localhost:2112/lists/${idlist}`;
            
            var listitems = `http://localhost:2112/list_item/listing=/${idlist}`;
            //prepares list info to be updated setting a new name
            var upedList = 
            {
                group_id: list.group_id,
                name: this.state.listname,
                active: list.active,  
            } 
            //loads all items
            dbGETFetch(listitems).then(items =>{ //gets the list items corresponding to id belonging to list
              for(let ids of items){ //opens item
                let itemid =  ids.id_Item; 
                var delItems = `http://localhost:2112/list_item/${idlist}&${itemid}`;
                
                dbDeleteFetch(delItems); //delete all items from the active list
              }
            })
            
            
            dbPUTFetch(listsUrl,upedList).then(listUped =>{//updates list information
              for(let items of this.state.ProvisionalItems) { //opens list of items selected by the user
                var itemList = //prepares info for each item to be updated with default item states as active
                {
                  id_List: list.id,
                  id_Item: items.id,
                  quantity: 1, 
                  status : 1, 
                }
                dbPOSTFetch(listitemURL,itemList) //posts new items to list
              }
            })
          }
          }
          this.setState({ //states that update was pressed
            uped : true,
          })
          //console.log("done");
      } 

      else{ //informes user to select at lest one item in case there is none
        alert("Add at least one item");
      }
      
    }


    render(){//render the component to the react DOM
        var name = this.props.rawlist.map(lis=>{ //opens original object that contains all lists belonging to group
          if(lis.active === 1){ //finds the name of active list
            return lis.name;
          }else{ //returns null for other list names
            return null;
          }
        })
        for(let i=0; i<name.length;i++){ //cleans array of null values
          if(name[i]===null)
          name.splice(i,1);
        }
        //console.log(name)
        let mount = this.componentDidUpdate(); //stores filter value

        if(this.state.uped ===false){ //if update button was not pressed

        
        if(this.state.itemsdisplayList!=="" && mount.length ===0) //if exists a list to display and filter was not used
        {
        var items =  this.state.itemsdisplayList.map(item => //prepares items to be displayed
         // this.state.originallist.map(ori=>
            <ItemList  //loads ItemList component
            key={item.id}  //define each key of child as the item id
            item={item} //send item data as props
            ncate={this.state.ncate} //send filter value as props
            mount={this.componentDidUpdate()} //send filter handler as props
            onclickHandler={this.onclickHandler} //send on click handler as props
            //quantity={this.state.quantity}
            handleChange={this.handleChange} //send on change handler as props
            />   
        )
        return ( //render info
          <div>
              <ListName  //Load ListName Component
              handleSubmitName={this.handleSubmitName} //send handle submit as props
              handleChange={this.handleChange} //send on change handler as props
              listname={this.state.listname} //send listname as props
              categorie={this.state.categorie} //send categorie data as props
              ncate={this.state.ncate} //send filter as props
              provisional={this.state.ProvisionalItems} //send provisional items selected as props
              onclickHandler={this.onclickHandler} //send on click handler as props
              placeholder={name} //send name of active list as props
              />
            <div className="itemContainer"> {/* container box for items */}
              <ul className="itemList"> {/* unordered list of items */}
               {items} {/* display prepared items to list */}
              </ul>
            </div>
          </div>
        )
        } else if(this.state.displayList!=="" && mount.length !==0){ //same as before but with filter being used
          
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
      else{ //if update button was pressed and info was valid, redirects user to "../ShopList"
        return <Redirect push to="/ShopList"/>
    }
  }
}

export default Updatelist




