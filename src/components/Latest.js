import React, { Component } from 'react'
import axios from "axios";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
export default class Latest extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            data: [],
            currentPage: 1,
            newsPerPage: 15
        }
    }
    paginate = (pageNumber) => {
        this.setState({ currentPage: pageNumber })
    };
    async componentDidMount() {
        this.setState({ loading: true });
        let response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json");
        this.setState({ data: response.data, loading: false })
    }

    render() {
        const indexOfLastItem = this.state.currentPage * this.state.newsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.state.newsPerPage;
        const currentNews = this.state.data.slice(indexOfFirstItem, indexOfLastItem);
        return (
            <div className="container">
                Latest Stories {
                    this.state.loading || !this.state.data ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="content">
                            <div className="News">
                                {
                                    currentNews.map((item, i) => {
                                        return <NewsItem key={item}
                                            id={item}
                                            index={
                                                (this.state.currentPage - 1) * this.state.newsPerPage + i + 1
                                            }></NewsItem>;
                                    })
                                }</div>
                            <Pagination totalNews={
                                this.state.data.length
                            }
                                newsPerPage={
                                    this.state.newsPerPage
                                }
                                currentPage={
                                    this.state.currentPage
                                }
                                paginate={
                                    this.paginate
                                }></Pagination>
                        </div>
                    )
                } </div>
        )
    }

}

