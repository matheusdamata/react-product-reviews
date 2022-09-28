import { Review } from '../../helpers/reviews';
import styles from './Review.module.css';

import upIcon from '../../assets/up.png';
import downIcon from '../../assets/down.png';

type Props = {
    item: Review;
};

export const ReviewItem = ({ item }: Props) => {
    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <div className={styles.infoName} style={{ color: item.like ? '#ae22ea' : '#C3423F' }}>{item.name}</div>
                <div className={styles.infoText}>{item.text}</div>
            </div>
            <div className={styles.icon} style={{ backgroundColor: item.like ? '#0EAD69' : '#C3423F' }}>
                <img src={item.like === true ? upIcon : downIcon} alt="Icon image" width={25} /> 
            </div>
        </div>
    );
}