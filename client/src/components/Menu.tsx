import { useEffect } from 'react';
import { useAxios } from '../useAxios';

const Menu = () => {
  const { response, fetchData } = useAxios('/test-api', 'GET');
  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <div>
      <p>this is a menu bar</p>
      <button
        className=" mx-auto block bg-blue-200 p-1 rounded-md"
        onClick={() => {
          fetchData();
          console.log('clicked and if you have object in console log Done!!');
        }}
      >
        Click me !
      </button>
      <p>{response ? response.key1 : 'noData click and look in the console'}</p>
    </div>
  );
};

export default Menu;
