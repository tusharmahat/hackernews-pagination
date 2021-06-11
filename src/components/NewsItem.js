import React, {Component} from 'react'
import axios from "axios";
export default class NewsItem extends Component {
    constructor() {
        super();
        this.state = {
            data: ""
        }
    }
    msToTime(ms) {
        let seconds = (ms / 1000).toFixed(0);
        let minutes = (ms / (1000 * 60)).toFixed(0);
        let hours = (ms / (1000 * 60 * 60)).toFixed(0);
        let days = (ms / (1000 * 60 * 60 * 24)).toFixed();
        if (seconds < 60) {
            let plural = seconds > 1 ? "s" : "";
            return seconds + " second" + plural;
        } else if (minutes < 60) {
            let plural = minutes > 1 ? "s" : "";
            return minutes + " minute" + plural;
        } else if (hours < 24) {
            let plural = hours > 1 ? "s" : "";
            return hours + " hour" + plural;
        } else if (days < 365) {
            let plural = days > 1 ? "s" : "";
            return days + " day" + plural;
        } else {
            return null;
        }
    }
    async componentDidMount() {
        let response = await axios.get("https://hacker-news.firebaseio.com/v0/item/" + this.props.id + ".json");
        this.setState({data: response.data});
    }
    render() {
        const {data} = this.state;
        const timeElapsed = this.msToTime((new Date() - new Date(data.time * 1000)));
        return (
            <div className="newsItem">
                {
                data ? <div>
                    <div className="newsItem-grid">
                        <div className="index">
                            {
                            this.props.index + "."
                        }</div>
                        <a href={
                                data.url
                            }
                            className="newsItem-link">
                            {
                            data.title + " "
                        }
                            <span className="url">
                                {
                                data.url ? data.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0] : ""
                            }</span>
                        </a>
                    </div>
                    <div className="newsItem-desc newsItem-grid">
                        <span></span>
                        <span> {
                            data.score + " "
                        }
                            point{
                            data.score > 1 ? "s " : " "
                        }by{
                            " " + data.by + " "
                        }
                            {
                            timeElapsed == null ? new Date(data.time).toDateString() : timeElapsed + " ago"
                        }</span>
                    </div>
                </div> : <span>Loading...</span>
            }</div>
        )
    }

}
