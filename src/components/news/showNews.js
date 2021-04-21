import { showNewsActionCreator } from '../../Redux/newsReducer';
import styles from "./news.module.css";
import News from './news'


function MyNews(props) {
   
    
    
  let newsElement = props.state.newsData.map((p) => (
     
  <News message={p.news} />));

  let showNews = () => {
    props.dispatch(showNewsActionCreator());
  };

  return (
      <div className={styles.newsBlock}>
           <h1>Новости</h1>
           <ol>
          {newsElement}
          </ol>
      </div>
      
  )
  
}

export default MyNews;