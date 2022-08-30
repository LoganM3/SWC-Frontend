
export default function AddTask({setTaskList}){
    const [crew, setCrew] = useState('')
    const addCrew = () => {
        fetch('http://localhost:4000/crew',{
            method: 'Post',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({crew, done: false})
        })
            .then(results => results.json())
            .then(data => {
                setTaskList(data)
                setTask('')
            })
            .catch(err => console.error(err))
    }
    return(
        <>
        </>
    )
}