import React from 'react';
import './Listitem.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function Listitem(props){
    const items = props.items;
    const listitems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>
                    <input type="text"
                    id={item.key}
                    value={item.text}
                    onChange ={
                        (e) =>{
                            props.setUpdate(e.target.value, item.key)
                        }
                    }
                    />
                <spam>
                    <FontAwesomeIcon className="faicons" icon="trash"
                    icon='trash'
                    onClick={ () => props.deleteItem(item.key) }
                    />
                
                </spam>
                </p>
                
            </div>
        })
    return(
        <div>
        <FlipMove duration={500} easing="ease-in-out">
        {listitems}
        </FlipMove>
        </div>

    )
}
export default Listitem;
