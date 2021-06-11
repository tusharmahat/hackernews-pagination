import React, {Component} from 'react'

export default class Pagination extends Component {
    render() {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.totalNews / this.props.newsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div>
                <ul className="Pagination">
                    {
                    pageNumbers.map(i => {
                        return <li key={i}>
                            <span onClick={
                                    () => this.props.paginate(i)
                                }
                                className={
                                    this.props.currentPage == i ? "currentPage" : "otherPage"
                            }>
                                {i} </span>
                        </li>;
                    })
                } </ul>
            </div>

        )
    }
}
