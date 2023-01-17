import { useParams } from 'react-router-dom';
import axios from 'axios';

const axiosAdd = require('axios').default;
const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자',
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공',
    },
};
console.log(1);

const TodoFile = () => {
    const [todos, setTodos] = useState([]);

    // const params = useParams();
    // const TodoFile = data[params.username];

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8080/todos'
                );
                //console.log(response);
                //console.log(response.data.data);
                setTodos(response.data.data);
            } catch (e) {
                console.log(e);
            }
        };

        loadData();
    }, []);

    return (
        <div>
            Todofile내용부분
            {/* <h1>사용자 프로필</h1>
            {TodoFile ? (
                <div>
                    <h2>{TodoFile.title}</h2>
                    <p>{TodoFile.content}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )} */}
        </div>
    );
};

export default TodoFile;