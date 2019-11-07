import React, { Component } from 'react'

export default class MyAsk extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            props:props
        }
    }
    componentDidMount() {
        let page = this.props.match.params.page;
        let idx = this.props.match.params.idx;
        let types=this.state.props.location.pathname.split('/')[1];
        fetch('https://cnodejs.org/api/v1/topics?tab='+types+'&page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(types);
            // console.log(res.data);
            this.setState({
                data:res.data[idx].content
            })
        });
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevProps.match.params.page!==this.props.match.params.page){
            let idx = this.props.match.params.idx;
            let page = this.props.match.params.page;
            let types=this.state.props.location.pathname.split('/')[2];
            console.log(page);
            fetch('https://cnodejs.org/api/v1/topics?tab='+types+'&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                this.setState({
                    data:res.data[idx].content
                })
            });
        };
    }
    render() {
        return(
            <div  className='my-div'  dangerouslySetInnerHTML={{__html:this.state.data}} ></div>
        )
    }
}
