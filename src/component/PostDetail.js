import React, { Component} from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import {deletePost} from '../actions/postActions'

class PostDetail extends Component {
    // state = {
    //     content: null
    // }
    // componentDidMount() {
    //     console.log(this.props, 99999);
    //     let id = this.props.match.params.post_id;
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
    //        this.setState({
    //            content: res.data.body
    //        })
    //     })
    // }
    // render(){
    //     return (
    //         <div>
    //             {this.state.content? (<div className="post">
    //                 {this.state.content}
    //             </div>): (
    //                 <div>正在加载中...</div>
    //             )}
    //         </div>
    //     )
    // }
    handleDelete = () => {
        this.props.deletePost(this.props.posts.id);
        // 重定向
        this.props.history.push('/');
    }
     render(){
         console.log(this.props, 'pml333');
        return (
            <div>
                {this.props.posts? (<div className="post">
                    <h3>{this.props.posts.title}</h3>
                    <p>{this.props.posts.body}</p>
                    <div className='center'>
                        <button className='btn red' onClick={this.handleDelete}>删除</button>
                    </div>
                </div>): (
                    <div>正在加载中...</div>
                )}
            </div>
        )
    }
}
const b = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    console.log(state, ownProps, 'pml222');
    return {
        posts: state.posts.find(i => i.id === Number(id))
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}
export default connect(b, mapDispatchToProps)(PostDetail);