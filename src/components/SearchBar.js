import  React  from 'react';
import "../styles/style.css";



class SearchBar extends React.Component {

    state = { title: "manga"}

   

    onSearchChange = event =>{
        const _title = event.target.value;
        this.setState({title:_title})
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.onSearch(this.state.title);
    }

    componentDidMount(){
        this.props.onSearch(this.state.title);
    }
    

    render(){
        return (
            <div id ="SearchBar">
                <form onSubmit={this.onSubmit}>
                    <h1 id='title'>Search for a video</h1>
                <input value ={this.state.title} onChange={this.onSearchChange} type="search" placeholder="Search" id="search"></input>
                <button className="button" onChange={this.onSearchChange}>Search</button>
                
                </form>
                
            </div>
        )
    }

    
    
    
}


export default SearchBar;
