import React, {Component} from 'react';

class Listitem extends Component {
    render() {
        let list = this.props.doThis
        return(
        <>
            <li>{list}</li>
        </>
        )
    }
}

export default Listitem

