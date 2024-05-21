import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#007bff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}