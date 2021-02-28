// import Rainbow from '../hoc/Rainbow';
import React, { Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import { connect} from 'react-redux';

class Home extends Component {
    // state = {
    //     posts: []
    // }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    //         this.setState({posts: res.data})
    //     })
    // }
    render() {
        console.log(this.props);
        const {posts} = this.props;
        const postsList = posts.length?(posts.map(i => {
            return (
                <div className='post card' key={i.id}>
                    <img src={logo} alt=""/>
                    <div className='card-content'>
                        <Link to={`/${i.id}`}>
                            <span className='card-title'>{i.title}</span>
                        </Link>
                    </div>
                </div>
            )
        })): (<div className='center'>没有博客文章进行展示</div>)
        return (
            <div className="container home">
                {postsList}
            </div>
        )
    }
}
const a = (state, ownProps) => {
    console.log(state, ownProps, 'pml111');
    return {
        posts: state.posts
    }
}
// connnect()返回高阶组件
export default connect(a)(Home); // 返回增强版的home组件，能够与store进行连接