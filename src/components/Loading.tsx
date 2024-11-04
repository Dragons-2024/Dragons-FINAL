import { BallTriangle } from 'react-loader-spinner';

export const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BallTriangle height="100" width="100" color="#FFA600" ariaLabel="loading" />
    </div>
  );
};