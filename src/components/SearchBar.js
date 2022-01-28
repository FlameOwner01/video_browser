import  React  from 'react';
import "../styles/style.css";



class SearchBar extends React.Component {

    state = { title: "best music"}

   

    onSearchChange = event =>{
        const _title = event.target.value;
        this.setState({title:_title})
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.onSearch(this.state.title);
    }
    firstSearch = event =>{
        event.preventDefault();
        const _title = event.target.value;  
        this.props.onSearch(_title);
    }

    render(){
        return (
            <div id ="SearchBar" onLoadStart={this.firstSearch} value="Manga">
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
