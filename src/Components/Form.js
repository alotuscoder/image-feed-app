import React from 'react';
import Feed from './Feed';

export default class Form extends React.Component {

    constructor(props) {
        super(props)
        this.submitData = this.submitData.bind(this);
        this.state = {item: []};
        this.feedItems = [];
    }

    submitData(e){
        e.preventDefault();
        const title = e.target.title.value;
        const url = e.target.url.value;
        
        if (url.match(/(jpeg|jpg|gif|png)/g) != null) {
            this.setState((st) => st.item.unshift([url, title]));
        }
        else {
            alert('Add a valid URL')
        }
        e.target.url.value = null;
        e.target.title.value = null;
        e.target.url.focus();
    }

    // Alternative to using a controlled component, saved target event values in constants and assigned used them to set state, and made the event values null without affecting the feed data.  use this 'ref = {this.urlInput}' for enabling the following, and also these,     urlInput = createRef(); and {createRef}
    // componentDidUpdate() {
    //     this.titleInput.current.value = null;
    //     this.urlInput.current.value = null;
    //     this.urlInput.current.focus();
    // }

    render() {
        const {item} = this.state;
        this.feedItems = item.map((batch, index) => <Feed title = {batch[1]} url = {batch[0]} key = {index}/>);

        // Added name to input's to easily access the input values instead of using target[0]
        return (
            <div className = "feed">
            <div className = "input">
                <form onSubmit ={this.submitData}>
                    <input type = "text" name = "url" placeholder = "Enter URL"/>
                    <input type = "text" name = "title" placeholder = "Title"/>
                    <input type = "submit" value = "New Post"/>
                </form>
            </div>
            {this.feedItems}
            </div>
        );
    }
}
