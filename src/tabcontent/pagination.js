import React, { Component } from 'react'

export class Pagination extends Component {
    render() {
        const { modifiedPage, originalPage, paginate, nextPage, prevPage} = this.props;

        var arrOfCurrButtons = [];
        if(modifiedPage.length===0)
        {
            arrOfCurrButtons = originalPage
        }
        else{
            arrOfCurrButtons = modifiedPage
        }

        return (
            <nav>
                <ul className="pagination no-margin pull-right">
                        <li key={0} className="page-item">
                            <button className='page-link' onClick={() => prevPage()}>
                                Prev
                            </button>
                        </li>
                        {arrOfCurrButtons.map(((item, index) => {
                            return <li key={index+1} className="page-item">
                                <button className='page-link' onClick={() => paginate(item)}>
                                    {item}
                                </button>
                            </li> 
                        }))}
                        <li key={arrOfCurrButtons.length+1} className="page-item">
                            <button className='page-link' onClick={() => nextPage()} >
                                Next
                            </button>
                        </li>
                    </ul>
            </nav>
        )
    }
}

export default Pagination