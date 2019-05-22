import React, {Component} from 'react'

class Result extends Component {
    render() {
        let {result} = this.props
        return (
            <div class name='result'>
                <p>{result}</p>
            </div>
        )
    }
}

export default Result