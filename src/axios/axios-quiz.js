import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-cf3e8.firebaseio.com/'
})