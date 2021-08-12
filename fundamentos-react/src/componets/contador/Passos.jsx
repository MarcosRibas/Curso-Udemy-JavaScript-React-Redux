import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            <label htmlFor="passoInput">
            <input 
                id="passoInput" 
                type="number" 
                value={this.state.passo} 
                onChange={this.setPasso}/>                    
            </label>
        </div>

    )
}