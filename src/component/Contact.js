const Contact = (props) =>{
    console.log(props);
    // 实现两秒后跳转todo页
    // setTimeout(() =>{
    //     props.history.push('/todo');
    // },2000)
    return (
        <div className="container">
            <h3 className='center'>天天要联系~</h3>
        </div>
    )
}
export default Contact;