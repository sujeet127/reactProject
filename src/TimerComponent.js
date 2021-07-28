import react ,{Component} from 'react'
export default  class TimerComponent extends Component{
    constructor(){
        super();
        this.state={
            date:new Date(),
            
            hour:2,
            minutes:59,
            seconds:60,
        }    
    }
    componentDidMount(){

       this.sec= ()=>{
           this.setState({
               date:new Date(),
               seconds:this.state.seconds>0?this.state.seconds-1 :this.state.seconds=59
 
           });};

       this.min=()=>{
           this.setState({
            minutes:this.state.minutes>0?this.state.minutes-1 :this.state.minutes=59

           });};
          this.hr=()=>{
              this.setState({
                  hour:this.state.hour>0?this.state.hour-1:this.state.hour=0
              });
          } ;
      
       setInterval(this.sec,1000);
       setInterval(this.min,59990);
       setInterval(this.hr,3599000);
    }
    
componentWillUnmount(){
    clearInterval(this.interavl);
}
    render()
    {
        return <>
                    
                    
                    <h2>{this.state.date.toLocaleTimeString()}</h2>
                    <h1>{this.state.hour}:{this.state.minutes}:{this.state.seconds} </h1>
                 </>
    }

}