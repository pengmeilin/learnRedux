// 高阶组件，是一个函数，在调用时，其他组件作为参数，返回的是一个新的组件

const Rainbow = (WrappedComponent) => {
    const colors = ['pink', 'blue', 'green', 'orange', 'yellow','red'];
    const randomColor =colors[Math.floor(Math.random() * colors.length)];
    const className = `${randomColor}-text` ;

    return(props) => (
        <div className={className}>
            <WrappedComponent {...props}></WrappedComponent>
        </div>
    );
}
export default Rainbow;