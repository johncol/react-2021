import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from './slice';

export const ItemsGenerator = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.loading);
  return (
    <button
      style={{ margin: '10px 0', width: '100%' }}
      className="button"
      disabled={loading}
      onClick={() => dispatch(actions.addRandomItemToTry())}
    >
      Add a random item to try
    </button>
  );
};
