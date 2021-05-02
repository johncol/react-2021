import './Loading.css';

export const Loading = ({ loading }) => {
  return (
    <div className={`loading-screen ${loading ? 'visible' : ''}`}>
      <span className="text">working...</span>
    </div>
  );
};
