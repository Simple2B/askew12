import React, {Component} from 'react'
import ScrollButton from 'react-scroll-button'

export default class ScrollComponent extends Component {
    render() {
        return (
            <ScrollButton 
                targetId={'askew-header'}
                behavior={'smooth'} 
                buttonBackgroundColor={'#58d9ad'}
                iconType={'chevron-up'}
                style= {{fontSize: '24px'}}
            />
        );
    }
}