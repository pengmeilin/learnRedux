function todoList ({todos, deleteTodos}) {
    const todoList = todos.length?(todos.map(i => {
        return(
            <div className='collection-item' key={i.id}>
                    <span onClick={() => deleteTodos(i.id)}>{i.content}</span>
            </div>
        )
    })): (<p className='center'>恭喜你完成所有的代办事项</p>);
        return(
            <div className='todos collection' >
                {todoList}
            </div>
        )
    }
export default todoList;