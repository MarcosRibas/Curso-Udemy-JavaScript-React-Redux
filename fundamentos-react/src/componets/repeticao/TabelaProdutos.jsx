import React from 'react'
import produtos from '../../data/produtos'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            {produtos[0].id}
        </div>
    )
}