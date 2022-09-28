import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { motion } from 'framer-motion';

import IconReview from '../src/assets/review.svg';
import IconReload from '../src/assets/reload.svg';

import { Review } from './helpers/reviews';

import { ReviewItem } from './components/Review';

import ReviewAPI from './config/api';
import Loader from './components/Loader';

const App = () => {
  const [getDataReviews, setGetDataReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);

  const getReviews = async () => {
    setLoading(true);

    let json = await ReviewAPI.getReviews();

    if(json.list.length > 0) {
      let result = await json;
      setGetDataReviews(result.list);

      setLoading(false);
    } else {
      setGetDataReviews([]);
      setLoading(false);
    }
  }

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className={styles.main}>
      { loading &&
        <Loader />
      }

      { !loading &&
      <>
        <motion.header 
          initial={{ y: -500 }}
          animate={{ y: 0}}
          transition={{ delay: .25, duration: .8 }}
          >
          <div className={styles.headerContainer}>
            <img src={IconReview} alt="Icon review" width={35} />
            <div className={styles.headerText}>{getDataReviews.length} Reviews</div>
            <button
              onClick={getReviews}
              className={styles.headerButton}
            >
              <img src={IconReload} alt="Icon reload" width={25} height={25} />
            </button>
          </div>
        </motion.header>
        
        <div className={styles.container}>
          {getDataReviews.map((item, key) => (
            <ReviewItem key={key} item={item} />
          ))}
        </div>
      </>
      }
    
    </div>
  )
}

export default App
