import React,{Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
class ToDoList extends Component{
    constructor(props)
    {super(props);
        this.state={
            userName:'Sujeet',
            listItem:[
                {action:'buy Milk', done:false},
                {action:'buy vegetables',done:false},
            ],
            newtodo:'',
        }
    }
    changeState=()=>{
        this.setState({
          
        });
    }
    updatevalue=(evt)=>{
        this.setState({
            newtodo:evt.target.value
        });
        
    }
    newTodo=()=>{
        this.setState({
            listItem:[...this.state.listItem,{action:this.state.newtodo,done:false}]
        });
    };
    toggleDone=(evt)=>{
        this.setState({
            listItem:this.state.listItem.map((item)=>
            item.action===evt.action?{...item,done:!item.done}:item
            ),
        });
    }
    todoRows= ()=> 
        this.state.listItem.map((item)=>(
            <tr key={item.action}>
                <td>{item.action}</td>
                <td>
                    <input type="checkbox"
                    checked={item.done}
                    onChange={()=>this.toggleDone(item)}
                    />
                    
                </td>
            </tr> 
        ));
    
        
         
        
    
    render(){
        const h1Style={
            color: 'white',
            fontSize: 40,
            backgroundColor: '#8E4BE5',
            marginTop: 20
            
          }
        return <>
        <div className="main_div">
            <div className="center_div ">
                <h1  style={h1Style}>ToDoList</h1>
                <input type="text" placeholder="Add an item" value={this.state.newtodo} onChange={this.updatevalue}/>
                <button className="addBtn" onClick={this.newTodo}> + </button>
                <div >
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>{this.todoRows()}</tbody>  
                    </table>
                </div>
            </div>

        </div>
        </>

    }
}
export default ToDoList;
